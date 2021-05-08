<template>
    <section class="app-main">
        <router-view v-slot="{ Component }">
            <transition name="fade-transform" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.app-main {
    width: 100%;
}
</style>