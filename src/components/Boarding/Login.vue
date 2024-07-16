<script>
// import authService from './authService';

// const roleRedirectMap = {
//   '1': '/', // Admin
//   '8': '/', // User
//   '9': '/km/', // Knowledge Management
//   '2': '/m/', // Manager
//   '4': '/it/', // Information Technology
//   '3': '/hod/' // Head of Department
// };


export default {
  name: 'SignUp',
  data() {
    return {
      account: undefined,
      userRole: undefined,
    };
  },
  async mounted() {
    try {
      await authService.initialize();
      const msalInstance = authService.getMsalInstance();
      const accounts = msalInstance.getAllAccounts();
      if (accounts.length) {
        this.account = accounts[0];
        this.$emit('login', this.account);
        this.$router.replace(this.$route.query.redirect || '/');
      }
      
    } catch (error) {
      console.error("Error during MSAL initialization:", error);
    }
  },
  methods: {
    async SignIn() {
      try {
        await authService.initialize();
        const account = await authService.signIn();
        this.account = account;
        this.$emit('login', this.account);
        this.$router.replace(this.$route.query.redirect || '/');
      } catch (error) {
        console.error("Error during sign in:", error);
      }
    },
    async SignOut() {
      try {
        await authService.initialize();
        await authService.signOut();
        this.account = undefined;
        this.$emit('logout');
        this.$router.replace('/login');
      } catch (error) {
        console.error("Error during sign out:", error);
      }
    },
  },
};
</script>
<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Aladin">

  <div class="body">
    <div class="left">
      <div class="align">
        <img src="../../assets/signup.jpeg" alt="">

      </div>
    </div>

    <div class="left">
      <div class="wrap">
        <div class="top">
          <div class="text">
            <h3 class="gradient-text">InfraCore</h3>
            <img src="../../assets/Group2.png" alt="">
          </div>
        </div>
        <div class="centered">
          <div class="title">
            <h2>Welcome to InfraCredit.</h2>
            <p>Kindly enter your email address to login</p>
          </div>

          <form action="">

            <div class="second">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Contact Email</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Type here">
              </div>
            </div>

            <div class="loginElements">
              <button class="loginBtn">
                Send login link
              </button>
            </div>

          </form>
          <div class="account">
            <label for="">Don’t have an account</label><button>Signup</button>
          </div>
          <div class="support">
            <label>For technical support call:</label><span> 08022658974</span> <label>or email:</label> <span>@infracredit.ng</span> <label>or WhatsApp us:</label> <span>Here</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  display: flex;
}
.gradient-text {
  background: linear-gradient(90deg, #227cbf 0%, #47b65c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

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
.align img {
  border-radius: 30px;
}
.wrap {
  padding: 15px 20px;
}
.top {
  width: 597px;
  height: 37.5px;
}
.text {
  display: flex;
  justify-content: space-between;
}
.text h3 {
  font-family: Roboto;
  font-size: 30px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
}
.title {
  width: 600px;
  height: 44px;
  gap: 8px;
  opacity: 0px;
  margin-top: 50%;
  margin-bottom: 10%;
}
.title h2 {
  font-family: Roboto;
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;
  text-align: left;
}
.title p {
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  text-align: left;
  color: #808080;
}
.first {
  gap: 10px;
}
.first input {
  width: 295px;
  height: 55px;
  padding: 20px 16px 20px 16px;
  gap: 12px;
  border-radius: 10px 0px 0px 0px solid #eeeeee;
  border: 1.5px 0px 0px 0px;
  opacity: 0px;
}
select {
  width: 295px;
  height: 55px;

  gap: 12px;
  border-radius: 10px 0px 0px 0px solid #eeeeee;
  border: 1.5px 0px 0px 0px;
  opacity: 0px;
}
.first label,
.second label,
.third label {
  float: left;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  text-align: left;
}
.second input {
  width: 600px;
  height: 55px;
  padding: 20px 16px 20px 16px;
  gap: 12px;
  border-radius: 10px 0px 0px 0px;
  border: 1.5px 0px 0px 0px;
  opacity: 0px;
  border: 1.5px solid #eeeeee;
}
.third .mb-3 {
  display: flex;
  flex-direction: column;
}
.note {
  width: 600px;
  height: 24px;
  gap: 10px;
  opacity: 0px;
}
.by {
  font-family: Satoshi;
  font-size: 14px;
  font-weight: 300;
  line-height: 18.9px;
  text-align: left;
  color: #808080;
}
.terms {
  font-family: Satoshi;
  font-size: 14px;
  font-weight: 500;
  line-height: 18.9px;
  text-align: left;
  color: #645d5d;
}
.loginElements {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  align-self: stretch;
  margin-top: 10%;
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
  width: 600px;
  height: 50px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 30px;
  background: var(--Gradient, linear-gradient(90deg, #227cbf 0%, #47b65c 100%));
  margin-left: 0px;
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
.account {
  display: flex;
  width: 250px;
  height: 28px;
  margin-left: 0px;
  margin-top: 30px;
}
.account label {
  float: left;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.2px;
  text-align: left;
  padding: 10px 0px;
}
.account button {
  width: 56px;
  height: 28px;
  padding: 4px 8px 4px 8px;
  gap: 8px;
  border-radius: 7px 0px 0px 0px;
  opacity: 0px;
  color: #227cbf;
}
.support {
  width: 496px;
  height: 15px;
  gap: 0px;
  opacity: 0px;
  margin-top: 30%;
}
.support label {
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  text-align: left;
}
.support span {
  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
  line-height: 14.4px;
  text-align: left;
  color: #47b65c;
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
