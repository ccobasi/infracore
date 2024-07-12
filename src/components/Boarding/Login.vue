<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Aladin">

  <div class="split left">
    <div class="centered">

      <div class="row" style="margin: 20px;">

        <div class="col m-auto">
          <img src="../assets/InfraCredit.svg" alt="" width="150" height="50">
        </div>
      </div>

      <div class="loginElements">
        <h1>Login</h1>
        <button class="loginBtn" @click="$router.push('/')">
          Login
        </button>
      </div>

    </div>
  </div>

  <div class="split right">
    <div class="centered">
    </div>
  </div>
</template>

<style scoped>
.split {
  height: 100%;
  width: 50%;
  position: fixed;

  top: 0;
  overflow-x: hidden;
}

.split:first-child {
  padding: 30px;
}

.pageheadertext {
  width: 200px;
  cursor: context-menu;
}

.left {
  left: 0;
  z-index: 1;
  background-color: white;
}

.right {
  z-index: 3;
  right: 0;
  background-color: white;
  background-image: url('../assets/banner.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.loginElements {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  align-self: stretch;
  margin-top: 30%;
}

.loginElements h1 {
  width: 143.41px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  color: #000000;
}

.loginElements h4 {
  width: 640px;
  height: 24px;
  left: 0px;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #227cbf;
}

.loginBtn {
  display: flex;
  height: 50px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 10px;
  background: var(--Gradient, linear-gradient(90deg, #227cbf 0%, #47b65c 100%));
  margin-left: 30px;
  margin-right: 30px;

  color: #fff;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.2px;
}

.loginBtn:hover {
  background: linear-gradient(90deg, #47b65c 0%, #227cbf 100%);
  transition: 0.7s;
}
.col {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  width: 640px;
  height: 50px;
}
.col img {
  margin-left: 40%;
}

@media (max-width: 1190px) {
  .Mainheader {
    width: 100%;
    background: #ffffff;
    display: grid;
    grid-template-columns: 1.5fr 2fr;
    grid-gap: 0vw;
    margin: 0px;
  }

  .Mainheader img {
    margin: -5px 20px 0px 1vw;
  }
}
</style>

<script>
// import authenticationService from '../services/authenticationService';
// export default {
//     name: 'LoginAuth',
//     data() {
//         return {
//             account: undefined,
//         };
//     },
    // mounted() {
    //     const accounts = authenticationService.msalInstance.getAllAccounts();
    //     console.log(accounts)
    //     if (accounts.length == 0) {
    //         return;
    //     }
    //     this.account = accounts[0];
    //     this.$emitter.emit('login', this.account);
    //     this.$router.replace(this.$route.query.redirect || '/');

    // },
    // methods: {
    //     async SignIn() {
    //         return authenticationService.SignIn();
    //     },
    //     async SignOut() {
    //         return authenticationService.SignOut();
    //     },
    // },
// };
</script>