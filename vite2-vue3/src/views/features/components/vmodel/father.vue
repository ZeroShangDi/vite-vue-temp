<template>
  <div>
    <!-- 以 modelValue 接收 -->
    <child-1 v-model="count"></child-1>

    <!-- 以 自定义名称接收 -->
    <!-- eslint-disable-next-line vue/valid-v-model -->
    <child-2 v-model:count="counter"></child-2>
  </div>
</template>

<script>
import child1 from './child1.vue'
import child2 from './child2.vue'
// 删除 sync 修饰符, 统一为 v-model
export default {
  components: {
    child1,
    child2,
  },
  data() {
    return {
      count: 0,
      counter: 0,
    }
  },
}
</script>

<style lang="scss" scoped></style>
