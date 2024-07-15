<script setup>
import NavBar from '../Tab/NavBar.vue'
import TabMenu from '../Tab/TabMenu.vue'
import GuideLine from '../ReadinessAssessment/GuideLine.vue'
import CorporateCompliance from '../ReadinessAssessment/CorporateCompliance.vue'
import Legal from '../ReadinessAssessment/Legal.vue'
import Technical from '../ReadinessAssessment/Technical.vue'
import EnvironmentalSocial from '../ReadinessAssessment/EnvironmentalSocial.vue'
</script>
<template>
  <main>
    <NavBar />
    <TabMenu />
    <!-- <GuideLine /> -->
    <!-- <CorporateCompliance /> -->
    <!-- <Legal /> -->
    <!-- <Technical /> -->
    <EnvironmentalSocial />

    <div class="save">
      <button class="back-button">Back</button>
      <button class="save-button">Save and Continue</button>
    </div>

    <div class="question">
      <div class="support">
        <label for="">For technical support call:</label> <span class="num">08022658974</span> <label for="">or email:</label> <span class="num">tech@infracredit.ng</span> <span class="whatsapp">or WhatsApp us:</span> <span class="num">Here</span>
      </div>
      <div class="frequent">
        <button>Frequently Asked Questions</button>
      </div>
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
  max-width: 1200px;
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
  margin-top: 20px;
}

.question {
  display: flex;
  width: 1200px;
  height: 44px;
  gap: 0px;
  justify-content: space-between;
  opacity: 0px;
  margin-top: 40px;
  margin: auto;
}
.support {
  width: 516px;
  height: 25px;
  gap: 0px;
  opacity: 0px;
  margin-top: 10px;
}
.support label {
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  text-align: left;
}
.num {
  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
  line-height: 14.4px;
  text-align: left;
  color: #47b65c;
}
.whatsapp {
  font-family: Roboto;
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
  border: 1px 0px 0px 0px;
  opacity: 0px;
}
.frequent button {
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  text-align: left;
}
</style>