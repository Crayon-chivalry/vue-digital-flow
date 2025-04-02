<template>
  <div class="partners">
    <div class="text-center">
      <h2>我们可以让故事成真</h2>
      <p>通过创新技术，帮助您实现数字化转型，提升业务效率</p>
    </div>
    <div class="partner-logos">
      <div class="partner-logo">
        <img src="@/assets/images/home/Webflow.png" />
      </div>
      <div class="partner-logo">
        <img src="@/assets/images/home/Airtable.png" />
      </div>
      <div class="partner-logo">
        <img src="@/assets/images/home/Notion.png" />
      </div>
      <div class="partner-logo">
        <img src="@/assets/images/home/TikTok.png" />
      </div>
      <div class="partner-logo">
        <img src="@/assets/images/home/Slack.png" />
      </div>
      <div class="partner-logo">
        <img src="@/assets/images/home/Zoom.png" />
      </div>
      <div class="partner-logo">
        <img src="@/assets/images/home/Spotify.png" />
      </div>
      <div class="partner-logo">
        <img src="@/assets/images/home/Dell.png" />
      </div>
      <div class="partner-logo">
        <img src="@/assets/images/home/Samsung.png" />
      </div>
      <div class="partner-logo">
        <img src="@/assets/images/home/Amazon.png" />
      </div>
      <div class="partner-logo">
        <img src="@/assets/images/home/Alibaba.png" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.partners {
  padding: 100px 160px;
}

.partner-logos {
  margin-top: 80px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px 80px;
}

.partner-logo {
  width: calc(25% - 60px);
}

.partner-logo img {
  width: 100%;
}

@media (max-width: 768px) {
  .partners {
    padding: 40px;
  }

  .partner-logos {
    margin-top: 40px;
    gap: 20px 30px;
  }

  .partner-logo {
    width: calc(25% - 30px);
  }
}
</style>