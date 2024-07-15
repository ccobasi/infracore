<template>
  <div class="body">
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
    <div class="guideline-container">
      <div class="guideline-item">
        <div class="guideline-title">Guideline</div>
        <div class="guideline-score"><span>Score</span></div>
      </div>
      <div class="guideline-item">
        <div class="guideline-title">Corporate and Compliance</div>
        <div class="guideline-score">0%</div>
      </div>
      <div class="guideline-item">
        <div class="guideline-title">Legal</div>
        <div class="guideline-score">0%</div>
      </div>
      <div class="guideline-item">
        <div class="guideline-title">Technical</div>
        <div class="guideline-score">0%</div>
      </div>
      <div class="guideline-item">
        <div class="guideline-title">Environmental & Social</div>
        <div class="guideline-score">0%</div>
      </div>
      <div class="guideline-item">
        <div class="guideline-title">Financial Information</div>
        <div class="guideline-score">0%</div>
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
.guideline-container {
  display: flex;
  width: 1250px;
  height: 56px;
  gap: 10px;
  align-items: flex-start;
  padding: 0;
  list-style: none;
  position: relative;
  margin: 4% 4.5%;
}

.guideline-container::before {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  content: '';
  width: calc(100% - 20px);
  background: #e7e7e7;
}

.guideline-item {
  flex: 1;
  padding: 10px 20px 20px 40px;
  background: repeating-linear-gradient(-65deg, #fff, #fff 20px, #fcfcfc 20px, #fcfcfc 40px);
  margin: 0 0 10px -19px;
  clip-path: polygon(
    20px 50%,
    0% 0%,
    calc(100% - 20px) 0%,
    100% 50%,
    calc(100% - 20px) 100%,
    0% 100%
  );
  background: #fff;
  border: 1px solid #c1c9d2;
  height: 56px;
}

.guideline-item.current {
  font-weight: bold;
}

.guideline-item.complete {
  background: repeating-linear-gradient(-65deg, #fcfcfc, #fcfcfc 20px, #f4faf7 20px, #f4faf7 40px);
}

.guideline-item:first-child {
  padding: 10px 20px;
  clip-path: polygon(0% 0%, calc(100% - 20px) 0%, 100% 50%, calc(100% - 20px) 100%, 0% 100%);
  background: linear-gradient(90deg, #227cbf 0%, #47b65c 100%);
  color: white;
}
.guideline-item:first-child .guideline-score {
  background: #fff;
  width: 51px;
  color: #227cbf;
  border-radius: 10px;
  padding: 2px 5px;
}

.guideline-item:last-child {
  clip-path: polygon(20px 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%);
}

.guideline-title {
  font-weight: bold;
  font-size: 12px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.2px;
  text-align: left;
}

.guideline-score {
  font-size: 10px;
}
</style>