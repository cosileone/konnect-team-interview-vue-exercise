<template>
  <div class="pill">
    <slot>
      {{ value }}
    </slot>
  </div>
</template>

<script>
export default {
  name: 'KPill',
  props: {
    value: {
      type: [Number, String],
      required: true
    }
  }
}
</script>

<style scoped>
.pill {
  border: 1px solid #D9E7FF;
  display: inline-block;
  box-sizing: border-box;
  border-radius: 40px;
  padding: 2px 10px 2px 10px;
  text-align: center;

  font-family: Roboto, 'sans-serif';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: var(--blue-500);
}
</style>
