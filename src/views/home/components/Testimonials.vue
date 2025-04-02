<template>
  <div class="testimonials">
    <div class="text-center">
      <h2>客户评价</h2>
      <p>听听我们的客户怎么说</p>
    </div>
    <swiper :modules="[Pagination]" :slides-per-view="isMobile ? 2 : 3" space-between="40" :pagination="{ clickable: true }" class="testimonials-swiper">
      <swiper-slide v-for="(item,index) in 10" :key="index">
        <div class="stars">
          <span v-for="item in 5" :key="item">★</span>
        </div>
        <p>"数智通的解决方案彻底改变了我们团队的工作方式。自动化功能节省了大量时间，让我们可以专注于更重要的任务。强烈推荐给任何希望提高效率的企业！"</p>
        <div class="testimonial-author">
          <img src="@/assets/images/home/author.png" class="author-image" />
          <div>
            <h4>布鲁克林·西蒙斯</h4>
            <p>美洲银行</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// 判断是否为移动设备
const isMobile = window.innerWidth <= 768
</script>

<style scoped>
.testimonials {
  padding: 100px 160px;
}

.testimonials-swiper {
  margin-top: 80px;
  padding-bottom: 100px;
  cursor: pointer;
}

.stars {
  display: flex;
  gap: 8px;
  font-size: 28px;
  color: #42A8DF;
}

.author-image {
  width: 53px;
  height: 53px;
}

.testimonial-author {
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.testimonial-author h4 {
  margin: 0;
}

.testimonial-author p {
  margin: 6px 0 0;
}

@media (max-width: 768px) {
  .testimonials {
    padding: 40px;
  }
}
</style>