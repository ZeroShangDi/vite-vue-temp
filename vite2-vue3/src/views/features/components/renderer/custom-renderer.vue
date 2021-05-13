<template>
  <div>{{ count }}</div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  name: 'customRenderer',
  setup() {
    // 自定义渲染器:

    const state = reactive({
      count: 3,
    })

    return {
      ...toRefs(state),
    }
  },
}
</script>

<style lang="scss" scoped></style>
