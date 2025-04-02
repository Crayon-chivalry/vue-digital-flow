<template>
  <div class="pricing">
    <div class="text-center">
      <h2>简单灵活的定价方案</h2>
      <p>从基础版开始，逐步构建您的自定义解决方案，或选择企业套件</p>
    </div>
    <div class="pricing-row">
      <div class="pricing-card" :class="{'pricing-active': item.id == activeId}" v-for="item in list" :key="item.id" @click="activeId = item.id">
        <div class="text-center">
          <div class="pricing-name">{{ item.name }}</div>
          <div class="pricing-amount">¥{{ item.monthlyFee }}/月</div>
          <div class="pricing-amount-year">或每年￥{{ item.annualFee }}</div>
        </div>
        <ul class="features">
          <li v-for="(features, featuresIndex) in item.features" :key="featuresIndex">
            {{ features }}
          </li>
        </ul>
        <div class="btn">开始使用</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const list = [
  {
    id: 1,
    name: '基础版',
    monthlyFee: 19, 
    annualFee: 199, 
    features: ['无限用户', '无限反馈', '每周团队反馈总结', '自定义仪表盘和可视化', '团队反馈历史']
  },
  {
    id: 2,
    name: '商业版',
    monthlyFee: 29, 
    annualFee: 299, 
    features: ['无限用户', '无限反馈', '每周团队反馈总结', '团队反馈历史', '高级集成']
  },
  {
    id: 3,
    name: '企业版',
    monthlyFee: 49, 
    annualFee: 499, 
    features: ['无限用户', '无限反馈', '每周团队反馈总结', '团队反馈历史（30天）', '个人反馈历史（6个月）']
  }
]

const activeId = ref(1)
</script>

<style scoped>
.pricing {
  padding: 100px 160px;
}

.pricing-row {
  margin-top: 80px;
  display: flex;
  gap: 32px;
}

.pricing-card {
  flex: 1;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 12px;
  cursor: pointer;
  border: 1px solid rgba(222, 217, 217, .6);
}

.pricing-name {
  font-size: 20px;
  font-weight: bold;
}

.pricing-amount {
 margin: 10px 0;
  font-size: 28px;
  font-weight: bold;
}

.features {
  margin-top: 39px;
  font-size: 16px;
  color: #3D3A41;
}

.pricing-amount-year {
  font-size: 16px;
  color: #3D3A41;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

.features li {
  margin-bottom: 16px;
  position: relative;
  padding-left: 20px; 
}

.features li::before {
  content: "✔";
  position: absolute;
  left: 0; 
  color: green;
}

.btn {
  margin-top: 30px;
  width: 100%;
  height: 55px;
  line-height: 55px;
  text-align: center;
  color: #FF007A;
  font-size: 18px;
  border-radius: 99px;
  border: 1px solid #FF007A;
}

.pricing-active {
  border-color: rgba(255, 0, 122, .7);
}

@media (max-width: 768px) {
  .pricing {
    padding: 40px;
  }

  .pricing-row {
    margin-top: 50px;
    display: block;
  }

  .pricing-card:nth-child(n+2) {
    margin-top: 30px;
  }
}
</style>