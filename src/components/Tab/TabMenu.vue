<script setup>
import { computed } from 'vue';
import { useAnswersStore } from '../../stores/score';

const store = useAnswersStore();

const props = defineProps({
  currentStep: Number
});

const corporateComplianceScore = computed(() => store.sectionScore('corporateCompliance'));
const legalScore = computed(() => store.sectionScore('legal'));
const technicalScore = computed(() => store.sectionScore('technical'));
const environmentalSocialScore = computed(() => store.sectionScore('environmentalSocial'));
const financialInformationScore = computed(() => store.sectionScore('financialInformation'));


const guidelineItems = computed(() => [
  { title: 'Guideline', score: 'Score' },
  { title: 'Corporate & Compliance', score: `${corporateComplianceScore.value.toFixed(2)}%` },
  { title: 'Legal', score: `${legalScore.value.toFixed(2)}%` },
  { title: 'Technical', score: `${technicalScore.value.toFixed(2)}%` },
  { title: 'Environmental & Social', score: `${environmentalSocialScore.value.toFixed(2)}%` },
  { title: 'Financial Information', score: `${financialInformationScore.value.toFixed(2)}%` }
]);

const getClass = (index) => {
  if (index <= props.currentStep) {
    return 'guideline-item complete';
  }else {
    return 'guideline-item';
  }
};

const percentage = computed(() => `${store.percentage}%`);
// const percentage = computed(() => `${store.percentage.value.toFixed(2)}%`);
const totalScore = computed(() => store.totalScore.toFixed(1));
const progressBarStyle = computed(() => {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (store.totalScore / 100) * circumference;
  return {
    strokeDasharray: `${circumference} ${circumference}`,
    strokeDashoffset: `${offset}`
  };
});
</script>
<template>
  <div class="body">
    <div class="tab d-flex">
      <h2>Project Readiness Assessment</h2>
      <div class="score">
        <label for="">Overall Readiness Assessment Score</label>
        <div class="circular-progress ">
          <svg class="circle" width="120" height="120" viewBox="0 0 120 120">
            <circle class="bg" cx="60" cy="60" r="54" stroke-width="12"></circle>
            <circle class="progress" cx="60" cy="60" r="54" stroke-width="12" :style="progressBarStyle"></circle>
          </svg>
          <div class="percentage">{{ totalScore }}%</div>
        </div>
      </div>
    </div>

    <div class="guideline-container">
      <div v-for="(item, index) in guidelineItems" :key="index" :class="getClass(index)">
        <div class="guideline-title">{{ item.title }}</div>
        <div class="guideline-score">{{ item.score }}</div>
      </div>
    </div>

  </div>

</template>
<style scoped>
.tab {
  width: 100%;
  height: 79.67px;
  gap: 0px;
  justify-content: space-between;
  opacity: 0px;
  padding: 30px 40px;
}
.tab h2 {
  font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;
  text-align: left;
}
.score {
  display: flex;
  width: 368px;
  height: 79.67px;
  font-size: 16px;
  gap: 5px;
  opacity: 0px;
  margin-right: 20px;
}
.score label {
  font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 15px;
  font-weight: 600;
  line-height: 14.4px;
  text-align: center;
  padding-top: 11%;
}

.circular-progress {
  position: relative;
  width: 105px;
  height: 105px;
}

.circle {
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

.bg {
  fill: none;
  stroke: #e6e6e6;
}

.progress {
  fill: none;
  stroke: #4caf50;
  transition: stroke-dashoffset 0.35s;
  transform: rotate(0.25turn);
  transform-origin: 50% 50%;
}

.percentage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5em;
  font-weight: bold;
}
svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.guideline-container {
  display: flex;
  width: 100%;
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

.guideline-item.current .guideline-score[data-v-5c5ee6fa],
.guideline-item.complete .guideline-score {
  background: #fff;
  width: 51px;
  color: #227cbf;
  border-radius: 10px;
  padding: 2px 5px;
}

.guideline-item.complete {
  background: linear-gradient(90deg, #227cbf 0%, #47b65c 100%);
  color: white;
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
  font-size: 16px;
  font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-weight: 650;
  line-height: 19.2px;
  text-align: left;
}

.guideline-score {
  font-size: 12px;
}
@media screen and (max-width: 768px) {
  .tab {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  .circular-progress {
    width: 100px;
    height: 100px;
  }
  .guideline-container {
    flex-direction: column;
    margin-bottom: 55%;
    margin-top: 12%;
    align-items: center;
  }
  .guideline-item {
    margin: 5px 0;
    width: 75%;
  }
}
</style>
<!-- @media (max-width: 768px) {
  .tab {
    width: 100%;
    padding: 20px;
    flex-direction: column;
    align-items: center;
  }
  .tab h2 {
    font-size: 24px;
    text-align: center;
  }
  .score {
    width: 100%;
    margin: 20px 0;
    justify-content: center;
  }
  .circular-progress {
    width: 60px;
    height: 60px;
  }
  .guideline-container {
    width: 80%;
    flex-direction: column;
    align-items: center;
  }
  .guideline-item {
    width: 90%;
    margin: 10px 0;
    padding: 10px;
    clip-path: none;
    border-radius: 10px;
  }
  .guideline-item:first-child,
  .guideline-item:last-child {
    clip-path: none;
    border-radius: 10px;
  }
} -->