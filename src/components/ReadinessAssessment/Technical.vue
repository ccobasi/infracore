<script setup>
import { useAnswersStore } from '../../stores/score';
import { computed } from 'vue';

const store = useAnswersStore();

const questions = [
  "A copy of either executed, draft or an agreed form of Original Equipment Manufacturer contracts for all components including Solar PV, Battery Energy Storage System, etc.",
  "Schedule of equipment suppliers and contractors, location, equipment supplied/​services to be provided.",
  "Original Equipment Manufacturer Track Record and Certifications.",
  "Description of the mini grid system to be used and mode of operation with SLD.",
  "Details of the components and mini grid system sizing relative to the expected demand and reasonableness.",
  "Load Demand Analysis.",
"Energy Yield Assessment Report.",
"Minigrids Component Capacity Vs Utilization.",
"Equipment Data specification sheets from the Original Equipment Manufacturer (OEM).",
"Distribution Network Topology and Designs Review.",
"The scalability of the solution.",
"Project implementation plan.",
"Distribution Network Topology and Designs documents.",
"Detailed plan on connecting productive use of equipment operators.",
"Procurement Model.",
"Equipment sourcing approach (Local or International).",
"Future projects with regards to expansion plans and integration plans including project summaries.",


];

const score = computed(() => store.sectionScore('technical'));


const questionPairs = computed(() => {
  const pairs = [];
  const startIndex = 44;
  for (let i = 0; i < questions.length; i += 2) {
    pairs.push(questions.slice(i, i + 2).map((text, index) => ({ text, index: startIndex + i + index })));
  }
  return pairs;
});

</script>
<template>
  <div class="origination">
    <div class="title">
      <h3>Technical</h3>
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
  font-family: inherit, sans-serif;
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
  color: #808080;
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
  max-width: 50%;
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