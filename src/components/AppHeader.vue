<template>
  <div class="header" :class="{'header-bg': showBgColor}">
    <div class="header-logo">
      <img src="@/assets/images/common/logo.png" class="logo-image" />
      <div>数智通</div>
    </div>
    <div class="header-nav">
      <div v-for="item in navList" :key="item.id" @click="scrollTo(item.id)">{{ item.name }}</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const navList = [
  {name: '首页', id: 'home'},
  {name: '关于我们', id: 'about'},
  {name: '高级保护', id: 'protect'},
  {name: '价格', id: 'pricing'},
  // {name: '联系我们', id: 'contact'},
]

const showBgColor = ref(false)

const handleScroll = () => {
  requestAnimationFrame(() => {
    const scrollPosition = window.scrollY
    showBgColor.value = scrollPosition > 30
  })
}

const scrollTo = (targetId) => {
  const element = document.getElementById(targetId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth', // 平滑滚动
      block: 'start'      // 对齐到视口顶部
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  padding: 15px 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.3s ease;
  z-index: 9;
}

.header-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  font-size: 24px;
}

.logo-image {
  width: 40px;
}

.header-nav {
  display: flex;
  gap: 40px;
  font-size: 18px;
}

.header-nav > div {
  cursor: pointer;
}

.header-bg {
  background-color: #fff;
  color: #000;
  border-bottom: 1px solid rgba(0, 0, 0, .05);
}

@media (max-width: 768px) {
  .header {
    padding: 20px;
  }
}
</style>