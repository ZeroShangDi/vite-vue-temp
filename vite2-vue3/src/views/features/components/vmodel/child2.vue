<template>
  <div @click="$emit('update:count', this.count + 1)">
    i am child, {{ count }}
  </div>
</template>

<script>
export default {
  name: 'v-model-child',
  props: ['count'],
}
</script>

<style lang="scss" scoped></style>
