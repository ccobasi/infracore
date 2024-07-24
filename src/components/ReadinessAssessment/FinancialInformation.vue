<script setup>
import { useAnswersStore } from '../../stores/score';
import { computed } from 'vue';

const store = useAnswersStore();

const questions = [
  "Copies of the Company's audited accounts and directors' reports for the last five financial years, a statement of accounting policies adopted in the audited accounts and management accounts and details of any changes in accounting policies.",
  "Financial Projections of the Company for, at least, the next ten (10) financial years, including the impact of the proposed debt finance to be guaranteed.",
  "Company procedures on revenue collections.",
  "Summary of bank accounts, listing bank names, balances, account signatories, approval limits and bank statements for the past three (3) months.",
  "Receivables Aging Report, including details of any debts outstanding from customers which have been due for more than four weeks (where applicable).",
  "Copies of any available asset registers of the Business, including land, buildings, equipment, vehicles etc.",
"Details and copies of the latest valuation and basis of valuation of all the assets.",
"Details of the Company’s current debt profile by type, purpose and maturity dates and copies of any offer letters and agreements in respect of existing borrowings including performance history.",
"Details of funding sources being explored including debt, equity, grants and relevant documentation.",
"Details of all related party transactions including agreements and payments to/​from related parties.",
"Equipment financing plan including debt/​equity split, expected terms, details of any engagements with financiers.",
"Financial Model of the minigrids.",
"Detailed breakdown of proposed utilisation of the proceeds of the debt issue/​financing and detailed CAPEX strategy.",

];

const score = computed(() => store.sectionScore('financialInformation'));


const questionPairs = computed(() => {
  const pairs = [];
  const startIndex = 86;
  for (let i = 0; i < questions.length; i += 2) {
    pairs.push(questions.slice(i, i + 2).map((text, index) => ({ text, index: startIndex + i + index })));
  }
  return pairs;
});

</script>
<template>
  <div class="origination">
    <div class="title">
      <h3>Financial Information</h3>
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
  font-weight: 400;
  line-height: 19.2px;
  text-align: left;
  color: #000;
  margin-bottom: 30px;
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