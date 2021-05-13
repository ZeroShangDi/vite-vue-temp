<template>
  <div>
    <p>Vue3.0 新特性 练习</p>

    <p>1、v-model</p>
    <FeaturesModel></FeaturesModel>

    <p>2、函数组件</p>
    <FeaturesFun :level="3">这是一个动态函数组件</FeaturesFun>

    <p>3、异步组件</p>
    <FeaturesAsync></FeaturesAsync>

    <p>4、动画</p>
    <FeaturesTrans></FeaturesTrans>
  </div>
</template>

<script>
import FeaturesModel from './components/vmodel/father.vue'
import FeaturesFun from './components/function/index.vue'
import FeaturesAsync from './components/async/index.vue'
import FeaturesTrans from './components/transition/index.vue'
import { defineAsyncComponent } from 'vue'
export default {
  name: 'features',
  components: {
    FeaturesModel,
    FeaturesFun,
    FeaturesAsync: defineAsyncComponent({
      loader: () => import('./components/async/index.vue'),
      delay: 200, //
      timeout: 3000, //
      errorComponent: null, //
      loadingComponent: null, //
    }),
    FeaturesTrans,
  }
}
</script>

<style lang="scss" scoped>

</style>
