<template>
  <div>
    <button @click="show = !show">切换显示</button>
    <transition name="fade">
      <p v-if="show">这是带动画的文本</p>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true
      }
    }
  }
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
