<template>
    <div class="app-wrapper">
        <!-- 侧边栏 -->
        <div class="sidebar-container">
            <!-- 菜单 -->
            <sidebar class="sidebar"></sidebar>
        </div>
        <!-- 内容区 -->
        <div class="main-container">
            <!-- 导航 -->
            <navbar class="navbar"></navbar>

            <!-- 标签 -->
            <tags-view class="tags-view"></tags-view>

            <!-- 内容 -->
            <app-main class="app-main"></app-main>
        </div>
    </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue'
import Navbar from './Navbar.vue'
import TagsView from './TagsView.vue'
import AppMain from './AppMain.vue'
</script>

<style lang="scss" scoped>
@import 'styles/variables.scss';
.app-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
}

.sidebar-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10001;
    width: $sideBarWidth;
    height: 100%;
    overflow: hidden;

    .sidebar {
        width: 100%;
        min-height: 100%;
        background: firebrick;
    }
}

.main-container {
    position: relative;
    min-height: 100%;
    margin-left: $sideBarWidth;

    .navbar {
        width: 100%;
        height: $navBarHeight;
        background: gold;
    }

    .tags-view {
        width: 100%;
        height: $tagsViewHeight;
        background: greenyellow;
    }

    .app-main {
        width: 100%;
        height: calc(100% - #{$tagsViewHeight + $navBarHeight});
    }
}
</style>