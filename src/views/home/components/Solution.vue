<template>
  <div class="solution">
    <div class="text-center">
      <h2>适合您需求的软件解决方案</h2>
      <p>提高生产力的特性</p>
    </div>
    <div class="solutions-grid">
      <div class="solution-card">
        <img src="@/assets/images/home/task-management.png"/>
        <h3>任务管理</h3>
        <p>通过直观的看板和强大的过滤功能，轻松跟踪项目进度。创建任务、分配责任人、设置截止日期，让团队协作更加高效。</p>
      </div>
      <div class="solution-card">
        <img src="@/assets/images/home/automation.png"/>
        <h3>自动化</h3>
        <p>自动化重复性任务，节省时间和精力。设置工作流，让系统自动执行数据输入、报告生成等繁琐工作，让团队专注于创造价值。</p>
      </div>
      <div class="solution-card">
        <img src="@/assets/images/home/budgeting.png"/>
        <h3>预算工具</h3>
        <p>全面掌控财务状况，实时跟踪预算使用情况。通过可视化图表和智能分析，帮助您做出更明智的财务决策，优化资源分配。</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.solution {
  padding: 100px 160px;
}

.solution-text {
  text-align: center;
}

.solutions-grid {
  margin-top: 60px;
  display: flex;
  gap: 32px;
}

.solution-card {
  flex: 1;
  text-align: center;
}

.solution-card p {
  color: #3D3A41;
}

.solution-card img {
  width: 320px;
  height: 300px;
}

@media (max-width: 768px) {
  .solution {
    padding: 40px;
  }

  .solutions-grid {
    display: block;
  }

  .solution h3 {
    margin: 0;
  }

  .solution-card:nth-child(n+2) {
    margin-top: 60px;
  }

  .solution-card img {
    width: 100%;
    height: auto;
  }
}
</style>