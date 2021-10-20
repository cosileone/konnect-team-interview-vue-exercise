<template>
  <input
    v-model="value"
    v-bind="$attrs"
    @input="handleInput"
  >
</template>

<script>
export default {
  name: 'KSearchInput',
  props: {},
  data () {
    return {
      value: ''
    }
  },
  methods: {
    handleInput (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 9px;

  font-size: 16px;
  line-height: 19px;

  &[type="search"] {
    padding-left: 36px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath fill='%23000' fill-opacity='.45' fill-rule='evenodd' d='M9.1237341 11.1237341C8.2138377 11.6796483 7.1443299 12 6 12c-3.3137085 0-6-2.6862915-6-6s2.6862915-6 6-6 6 2.6862915 6 6c0 1.1443299-.3203517 2.2138377-.8762659 3.1237341L13.5 11.5c.577204.577204.5829926 1.4170074 0 2-.5781647.5781647-1.4256897.5743103-2 0l-2.3762659-2.3762659zM6 10c2.209139 0 4-1.790861 4-4S8.209139 2 6 2 2 3.790861 2 6s1.790861 4 4 4z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: 12px 50%;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.45);
  }
}

</style>
