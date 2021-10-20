<template>
  <div class="services-page">
    <div class="services-page__header">
      <h1 class="page-title">
        Services
      </h1>
      <KButton
        type="button"
        @click="handleNewServiceButtonClick"
      >
        Add New Service
      </KButton>
    </div>
    <div class="services-page__search">
      <KSearchInput
        v-model="searchTerm"
        type="search"
        placeholder="Search"
      />
    </div>
    <div class="catalog">
      <ServiceCard
        v-for="service in paginatedServices"
        :key="service.id"
        :service="service"
        @click.native="navigateToService(service.id)"
      />
    </div>
    <Pagination
      v-model="page"
      :total-count="filteredResultsCount"
      :page-size="resultLimit"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import KSearchInput from '@/components/KSearchInput.vue'
import KButton from '@/components/KButton.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import Pagination from '@/components/Pagination.vue'
import axios from 'axios'

export default {
  name: 'Catalog',
  components: {
    ServiceCard,
    KButton,
    KSearchInput,
    Pagination
  },
  data () {
    return {
      searchTerm: '',
      page: 0,
      resultLimit: 12
    }
  },
  computed: {
    ...mapGetters('services', [
      'filterServices'
    ]),
    filteredServices () {
      return this.filterServices({
        searchTerm: this.searchTerm
      })
    },
    paginatedServices({ page, resultLimit }) {
      const startIndex = page * resultLimit

      return this.filteredServices.slice(startIndex, startIndex + resultLimit)
    },
    filteredResultsCount () {
      return this.filteredServices.length
    }
  },
  watch: {
    searchTerm (val) {
      this.page = 0
    }
  },
  async mounted () {
    const { data } = await this.fetchServices()

    await this.setServices(data)
  },
  methods: {
    ...mapActions('services', [
      'setServices'
    ]),
    fetchServices () {
      return axios.get('/api/service_packages').then(res => res)
    },
    handleNewServiceButtonClick () {
      // no specified functionality yet
    },
    navigateToService (serviceId) {
      this.$router.push({ name: 'ServiceDetail', params: { serviceId } })
    }
  }
}
</script>

<style lang="scss">
.page-title {
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 28px;

  color: #0A2B66;
}

.services-page {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 942px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__search {
    margin-bottom: 24px;
  }
}

.catalog {
  display: flex;
  flex-wrap: wrap;
}
</style>
