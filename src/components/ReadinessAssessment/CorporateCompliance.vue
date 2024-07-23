<script setup>
// import { reactive, computed } from 'vue';


// const answers = reactive({
//   question1: null,
//   question2: null,
//   question3: null,
//   question4: null,
//   question5: null,
//   question6: null,
//   question7: null,
//   question8: null,
//   question9: null,
//   question10: null,
//   question11: null,
//   question12: null,
//   question13: null,
//   question14: null,
//   question15: null,
//   question16: null,
// });

// const totalYes = computed(() => {
//   return Object.values(answers).reduce((sum, val) => sum + (val === '1' ? 1 : 0), 0);
// });

// const totalQuestions = computed(() => {
//   return Object.keys(answers).length;
// });

// const percentage = computed(() => {
//   return totalQuestions.value > 0 ? (totalYes.value / totalQuestions.value) * 100 : 0;
// });

// const evaluateAnswers = () => {
//   // This function can include additional logic if needed
//   console.log(`Total Yes: ${totalYes.value}, Percentage: ${percentage.value}%`);
// };
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
          <button @click="store.evaluateAnswers">Evaluate</button>
          <p>Total Yes: {{ store.totalYes }}, Percentage: {{ store.percentage }}%</p>
        </div>
      </div>
    </div>

    <!-- <div class="content">
      <div class="row">
        <div class="col-6 d-flex">
          <label class="mr-3">1. </label>
          <div class="align">
            <h4>Summary of the history of the Business from incorporation to date.</h4>
            <div class="radio">
              <input type="radio" id="Yes1" name="question1" value="1" v-model="answers.question1">
              <label for="Yes1">Yes</label>
              <input type="radio" id="No1" name="question1" value="0" v-model="answers.question1">
              <label for="No1">No</label>
            </div>

          </div>
        </div>
        <div class="col-6 d-flex">
          <label class="mr-3">2. </label>
          <div class="align">
            <h4>Copy of Certificate of Incorporation, Memorandum and Articles of Association, most recent CAC7 (Directors) and CAC2 (Shareholding).</h4>
            <div class="radio">
              <input type="radio" id="Yes2" name="question2" value="1" v-model="answers.question2">
              <label for="Yes2">Yes</label>
              <input type="radio" id="No2" name="question2" value="0" v-model="answers.question2">
              <label for="No2">No</label>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6 d-flex">
          <label class="mr-3">3. </label>
          <div class="align">
            <h4>Copy of Incorporation Documents of any SPV in relation to the project (if applicable).</h4>
            <div class="radio">
              <input type="radio" id="Yes3" name="question3" value="1" v-model="answers.question3">
              <label for="Yes3">Yes</label>
              <input type="radio" id="No3" name="question3" value="0" v-model="answers.question3">
              <label for="No3">No</label>
            </div>
          </div>
        </div>
        <div class="col-6 d-flex">
          <label class="mr-3">4. </label>
          <div class="align">
            <h4>Profiles of all shareholders holding at least 5.0% interest in the Company.</h4>
            <div class="radio">
              <input type="radio" id="Yes4" name="question4" value="1" v-model="answers.question4">
              <label for="Yes4">Yes</label>
              <input type="radio" id="No4" name="question4" value="0" v-model="answers.question4">
              <label for="No4">No</label>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6 d-flex">
          <label class="mr-3">5. </label>
          <div class="align">
            <h4>Details of any subsidiary or associated companies of the Company together with details of the relationship and the Company’s shareholding in such entities.</h4>
            <div class="radio">
              <input type="radio" id="Yes5" name="question5" value="1" v-model="answers.question5">
              <label for="Yes5">Yes</label>
              <input type="radio" id="No5" name="question5" value="0" v-model="answers.question5">
              <label for="No5">No</label>
            </div>
          </div>
        </div>
        <div class="col-6 d-flex">
          <label class="mr-3">6. </label>
          <div class="align">
            <h4>Details and copies of all share subscription agreements, shareholder agreements, voting agreements and other relevant agreements governing the relationship of the Company's shareholders that is material to the Business or Assets.</h4>
            <div class="radio">
              <input type="radio" id="Yes6" name="question6" value="1" v-model="answers.question6">
              <label for="Yes6">Yes</label>
              <input type="radio" id="No6" name="question6" value="0" v-model="answers.question6">
              <label for="No6">No</label>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6 d-flex">
          <label class="mr-3">7. </label>
          <div class="align">
            <h4>Profile of Directors, Senior Management and Company Secretary (e.g. work experience, schools attended, degrees obtained, other qualifications).</h4>
            <div class="radio">
              <input type="radio" id="Yes7" name="question7" value="1" v-model="answers.question7">
              <label for="Yes7">Yes</label>
              <input type="radio" id="No7" name="question7" value="0" v-model="answers.question7">
              <label for="No7">No</label>
            </div>
          </div>
        </div>
        <div class="col-6 d-flex">
          <label class="mr-3">8. </label>
          <div class="align">
            <h4>Organisation Chart that includes: Staff Strength of the Business.</h4>
            <div class="radio">
              <input type="radio" id="Yes8" name="question8" value="1" v-model="answers.question8">
              <label for="Yes8">Yes</label>
              <input type="radio" id="No8" name="question8" value="0" v-model="answers.question8">
              <label for="No8">No</label>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6 d-flex">
          <label class="mr-3">9. </label>
          <div class="align">
            <h4>Organisation Chart that includes: Business Permit and Expatriate Quota (where the Company has foreign (non-Nigerian) shareholding).</h4>
            <div class="radio">
              <input type="radio" id="Yes9" name="question9" value="1" v-model="answers.question9">
              <label for="Yes9">Yes</label>
              <input type="radio" id="No9" name="question9" value="0" v-model="answers.question9">
              <label for="No9">No</label>
            </div>
          </div>
        </div>
        <div class="col-6 d-flex">
          <label class="mr-3">10. </label>
          <div class="align">
            <h4>Promoter And Technical Team’s Profile and competencies.</h4>
            <div class="radio">
              <input type="radio" id="Yes10" name="question10" value="1" v-model="answers.question10">
              <label for="Yes10">Yes</label>
              <input type="radio" id="No10" name="question10" value="0" v-model="answers.question10">
              <label for="No10">No</label>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6 d-flex">
          <label class="mr-3">11. </label>
          <div class="align">
            <h4>Details of all business location.</h4>
            <div class="radio">
              <input type="radio" id="Yes11" name="question11" value="1" v-model="answers.question11">
              <label for="Yes11">Yes</label>
              <input type="radio" id="No11" name="question11" value="0" v-model="answers.question11">
              <label for="No11">No</label>
            </div>
          </div>
        </div>
        <div class="col-6 d-flex">
          <label class="mr-3">12. </label>
          <div class="align">
            <h4>Summary of lines of business.</h4>
            <div class="radio">
              <input type="radio" id="Yes12" name="question12" value="1" v-model="answers.question12">
              <label for="Yes12">Yes</label>
              <input type="radio" id="No12" name="question12" value="0" v-model="answers.question12">
              <label for="No12">No</label>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6 d-flex">
          <label class="mr-3">13. </label>
          <div class="align">
            <h4>Details and status of key projects (completed, on-going, expected completion dates etc.).</h4>
            <div class="radio">
              <input type="radio" id="Yes13" name="question13" value="1" v-model="answers.question13">
              <label for="Yes13">Yes</label>
              <input type="radio" id="No13" name="question13" value="0" v-model="answers.question13">
              <label for="No13">No</label>
            </div>
          </div>
        </div>
        <div class="col-6 d-flex">
          <label class="mr-3">14. </label>
          <div class="align">
            <h4>Company policies on operations and maintenance.</h4>
            <div class="radio">
              <input type="radio" id="Yes14" name="question14" value="1" v-model="answers.question14">
              <label for="Yes14">Yes</label>
              <input type="radio" id="No14" name="question14" value="0" v-model="answers.question14">
              <label for="No14">No</label>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6 d-flex">
          <label class="mr-3">15. </label>
          <div class="align">
            <h4>Company policies on procurement and supply chain.</h4>
            <div class="radio">
              <input type="radio" id="Yes15" name="question15" value="1" v-model="answers.question15">
              <label for="Yes15">Yes</label>
              <input type="radio" id="No15" name="question15" value="0" v-model="answers.question15">
              <label for="No15">No</label>
            </div>
          </div>
        </div>
        <div class="col-6 d-flex">
          <label class="mr-3">16. </label>
          <div class="align">
            <h4>Details of internal controls, invoicing/​credit policies, operational procedures, internal audit and compliance function.</h4>
            <div class="radio">
              <input type="radio" id="Yes16" name="question16" value="1" v-model="answers.question16">
              <label for="Yes16">Yes</label>
              <input type="radio" id="No16" name="question16" value="0" v-model="answers.question16">
              <label for="No16">No</label>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <button @click="evaluateAnswers">Evaluate</button>
          <p>Total Yes: {{ totalYes }}, Percentage: {{ percentage }}%</p>

        </div>
      </div>
    </div> -->
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