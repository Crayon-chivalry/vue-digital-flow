<template>
  <div class="footer">
    <div class="logo">
      <img src="@/assets/images/common/logo.png" class="logo-image" />
      <div>数智通</div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-row">
        <div>隐私政策</div>
        <div>服务条款</div>
        <div>Cookie 设置</div>
      </div>
      <div>2025. All right reserved.</div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.footer {
  padding: 200px 60px 40px;
  background-image: url('@/assets/images/common/footer-bg.png');
  background-size: 100% auto;
  background-repeat: no-repeat;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  color: #fff;
}

.logo-image {
  width: 30px;
}

.footer-bottom {
  margin-top: 80px;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #726f6f;
  color: #fff;
  font-size: 14px;
}

.footer-bottom-row {
  display: flex;
  gap: 20px;
}

.footer-bottom-row > div {
  cursor: pointer;
}

@media (max-width: 768px) {
  .footer {
    padding: 80px 40px 40px;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .footer-bottom {
    margin-top: 40px;
  }
}
</style>