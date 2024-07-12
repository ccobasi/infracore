<template>
  <div class="tab d-flex">
    <h2>Project Readiness Assessment</h2>
    <div class="score">
      <label for="">Overall Readiness Assessment Score</label>
      <div class="circular-progress">
        <svg class="circle">
          <circle class="bg" cx="40" cy="39.835" r="36"></circle>
          <circle class="progress" cx="40" cy="39.835" r="36"></circle>
        </svg>
        <div class="percentage">58%</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.tab {
  width: 1380px;
  height: 79.67px;
  gap: 0px;
  justify-content: space-between;
  opacity: 0px;
  padding: 30px 20px;
}
.tab h2 {
  font-family: Roboto;
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;
  text-align: left;
}
.score {
  display: flex;
  width: 298px;
  height: 79.67px;
  gap: 5px;
  opacity: 0px;
  margin-right: 20px;
}
.score label {
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  text-align: center;
  padding-top: 11%;
}

.circular-progress {
  position: relative;
  width: 80px;
  height: 79.67px;
  margin: 1px auto;
  gap: 0px;
  opacity: 0px;
}

.circle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.bg {
  fill: none;
  stroke: #eee;
  stroke-width: 5;
}

.progress {
  fill: none;
  stroke: #4caf50;
  stroke-width: 5;
  stroke-dasharray: 226.08; /* 2 * Math.PI * radius (approx 36) */
  stroke-dashoffset: 94.15; /* (1 - progress) * stroke-dasharray for 58% */
  transition: stroke-dashoffset 0.5s ease-in-out;
}

.percentage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: bold;
  color: #4caf50;
}
</style>