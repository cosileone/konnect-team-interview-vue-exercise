<template>
  <button
    type="button"
    v-bind="$attrs"
    :style="buttonBgColorCSSVariable"
    v-on="$listeners"
  >
    <slot name="prepend" />
    <slot>
      <slot name="text" />
    </slot>
    <slot name="append" />
  </button>
</template>

<script>
export default {
  name: 'KButton',
  props: {
    color: {
      type: String,
      default: 'var(--blue-500)'
    }
  },
  computed: {
    buttonBgColorCSSVariable () {
      return {
        '--button-bg-color': this.color
      }
    }
  }
}
</script>

<style scoped>
:root {
  --button-bg-color: var(--blue-500);
}

button {
  cursor: pointer;
  padding: 8px 12px;

  background-color: var(--button-bg-color);
  border-radius: 3px;
  border: none;

  color: #FFFFFF;
  font-size: 16px;
  line-height: 19px;
}
</style>
