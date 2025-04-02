<template>
  <div class="news">
    <div class="news-header">
      <div>
        <h2>最新动态</h2>
        <p>了解数智通的最新发展</p>
      </div>
      <div class="more-btn">查看全部</div>
    </div>
    <div class="news-row">
      <div class="news-card" v-for="item in list" :key="item.id">
        <img :src="item.cover" class="cover" />
        <div class="news-card-content">
          <div class="news-title">{{ item.title }}</div>
          <div class="news-label">{{ item.content }}</div>
          <div class="text-link">阅读更多 →</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const list = [
  {
    id: 1,
    cover: require('@/assets/images/home/news1.png'),
    title: 'Our Favorite Productive Thing Is SaaSup', 
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
  },
  {
    id: 2,
    cover: require('@/assets/images/home/news2.png'),
    title: 'Young Startups With SaaSup In Full Throttle', 
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
  },
  {
    id: 3,
    cover: require('@/assets/images/home/news3.png'),
    title: 'The perfect integration for all real time a reality services', 
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
  }
]
</script>

<style scoped>
.news {
  padding: 100px 160px;
  background-color: #F4FBFF;
}

.news-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.news-header h2 {
  margin: 0;
}

.more-btn {
  width: 110px;
  height: 56px;
  line-height: 56px;
  border: 1px solid #FF007A;
  color: #FF007A;
  border-radius: 99px;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
}

.news-row {
  margin-top: 80px;
  display: flex;
  gap: 32px;
}

.news-card {
  flex: 1;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.cover {
  width: 100%;
}

.news-card-content {
  padding: 23px;
}

.news-title {
  font-size: 23px;
  font-weight: bold;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.news-label {
  margin-top: 10px;
  font-size: 16px;
  color: #3D3A41;
}

.text-link {
  margin-top: 20px;
  font-size: 18px;
  color: #FF007A;
  cursor: pointer;
}

@media (max-width: 768px) {
  .news {
    padding: 40px;
  }

  .news-row {
    margin-top: 60px;
    display: block;
  }

  .news-card:nth-child(n+2) {
    margin-top: 30px;
  }
}
</style>