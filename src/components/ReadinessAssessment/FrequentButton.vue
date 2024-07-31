<script setup>
import frameSrc from '../../assets/frame.svg';
</script>
<template>
  <div class="sidebar-menu-item">
    <img class="frame" :src="frameSrc" alt="frame" />
    <div class="text">Frequently Asked Questions</div>
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
  --h4-font-family: 'Roboto', Helvetica;
  --h4-font-weight: 400;
  --h4-font-size: 20px;
  --h4-letter-spacing: 0px;
  --h4-line-height: 24px;
  --h4-font-style: normal;
  --h3-font-family: 'Roboto', Helvetica;
  --h3-font-weight: 400;
  --h3-font-size: 24px;
  --h3-letter-spacing: 0px;
  --h3-line-height: 28.799999237060547px;
  --h3-font-style: normal;
  --h2-font-family: 'Roboto', Helvetica;
  --h2-font-weight: 400;
  --h2-font-size: 36px;
  --h2-letter-spacing: 0px;
  --h2-line-height: 43.20000076293945px;
  --h2-font-style: normal;
  --caption-font-family: 'Roboto', Helvetica;
  --caption-font-weight: 400;
  --caption-font-size: 12px;
  --caption-letter-spacing: 0px;
  --caption-line-height: 14.399999618530273px;
  --caption-font-style: normal;
  --body-text-font-family: 'Roboto', Helvetica;
  --body-text-font-weight: 400;
  --body-text-font-size: 16px;
  --body-text-letter-spacing: 0px;
  --body-text-line-height: 19.200000762939453px;
  --body-text-font-style: normal;
  --text-sm-semibold-font-family: 'Inter', Helvetica;
  --text-sm-semibold-font-weight: 600;
  --text-sm-semibold-font-size: 14px;
  --text-sm-semibold-letter-spacing: -0.05000000074505806px;
  --text-sm-semibold-line-height: 20px;
  --text-sm-semibold-font-style: normal;
  --6: 0px 1px 0px 0px rgba(18, 32, 59, 0.09);
}
.sidebar-menu-item {
  display: flex;
  width: 259px;
  height: 44px;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  position: relative;
  background-color: var(--grey-light);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid;
  border-color: #227cbf;
}

.sidebar-menu-item .frame {
  position: relative;
  width: 18px;
  height: 18px;
}

.sidebar-menu-item .text {
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-family: 'Roboto-Regular', Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 19.2px;
  white-space: nowrap;
}
</style>