<template>
  <div class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <h1>您的数字化业务在我们手中是安全的！</h1>
        <p>通过集成的生态系统简化您的工作流程，让所有部门协同高效工作。</p>
        <div class="hero-button">
          <div>开始使用</div>
          <div>观看视频</div>
        </div>
      </div>
      <img src="@/assets/images/home/laptop-mockup.png" class="laptop-image" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.hero-content {
  background-image: url('@/assets/images/home/hero-bg.png');
  background-size: 100% auto;
  background-repeat: no-repeat;
}

.hero-text {
  padding-top: 160px;
  margin: 0 auto;
  width: 65%;
  text-align: center;
  color: #fff;
}

.hero-button {
  margin-top: 60px;
  display: flex;
  justify-content: center;
  gap: 30px;
}

.hero-button > div {
  padding: 12px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 99px;
  background-color: #FF007A;
  cursor: pointer;
  box-sizing: border-box;
  font-size: 16px;
}

.hero-button > div:nth-child(2) {
  background-color: transparent;
  box-shadow: 0 0 0 1px #fff inset;
}

.laptop-image {
  margin: 40px auto 0;
  display: block;
  width: 50%;
}

@media (max-width: 768px) {
  .hero-content {
    background-image: url('@/assets/images/home/hero-bg.png');
    background-size: cover;
    background-repeat: no-repeat;
  }

  .hero-text {
    padding: 100px 40px 40px;
    width: auto;
  }

  .laptop-image {
    margin: 0px auto;
    display: block;
    width: 80%;
  }
}
</style>