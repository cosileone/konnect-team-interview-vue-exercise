<template>
  <div>
    <h1>Service Detail Page</h1>
    <pre>{{ service }}</pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ServiceDetail',
  computed: {
    ...mapGetters('services', [
      'getServiceById'
    ]),
    service () {
      return this.getServiceById(this.$route.params.serviceId)
    }
  }
}
</script>

<style scoped>

</style>
