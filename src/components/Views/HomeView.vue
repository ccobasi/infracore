<script setup>
import NavBar from '../Tab/NavBar.vue'
import TabMenu from '../Tab/TabMenu.vue'
import GuideLine from '../ReadinessAssessment/GuideLine.vue'
import CorporateCompliance from '../ReadinessAssessment/CorporateCompliance.vue'
import Legal from '../ReadinessAssessment/Legal.vue'
import Technical from '../ReadinessAssessment/Technical.vue'
import EnvironmentalSocial from '../ReadinessAssessment/EnvironmentalSocial.vue'
import FinancialInformation from '../ReadinessAssessment/FinancialInformation.vue'
import FrequentButtonVue from '../ReadinessAssessment/FrequentButton.vue'
import { ref } from 'vue';
import { useAnswersStore } from '../../stores/score';

const currentStep = ref(0);
const steps = [
  GuideLine,
  CorporateCompliance,
  Legal,
  Technical,
  EnvironmentalSocial,
  FinancialInformation
];

const saveAndContinue = () => {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++;
  }
};

const goBack = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
};

const store = useAnswersStore();
</script>
<template>
  <main>

    <!-- <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Select Product Type</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Product Type</p>
            <select class="form-select" aria-label="Default select example">
              <option selected>Select</option>
              <option value="1">Housing</option>
              <option value="2">Mini Grid</option>
              <option value="3">Power</option>
              <option value="4">Transportation</option>
            </select>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn save">Save</button>
            <button type="button" class="btn cancel" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div> -->
    <NavBar />
    <!-- <TabMenu /> -->
    <TabMenu :currentStep="currentStep" :percentage="store.percentage" />
    <component :is="steps[currentStep]" />

    <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
      Launch demo modal
    </button> -->

    <div class="save mt-2">
      <button v-if="currentStep > 0" class="back-button" @click="currentStep > 0 && currentStep--">Back</button>
      <button :class="{ 'save-button-right': currentStep === 0 }" class="save-button" @click="saveAndContinue">Save and Continue</button>
    </div>

    <div class="question">
      <div class="support">
        <label for="">For Technical Support call:</label> <span class="num">08022658974</span> <label for="">or email:</label> <span class="num">tech@infracredit.ng</span> <span class="whatsapp">or WhatsApp us:</span> <span class="num">Here</span>
      </div>

      <FrequentButtonVue />
    </div>

  </main>
</template>
 <style scoped>
main {
  width: 100%;
  overflow-x: hidden;
  background: #eee;
}
.originate {
  width: 1250px;
  height: 1000px;
  margin: 0 42px;
  padding: 30px 30px;
  gap: 30px;
  border-radius: 10px 0px 0px 0px;
  opacity: 0px;
  background: #eee;
}
.save {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1250px;
  height: 50px;
  gap: 10px;
  opacity: 1;
  margin: auto;
}
.save button {
  width: 173px;
  height: 50px;
  padding: 10px 20px;
  gap: 10px;
  border-radius: 30px;
  opacity: 1;
  background: linear-gradient(90deg, #227cbf 0%, #47b65c 100%);
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 0px;
  font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 19.2px;
}

.question {
  display: flex;
  width: 1250px;
  height: 44px;
  gap: 0px;
  justify-content: space-between;
  opacity: 0px;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 45px;
}
.support {
  width: 530px;
  height: 25px;
  gap: 0px;
  opacity: 0px;
  margin-top: 10px;
}
.support label {
  font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 14.4px;
  text-align: left;
}
.num {
  font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 14.4px;
  text-align: left;
  color: #47b65c;
}
.whatsapp {
  font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  text-align: left;
}
.frequent {
  width: 259px;
  height: 44px;
  padding: 12px 16px 12px 16px;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid #227cbf;
  opacity: 0px;
}
.frequent button {
  font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  text-align: left;
}
.btn .cancel {
  width: 150px;
  height: 35px;
  padding: 10px 60px 10px 60px;
  gap: 10px;
  border-radius: 20px 0px 0px 0px;
  opacity: 0px;
  background: #eeeeee;
}
.btn .save {
  width: 150px;
  height: 35px;
  padding: 10px 60px 10px 60px;
  gap: 10px;
  border-radius: 20px 0px 0px 0px;
  opacity: 0px;
  background: linear-gradient(90deg, #227cbf 0%, #47b65c 100%);
}
.save-button-right {
  margin-left: 1078px;
}
@media (max-width: 768px) {
  .save {
    width: 100%;
  }
  .save button {
    margin-left: 5%;
    margin-right: 5%;
  }
  .question {
    width: 100%;
    padding-right: 80px;
  }
  .support {
    width: 530px;
    height: 25px;
    gap: 0px;
    opacity: 0px;
    margin-top: 10px;
  }
  .support label {
    font-size: 11px;
  }
  .num {
    font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 14.4px;
    text-align: left;
    color: #47b65c;
  }
  .whatsapp {
    font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 14.4px;
    text-align: left;
  }
  .save-button-right[data-v-d2c49f44] {
    margin-left: 73%;
  }
}
</style>