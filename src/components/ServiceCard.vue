<template>
  <KCard class="service-card">
    <template slot="title">
      <span class="service-card__title">{{ service.name }}</span>
    </template>
    <template slot="body">
      <div class="service-card__body">
        <span class="service-card__body-text">
          {{ service.description }}
        </span>
        <div class="service-card__version">
          <KPill :value="service.versions.length" />
          <span class="service-card__version__text">
            Versions
          </span>
        </div>
      </div>
    </template>
  </KCard>
</template>

<script>
import KCard from '@kongponents/kcard'
import KPill from '@/components/KPill.vue'

export default {
  name: 'ServiceCard',
  components: {
    KCard,
    KPill
  },
  props: {
    service: { type: Object, required: true }
  }
}
</script>

<style lang="scss" scoped>
.service-card {
  cursor: pointer;
  margin: 0 auto 32px 0;
  height: 181px;
  width: 215px;

  &:nth-child(4n) {
    margin-right: 0;
  }

  &__title {
    display: inline-block;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 183px;

    color: var(--blue-500);
  }

  &__body {
    height: 64px;
    position: relative;

    &-text {
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;

      font-size: 14px;
      line-height: 16px;

      margin-top: -10px;
    }
  }

  &__version {
    position: absolute;
    bottom: -36px;

    &__text {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;

      color: rgba(0, 0, 0, 0.7);
    }
  }

  &:hover {
    border: 1px solid var(--blue-300);
  }
}
</style>
