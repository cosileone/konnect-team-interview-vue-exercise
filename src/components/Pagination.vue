<template>
  <div class="pagination">
    <div class="previous">
      <slot
        name="prevButton"
        :prev-page="prevPage"
      >
        <button
          class="pagination__button pagination__button--previous"
          :class="{'pagination__button--disabled': value === 0}"
          @click="prevPage"
        >
          &#8592;
        </button>
      </slot>
    </div>
    <div class="pagination__description">
      <slot>
        {{ startIndex }} — {{ endIndex }}
        of {{ totalCount }}
      </slot>
    </div>
    <div class="next">
      <slot
        name="nextButton"
        :next-page="nextPage"
      >
        <button
          class="pagination__button pagination__button--next"
          :class="{'pagination__button--disabled': value === numPages}"
          @click="nextPage"
        >
          &#8594;
        </button>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    value: { type: Number, required: true },
    pageSize: { type: Number, required: true },
    totalCount: { type: Number, default: 0 }
  },
  computed: {
    startIndex () {
      return this.value * this.pageSize
    },
    endIndex () {
      return Math.min((this.startIndex + this.pageSize), this.totalCount)
    },
    numPages () {
      return Math.ceil(this.totalCount / this.pageSize)
    }
  },
  methods: {
    setPage (pageNum) {
      this.$emit('input', pageNum)
    },
    prevPage () {
      const newPage = Math.max(0, this.value - 1)

      this.setPage(newPage)
    },
    nextPage () {
      const newPage = Math.min(this.numPages - 1, this.value + 1)

      this.setPage(newPage)
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;

  .pagination__description {
    display: flex;
    align-items: center;
    margin: 0 48px;
  }

  &__button {
    background: none;
    border: 1px solid var(--blue-300);
    border-radius: 50%;
    color: var(--blue-500);
    cursor: pointer;
    height: 44px;
    width: 44px;

    &--previous {}

    &--next {}

    &--disabled {
      border: 1px solid #e5e5e5;
      color: rgba(0, 0, 0, 0.25);
      cursor: initial;
    }
  }
}
</style>
