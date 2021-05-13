<template>
  <div @click="$emit('update:modelValue', this.modelValue + 1)">
    i am child, {{ modelValue }}
  </div>
</template>

<script>
export default {
  name: 'v-model-child',
  props: ['modelValue'],
}
</script>

<style lang="scss" scoped></style>
