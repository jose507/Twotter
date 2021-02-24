<template>
    <a-row type="flex" justify="center">
      <div class= "" style="background:#ECECEC; padding:30px">
        <a-card title="User Profile" :bordered="false" style="width: 360px;">
            <h4>{{user.userName}}</h4>
            <h4>{{fullName}}</h4>
            <h4>{{user.email}}</h4>
            <h5><b-badge href="#" variant="success" v-if="user.isAdmin">Admin</b-badge></h5>
            <h4><strong>Followers: </strong>{{followers}}</h4>
            <a-button type="primary" class="my-2" @click="followUser">Followers</a-button>
         </a-card>
      </div>
        <b-list-group>
            <b-list-group-item v-for="twoot in user.twoots" :key="twoot.id">{{twoot.content}}</b-list-group-item>
        </b-list-group>
    </a-row>

</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      followers: 0,
      user: {
        id: 0,
        userName: 'Sexyman12',
        firstName: 'Jose',
        lastName: 'Regalado',
        email: "jregalado@panadata.net",
        isAdmin: true,
        twoots: [
            {id: 1, content: "Twotter is amazing!"},
            {id: 2, content: "I'm learning new things everyday"},
            {id: 3, content: "Vue is so fun"},
            {id: 4, content: "IDK how to use the Vue GRID system tho"}
        ]
      }
    }
  },
  watch: {
    followers(newFollowerCount, oldFollowerCount) {
      if (oldFollowerCount < newFollowerCount){
        console.log(`${this.user.userName} gained a follower`)
      }

    }
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`
    }
  },
  methods: {
    followUser() {
      this.followers++
    }
  },
  mounted() {
    this.followUser();
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

.title {
  font-family: 'Roboto', sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
