<template>
  <div class="feature">
    <div class="feature-row">
      <div class="feature-text">
        <h2>简单高级保护</h2>
        <p>使用自动化工具识别潜在风险，及时通知您的团队采取措施。我们的系统会持续监控数据安全，确保您的业务不受威胁。</p>
        <div class="feature-btn">了解更多</div>
      </div>
      <img src="@/assets/images/home/protection-mockup.png" class="feature-image" />
    </div>
    <div class="feature-row">
      <img src="@/assets/images/home/advanced-protection.png" class="feature-image" />
      <div class="feature-text">
        <h2>高级保护模式轻松</h2>
        <p>使用自动化工具识别潜在风险，及时通知您的团队采取措施。我们的系统会持续监控数据安全，确保您的业务不受威胁。</p>
        <div class="feature-btn">了解更多</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.feature-row {
  padding: 100px 160px;
  display: flex;
  align-items: center;
  gap: 36px;
}

.feature-image {
  width: 620px;
}

.feature-btn {
  margin-top: 30px;
  width: 187px;
  height: 60px;
  line-height: 60px;
  display: inline-block;
  border-radius: 99px;
  text-align: center;
  border: 1px solid #FF007A;
  color: #FF007A;
  font-size: 18px;
}

@media (max-width: 768px) {
  .feature-row {
    padding: 40px;
    display: block;
  }

  .feature-image {
    width: 100%;
  }

  .feature-row:first-child .feature-image {
    margin-top: 30px;
  }
}
</style>