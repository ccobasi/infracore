<script setup>

import { computed } from 'vue';
import { useAnswersStore } from '../../stores/score';

const store = useAnswersStore();

const questions = [
  "Summary of the history of the Business from incorporation to date.",
  "Copy of Certificate of Incorporation, Memorandum and Articles of Association, most recent CAC7 (Directors) and CAC2 (Shareholding).",
  "Copy of Incorporation Documents of any SPV in relation to the project (if applicable).",
  "Profiles of all shareholders holding at least 5.0% interest in the Company.",
  "Details of any subsidiary or associated companies of the Company together with details of the relationship and the Company’s shareholding in such entities.",
  "Details and copies of all share subscription agreements, shareholder agreements, voting agreements and other relevant agreements governing the relationship of the Company's shareholders that is material to the Business or Assets.",
  "Profile of Directors, Senior Management and Company Secretary (e.g. work experience, schools attended, degrees obtained, other qualifications).",
  "Organisation Chart that includes: Staff Strength of the Business.",
  "Organisation Chart that includes: Business Permit and Expatriate Quota (where the Company has foreign (non-Nigerian) shareholding).",
  "Promoter And Technical Team’s Profile and competencies.",
  "Details of all business location.",
  "Summary of lines of business.",
  "Details and status of key projects (completed, on-going, expected completion dates etc.).",
  "Company policies on operations and maintenance.",
  "Company policies on procurement and supply chain.",
  "Details of internal controls, invoicing/credit policies, operational procedures, internal audit and compliance function."
];

// Create pairs of questions
const questionPairs = computed(() => {
  const pairs = [];
  for (let i = 0; i < questions.length; i += 2) {
    pairs.push(questions.slice(i, i + 2).map((text, index) => ({ text, index: i + index + 1 })));
  }
  return pairs;
});
</script>
<template>
  <div class="origination">
    <div class="title">
      <h3>Corporate and Compliance</h3>
    </div>

    <div class="content">
      <div class="row" v-for="(questionPair, rowIndex) in questionPairs" :key="rowIndex">
        <div class="col-6 d-flex" v-for="(question, questionIndex) in questionPair" :key="questionIndex">
          <label class="mr-3">{{ rowIndex * 2 + questionIndex + 1 }}. </label>
          <div class="align">
            <h4>{{ question.text }}</h4>
            <div class="radio">
              <input :type="'radio'" :id="'Yes' + (rowIndex * 2 + questionIndex + 1)" :name="'question' + (rowIndex * 2 + questionIndex + 1)" value="1" v-model="store.answers['question' + (rowIndex * 2 + questionIndex + 1)]">
              <label :for="'Yes' + (rowIndex * 2 + questionIndex + 1)">Yes</label>
              <input :type="'radio'" :id="'No' + (rowIndex * 2 + questionIndex + 1)" :name="'question' + (rowIndex * 2 + questionIndex + 1)" value="0" v-model="store.answers['question' + (rowIndex * 2 + questionIndex + 1)]">
              <label :for="'No' + (rowIndex * 2 + questionIndex + 1)">No</label>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <!-- <button @click="store.evaluateAnswers">Evaluate</button>
          <p>Total Yes: {{ store.totalYes }}, Percentage: {{ store.percentage }}%</p> -->
        </div>
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