<template>
  <div>
    <!-- 顶部导航栏 -->
    <app-header />
    <!-- 欢迎 封面 部分 -->
    <hero-section />
    <!-- 软件解决方案 -->
    <solution />
    <!-- 保护 -->
    <protection />
    <!-- 客户评价 -->
    <testimonials />
    <!-- 定价方案 -->
    <pricing />
    <!-- 免费试用 -->
    <free-trial />
    <!-- 最新新闻 -->
    <recent-news />
    <!-- 合作伙伴 -->
    <partners />
    <!-- 底部页脚 -->
    <app-footer />
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import HeroSection from './components/HeroSection.vue'
import Solution from './components/Solution.vue'
import Protection from './components/Protection.vue'
import Testimonials from './components/Testimonials.vue'
import Pricing from './components/Pricing.vue'
import FreeTrial from './components/FreeTrial.vue'
import RecentNews from './components/RecentNews.vue'
import Partners from './components/Partners.vue'
</script>

<style scoped></style>