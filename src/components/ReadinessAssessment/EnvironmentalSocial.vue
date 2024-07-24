<script setup>
import { useAnswersStore } from '../../stores/score';
import { computed } from 'vue';

const store = useAnswersStore();

const questions = [
  "Environmental and Social/HSE Policy.",
  "Environmental and Social Management System/HSE Manual.",
  "Availability of experienced and competent HSE Officer.",
  "E-waste Recycling Plan.",
  "Project Land Acquisition Framework/plan (where applicable).",
  "Occupational Health and Safety (OHS) Records (2- 3 years, where available).",
"Quality, Safety & Environmental Control measures undertaken by the Company such as:",
"Stakeholder Engagement Plan.",
"Health, Safety, Environment, and Social (HSES) Legal Register.",
"Emergency Response Plan.",
"Sustainable Procurement Plan.",
"Contractor Management Procedure.",
"Battery Recycling Policy.",
"Anti-Corruption Policy/Anti-Money Laundering Policy.",
"Human Resources Policy and Procedures.",
"External Relations and Grievance Mechanism Policy/Plan.",
"Relevant Environmental Permits/Licenses.",
"PenCom Certificate.",
"NSITF Certificate.",
"Sample Employment Contract (Junior/Senior).",
"Gender Policy.",
"Health, Safety Environment and Social (HSES) Training Plan.",
"Security Risk Assessment Procedure/Security Management Plan.",
"GHG Inventory Procedure.",
"Community Development Plan (where applicable)."


];

const score = computed(() => store.sectionScore('environmentalSocial'));


const questionPairs = computed(() => {
  const pairs = [];
  const startIndex = 61;
  for (let i = 0; i < questions.length; i += 2) {
    pairs.push(questions.slice(i, i + 2).map((text, index) => ({ text, index: startIndex + i + index })));
  }
  return pairs;
});

</script>
<template>
  <div class="origination">
    <div class="title">
      <h3>Environmental & Social</h3>
      <p>Quality, Safety & Environmental Control measures undertaken by the Company such as: </p>
    </div>
    <div class="content">
      <div class="row" v-for="(questionPair, rowIndex) in questionPairs" :key="rowIndex">
        <div class="col-6 d-flex" v-for="(question, questionIndex) in questionPair" :key="questionIndex">
          <label class="mr-3">{{ question.index }}. </label>
          <div class="align">
            <h4>{{ question.text }}</h4>
            <div class="radio">
              <input :type="'radio'" :id="'Yes' + question.index" :name="'question' + question.index" value="1" v-model="store.answers['question' + question.index]">
              <label :for="'Yes' + question.index">Yes</label>
              <input :type="'radio'" :id="'No' + question.index" :name="'question' + question.index" value="0" v-model="store.answers['question' + question.index]">
              <label :for="'No' + question.index">No</label>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- <div class="col-6">
          <button @click="store.evaluateAnswers">Evaluate</button>
          <p>Total Yes: {{ store.totalYes }}, Percentage: {{ store.percentage }}%</p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
.origination {
  max-width: 93%;
  max-height: 100%;
  padding: 30px;
  margin: auto;
  border-radius: 10px 0 0 0;
  background: #fff;
  overflow-y: hidden;
}
.title {
  margin-bottom: 10px;
  font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif, sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #000;
}
.title p {
  font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.2px;
  text-align: left;
  color: #000;
  margin-bottom: 30px;
  margin-top: 10px;
}
.content {
  max-width: 100%;
  gap: 30px;
  display: flex;
  flex-direction: column;
  opacity: 1;
}
.row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.col-6 {
  flex: 1;
  padding: 10px;
}
.col-6 label,
h4 {
  display: block;
  font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.2px;
  text-align: left;
}
.radio {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}
.radio input {
  margin-right: 5px;
}
.align {
  display: flex;
  flex-direction: column;
}
</style>