<script setup>
import { useAnswersStore } from '../../stores/score';
import { computed } from 'vue';

const store = useAnswersStore();

const questions = [
  "Summary of key contracts for completed and on-going projects including power purchase/​power-as-a-service agreements, operation and maintenance agreements and other relevant agreements.",
  "Exclusivity Agreement.",
  "Tripartite Agreement (if applicable).",
  "Power Purchase Agreement.",
  "Mini Grid Contracts.",
  "Grant Agreements* To include the evidence of extension of the timeline for the fulfilment of conditions precedent to the effectiveness of the executed Grant Agreements for all Project sites.",
"Land Agreements.",
"Details of any technical service agreement, management service agreement, and any other service level agreement.",
"Evidence of title/​interest in real asset property for the Project.",
"Summary of intellectual property rights including patents, rights to inventions, utility models, copyright, trademarks, service marks, trade names, etc.",
"NERC Mini Grid Permit/Evidence of Registration with NERC;",
"NEMSA Certification [on all electrical equipment for the Project];",
"Standard Organization of Nigeria Conformity Assessment Programme (PRODUCT CERTIFICATE, SONCAP) Import Permit/Certificate;",
"Environment Impact Assessment Certificate.",
"COREN Registration.",
"Right of Way (RoW).",
"Acquisition of relevant building/development permit.",
"Evidence of current standing with federal and state tax authorities (e.g. PAYE, income tax, education tax, VAT, WHT, etc.), including registration, tax clearance certificates, monthly and annual returns filings, history of tax audits, tax assessments, waivers, pioneer tax status, disputes, etc.",
"Evidence of registration/​compliance/​remittance of other statutory obligations, including the; Industrial Training Fund (ITF), Nigerian Social Insurance Trust Fund (NSITF – for Disability Coverage now called Employee’s Comp), National Housing Fund (NHF), Group Life Insurance, etc.",
"Details of and copies of documents relating to all insurance arrangements and policies for the Business and Assets, including details of the nature and amount of cover, name and address of insurer, annual premiums (including evidence of latest premiums paid), renewal date and any outstanding claims.",
"Ethics and anti-corruption policies, including a summary of any violations, charges or convictions against the Company or its personnel, Directors or shareholders. Also highlight any Politically Exposed Persons (PEPs) that are Directors, shareholders (including government shareholding) or ultimate beneficiaries.",
"Details of any insolvency proceedings or insolvency-related matters.",
"A schedule of all threatened or pending claims, arbitration, litigation, administrative or regulatory proceedings and investigations or hearings or any other governmental action in which the Company is involved including a brief summary and status report for each such matter showing the parties, issues for determination, the amount involved, an estimate of potential liability in case of an unfavourable outcome or decision and the response of the Company to the case - independent solicitor’s opinion on such claims and litigations to be provided.",
"Resolution of the Board of Directors of the Company in respect of the Transaction.",
"Key documentation related to the core project (agreements, EPC and other sub-contracts etc.).",
"A copy of either executed, draft or an agreed form of Engineering, Procurement and Construction contracts (if applicable)."

];

const score = computed(() => store.sectionScore('legal'));
// const questionPairs = computed(() => {
//   const pairs = [];
//   for (let i = 0; i < questions.length; i += 2) {
//     pairs.push(questions.slice(i, i + 2).map((text, index) => ({ text, index: i + index + 1 })));
//   }
//   return pairs;
// });

const questionPairs = computed(() => {
  const pairs = [];
  const startIndex = 17;
  for (let i = 0; i < questions.length; i += 2) {
    pairs.push(questions.slice(i, i + 2).map((text, index) => ({ text, index: startIndex + i + index })));
  }
  return pairs;
});

</script>
<template>
  <div class="origination">
    <div class="title">
      <h3>Legal</h3>
      <p class="mt-3">Copies of all certificates of registration, licenses, permits, approvals and authorisations issued to the Company in respect of their business and operations by the relevant regulatory authority including any correspondences including;</p>
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
  font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #000;
}
.title h3 {
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 700;
}
.title p {
  font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 650;
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