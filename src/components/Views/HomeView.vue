<script setup>
import NavBar from '../Tab/NavBar.vue'
import TabMenu from '../Tab/TabMenu.vue'
</script>
<template>
  <main>
    <NavBar />
    <TabMenu />
    <div class="origination">
      <div class="title"><b>Welcome to InfraCredit Origination Platform</b></div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <div class="title"><b>Transaction Customer Journey Map</b></div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <div class="diagram">
        <img src="../../assets/diagram.jpg" alt="">
      </div>

      <div class="save"><button>Save and Continue</button></div>

      <div class="question">
        <div class="support">
          <label for="">For technical support call:</label> <span class="num">08022658974</span> <label for="">or email:</label> <span class="num">tech@infracredit.ng</span> <span class="whatsapp">or WhatsApp us:</span> <span class="num">Here</span>
        </div>
        <div class="frequent">
          <button>Frequently Asked Questions</button>
        </div>
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
.origination {
  width: 1250px;
  height: 1000px;
  margin: 0 42px;
  padding: 30px 30px;
  gap: 30px;
  border-radius: 10px 0px 0px 0px;
  opacity: 0px;
  background: #fff;
}
.title {
  width: 473px;
  height: 29px;
  gap: 0px;
  opacity: 0px;
}
.title h3 {
  font-family: Roboto;
  font-size: 24px;
  font-weight: 600;
  line-height: 28.8px;
  text-align: left;
  color: #000000;
}
.origination p {
  margin-top: 10px;
}
.diagram img {
  width: 1210px;
  padding-top: 20px;
}
.save {
  width: 1380px;
  height: 50px;
  gap: 10px;
  opacity: 0px;
  margin-top: 40px;
  justify-content: end;
}
.save button {
  width: 173px;
  height: 50px;
  padding: 10px 20px 10px 20px;
  gap: 10px;
  border-radius: 30px;
  opacity: 0px;
  background: linear-gradient(90deg, #227cbf 0%, #47b65c 100%);
  color: #fff;
  float: right;
  margin-right: 200px;
}
.question {
  display: flex;
  width: 1200px;
  height: 44px;
  gap: 0px;
  justify-content: space-between;
  opacity: 0px;
  margin-top: 30px;
}
.support {
  width: 516px;
  height: 25px;
  gap: 0px;
  opacity: 0px;
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
  background: #eeeeee;
}
.frequent button {
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  text-align: left;
}
</style>