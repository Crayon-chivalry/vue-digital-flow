<template>
  <div class="free-trial text-center">
    <h2>开始15天免费试用</h2>
    <p>无风险体验我们的完整功能，无需信用卡</p>
    <div class="trial-form">
      <div class="trial-form-row">
        <input type="email" placeholder="请输入您的邮箱" />
        <div class="trial-btn">注册</div>
      </div> 
      <p>通过注册，您同意我们的服务条款和隐私政策。</p>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.free-trial {
  padding: 100px 64px;
  background-color: #6B50FF;
  color: #fff;
}

.trial-form {
  display: inline-block;
  margin: 30px auto 0;
}

.trial-form-row {
  display: flex;
  align-items: center;
  gap: 20px;
}

.trial-form input {
  padding: 2px 16px;
  width: 365px;
  height: 48px;
  font-size: 18px;
  border-radius: 99px;
  overflow: hidden;
  border: none;
  outline: none;
}

.trial-btn {
  width: 132px;
  height: 56px;
  line-height: 56px;
  text-align: center;
  border-radius: 99px;
  background-color: #FF007A;
  font-size: 18px;
  cursor: pointer;
}

.trial-form p {
  margin-top: 20px;
}

@media (max-width: 768px) {
  .free-trial {
    padding: 60px 40px;
    background-color: #6B50FF;
    color: #fff;
  }
  .trial-form input {
    width: 300px;
  }
}
</style>