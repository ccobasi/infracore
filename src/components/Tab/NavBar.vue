<script>
// import authService from '../services/authService';
// export default {

// import authService from '../services/authService';

export default {
  name: 'NavBar',
  data() {
    return {
      account: undefined,
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



// import { onMounted, ref } from 'vue';
// import axios from 'axios'; 

// const notifications = ref([]);

// async function fetchNotifications() {
//   try {
//     const response = await axios.get('/api/notifications'); 
//     notifications.value = response.data;
//   } catch (error) {
//     console.error('Error fetching notifications:', error);
//     // Handle errors appropriately (e.g., display an error message to the user)
//   }
// }

// onMounted(()=>{
//   fetchNotifications(); 
// })

</script>


<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Aladin:wght@400&display=swap" />
  <div class="pageheader d-flex justify-content-between align-items-center">
    <div class="logo">
      <img src="../../assets/logo.png" alt="brand_logo">
    </div>
    <v-tabs v-model="tab" style="border-bottom:none; margin-left: 24%;">
      <v-tab value="two" style="color:#227CBF;font-family: Roboto;font-size: 16px;font-style: normal;font-weight: 400;line-height: 19.2px;">Transactions</v-tab>
      <v-tab value="one" style="color:#808080;font-family: Roboto;font-size: 16px;font-style: normal;font-weight: 400;line-height: 19.2px;">Company Profile</v-tab>

    </v-tabs>

    <v-spacer></v-spacer>
    <div class="subheader d-flex align-center gap-4">

      <div class="avatar">
        <img src="../../assets/ellipse.png" alt="" class="profile-image">
        <span> Tunde Bakare </span>
      </div>
      <div class="logout">
        <img src="../../assets/frame67.svg" alt="">
        <span @click="SignOut"> Logout </span>
      </div>
    </div>
  </div>
  <!-- <div class="notifications">
    <h2>Notifications</h2>
    <ul v-if="notifications.length > 0">
      <li v-for="notification in notifications" :key="notification.RecordId">
        <div class="notification-details">
          <span class="notification-type">{{ notification.NotificationType }}</span>
          <p>{{ notification.Description }}</p>
        </div>
        </li>
    </ul>
    <p v-else>No notifications yet.</p>
  </div> -->
</template>

<style scoped>
.pageheader {
  width: 99vw;
  background: #fff;
  padding: 10px 30px;
}

.pageheader .brand {
  height: 45.62px;
  width: 500px;
}

.subheader {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
}

.avatar,
.logout {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.avatar .profile-image {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.logo {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 24px;

  background: linear-gradient(90deg, #227cbf 0%, #47b65c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.brand {
  color: var(--Primary, #227cbf);
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
}
@media screen and (max-width: 768px) {
  .pageheader {
    overflow-x: hidden;
  }
  .navbar-nav {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .navbar-nav .nav-item {
    margin-top: 10px;
    margin-right: 0;
  }

  .logo img {
    width: 50%;
    height: 20%;
  }
  .brand {
    font-size: 18px;
  }
}
</style>

