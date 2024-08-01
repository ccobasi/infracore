<script setup>
const steps = [
  { title: "Project Readiness Assessment", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo" },
  { title: "Onboarding Meeting", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo" },
  { title: "NDA & GRL Documents", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo" },
  { title: "Onboarding Assessment", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo" },
  { title: "NBC/Premilitary Assessment", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo" },
  { title: "Mandate Letter", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo" },
  { title: "Due Diligence", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo" },
  { title: "Credit Paper Approval", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo" },
  { title: "Letter of Credit & Bond Process", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo" },
  { title: "Funding", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo" },
  { title: "Feedback", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo" }
];
</script>

<template>
  <div class="frame">

    <div class="overlap">
      <img class="vector" src="../../assets/Vector 1.svg" alt="journey map" />
      <div class="div">
        <div class="div-2">
          <div class="div-3">
            <div class="overlap-group-wrapper">
              <div class="overlap-group">
                <div class="text-wrapper">1</div>
              </div>
            </div>
            <div class="text-wrapper-2">Project Readiness Assessment</div>
            <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo</p>
          </div>
          <div class="div-3">
            <div class="overlap-group-wrapper">
              <div class="overlap-group">
                <div class="text-wrapper">2</div>
              </div>
            </div>
            <div class="text-wrapper-3">Onboarding Meeting</div>
            <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo</p>
          </div>
          <div class="div-3">
            <div class="overlap-group-wrapper">
              <div class="overlap-group">
                <div class="text-wrapper">3</div>
              </div>
            </div>
            <div class="text-wrapper-3">NDA &amp; GRL Documents</div>
            <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo</p>
          </div>
          <div class="div-3">
            <div class="overlap-group-wrapper">
              <div class="overlap-group">
                <div class="text-wrapper">4</div>
              </div>
            </div>
            <div class="text-wrapper-4">Onboarding Assessment</div>
            <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo</p>
          </div>
        </div>
        <div class="div-2">
          <div class="div-3">
            <div class="overlap-group-wrapper">
              <div class="overlap-group">
                <div class="text-wrapper">5</div>
              </div>
            </div>
            <div class="text-wrapper-5">NBC/Premilitary Assessment</div>
            <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo</p>
          </div>
          <div class="div-3">
            <div class="overlap-group-wrapper">
              <div class="overlap-group">
                <div class="text-wrapper">6</div>
              </div>
            </div>
            <div class="text-wrapper-3">Mandate Letter</div>
            <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo</p>
          </div>
          <div class="div-3">
            <div class="overlap-group-wrapper">
              <div class="overlap-group">
                <div class="text-wrapper">7</div>
              </div>
            </div>
            <div class="text-wrapper-3">Due Diligence</div>
            <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo</p>
          </div>
          <div class="div-3">
            <div class="overlap-group-wrapper">
              <div class="overlap-group">
                <div class="text-wrapper">8</div>
              </div>
            </div>
            <div class="text-wrapper-3">Credit Paper Approval</div>
            <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo</p>
          </div>
        </div>
        <div class="div-2">
          <div class="div-3">
            <div class="overlap-group-wrapper">
              <div class="overlap-group">
                <div class="text-wrapper">9</div>
              </div>
            </div>
            <p class="letter-of-credit">Letter of Credit &amp; Bond Process</p>
            <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo</p>
          </div>
          <div class="div-3">
            <div class="overlap-group-wrapper">
              <div class="overlap-group">
                <div class="text-wrapper-6">10</div>
              </div>
            </div>
            <div class="text-wrapper-3">Funding</div>
            <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo</p>
          </div>
          <div class="div-3">
            <div class="overlap-group-wrapper">
              <div class="overlap-group">
                <div class="text-wrapper-6">11</div>
              </div>
            </div>
            <div class="text-wrapper-3">Feedback</div>
            <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo</p>
          </div>
          <div class="div-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css');
* {
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
html,
body {
  margin: 0px;
  height: 100%;
}
/* a blue color as a generic focus style */
button:focus-visible {
  outline: 2px solid #4a90e2 !important;
  outline: -webkit-focus-ring-color auto 5px !important;
}
a {
  text-decoration: none;
}
:root {
  --primary: rgba(34, 124, 191, 1);
  --secondary: rgba(71, 182, 92, 1);
  --grey-dark: rgba(128, 128, 128, 1);
  --black: rgba(0, 0, 0, 1);
  --white: rgba(255, 255, 255, 1);
  --grey-light: rgba(238, 238, 238, 1);
  --background: rgba(249, 249, 249, 1);
  --grey: rgba(208, 213, 221, 1);
  --blue-blue-100: rgba(229, 245, 255, 1);
  --blue-blue-300: rgba(126, 196, 246, 1);
  --core-white: rgba(255, 255, 255, 1);
  --gray-gray-300: rgba(210, 214, 220, 1);
  --x-gray-200: rgba(193, 201, 210, 1);
  --success500-base: rgba(1, 166, 62, 1);
  --basewhite: rgba(255, 255, 255, 1);
  --primary500-base: rgba(16, 93, 251, 1);
  --gray-900: rgba(24, 24, 27, 1);
  --gray-500: rgba(113, 113, 122, 1);
  --h4-font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --h4-font-weight: 400;
  --h4-font-size: 20px;
  --h4-letter-spacing: 0px;
  --h4-line-height: 24px;
  --h4-font-style: normal;
  --h3-font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --h3-font-weight: 400;
  --h3-font-size: 24px;
  --h3-letter-spacing: 0px;
  --h3-line-height: 28.799999237060547px;
  --h3-font-style: normal;
  --h2-font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --h2-font-weight: 400;
  --h2-font-size: 36px;
  --h2-letter-spacing: 0px;
  --h2-line-height: 43.20000076293945px;
  --h2-font-style: normal;
  --caption-font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --caption-font-weight: 400;
  --caption-font-size: 12px;
  --caption-letter-spacing: 0px;
  --caption-line-height: 14.399999618530273px;
  --caption-font-style: normal;
  --body-text-font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --body-text-font-weight: 400;
  --body-text-font-size: 16px;
  --body-text-letter-spacing: 0px;
  --body-text-line-height: 19.200000762939453px;
  --body-text-font-style: normal;
  --text-sm-semibold-font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  --text-sm-semibold-font-weight: 600;
  --text-sm-semibold-font-size: 14px;
  --text-sm-semibold-letter-spacing: -0.05000000074505806px;
  --text-sm-semibold-line-height: 20px;
  --text-sm-semibold-font-style: normal;
  --6: 0px 1px 0px 0px rgba(18, 32, 59, 0.09);
}
.frame {
  position: relative;
  width: 1200px;
  height: 660px;
  background-color: #fff;
}

.frame .overlap {
  position: relative;
  width: 1168px;
  height: 517px;
  top: 67px;
  left: 20px;
}

.frame .vector {
  position: absolute;
  width: 1168px;
  height: 464px;
  top: 0;
  left: 0;
}

.frame .div {
  display: flex;
  flex-direction: column;
  width: 950px;
  align-items: flex-start;
  gap: 48px;
  position: absolute;
  top: 9px;
  left: 125px;
}

.frame .div-2 {
  display: flex;
  align-items: center;
  gap: 90px;
  position: relative;
  align-self: stretch;
  width: 100%;
  flex: 0 0 auto;
}

.frame .div-3 {
  display: flex;
  flex-direction: column;
  width: 170px;
  align-items: center;
  gap: 5px;
  position: relative;
}

.frame .overlap-group-wrapper {
  position: relative;
  width: 50px;
  height: 50px;
}

.frame .overlap-group {
  position: relative;
  width: 51px;
  height: 51px;
  background-color: #ffffff;
  border-radius: 25.5px;
  border: 1.69px solid;
  border-color: #eeeeee;
}

.frame .text-wrapper {
  position: absolute;
  top: 17px;
  left: 17px;
  font-family: var(--h4-font-family);
  font-weight: var(--h4-font-weight);
  color: #000000;
  font-size: var(--h4-font-size);
  text-align: center;
  letter-spacing: var(--h4-letter-spacing);
  line-height: var(--h4-line-height);
  white-space: nowrap;
  font-style: var(--h4-font-style);
}

.frame .text-wrapper-2 {
  position: relative;
  width: fit-content;
  margin-left: -25.5px;
  margin-right: -25.5px;
  font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  color: #000000;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0;
  line-height: 19.2px;
  white-space: nowrap;
}

.frame .p {
  position: relative;
  align-self: stretch;
  font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: var(--caption-font-weight);
  color: #000000;
  font-size: var(--caption-font-size);
  text-align: center;
  letter-spacing: var(--caption-letter-spacing);
  line-height: var(--caption-line-height);
  font-style: var(--caption-font-style);
}

.frame .text-wrapper-3 {
  position: relative;
  width: fit-content;
  font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  color: #000000;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0;
  line-height: 19.2px;
  white-space: nowrap;
}

.frame .text-wrapper-4 {
  margin-left: -3px;
  margin-right: -3px;
  position: relative;
  width: fit-content;
  font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  color: #000000;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0;
  line-height: 19.2px;
  white-space: nowrap;
}

.frame .text-wrapper-5 {
  position: relative;
  width: fit-content;
  margin-left: -19px;
  margin-right: -19px;
  font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  color: #000000;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0;
  line-height: 19.2px;
  white-space: nowrap;
}

.frame .letter-of-credit {
  position: relative;
  width: fit-content;
  margin-left: -27px;
  margin-right: -27px;
  font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  color: #000000;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0;
  line-height: 19.2px;
  white-space: nowrap;
}

.frame .text-wrapper-6 {
  position: absolute;
  top: 17px;
  left: 13px;
  font-family: var(--h4-font-family);
  font-weight: var(--h4-font-weight);
  color: #000000;
  font-size: var(--h4-font-size);
  text-align: center;
  letter-spacing: var(--h4-letter-spacing);
  line-height: var(--h4-line-height);
  white-space: nowrap;
  font-style: var(--h4-font-style);
}
@media screen and (max-width: 768px) {
  .frame {
    width: 100%;
  }

  .frame .overlap {
    width: 100%;
    left: 0;
  }

  .frame .vector {
    width: 650px;
  }

  .frame .div {
    width: 100%;
    gap: 10px;
    position: absolute;
    top: 9px;
    left: 40px;
  }

  .frame .div-2 {
    gap: 10px;
    top: 100px;
  }

  .frame .div-3 {
    width: 200px;
  }

  .frame .overlap-group-wrapper {
    width: 40px;
    height: 40px;
  }

  .frame .overlap-group {
    width: 41px;
    height: 41px;
  }

  .frame .text-wrapper-2,
  .frame .text-wrapper-3,
  .frame .text-wrapper-4,
  .frame .text-wrapper-5,
  .frame .letter-of-credit,
  .frame .text-wrapper-6 {
    font-weight: 600;
    font-size: 12px;
    line-height: 14.2px;
    white-space: wrap;
  }

  .frame .p {
    font-size: 10px;
  }
}
</style>