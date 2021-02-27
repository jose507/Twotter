<template>
	<a-row type="flex" justify="center">
		<div class="" style="background:#ECECEC; padding:30px">
			<a-card :title="this.user.userName" :bordered="false" style="width: 360px;">
				<h4>{{fullName}}</h4>
				<h4>{{user.email}}</h4>
				<h5><b-badge href="#" variant="success" v-if="user.isAdmin">Admin</b-badge></h5>
				<h4><strong>Followers: </strong>{{followers}}</h4>

        <form class="d-flex flex-column form-group" @submit.prevent="createNewTwoot">
					<label for="newTwoot"><strong>New Twoot</strong></label>
					<textarea id="newTwoot" class="form-control" rows="4" v-model="newTwootContent" />
					<div class="user-profile_create_twoot_type">
						<label for="newTwootType"><strong>Type</strong></label>
						<select id="newTwootType" class="my-2" v-model="selectedTwootType">
							<option :value="option.value" v-for="(option, index) in twootTypes" :key="index"> {{ option.name }} </option>
						</select>
					</div>
					<button class="my-2 btn btn-success">Twoot</button>
				</form>
			</a-card>
		</div>
		<b-list-group>
			<TwootItem v-for="twoot in user.twoots" :key="twoot.id" :userName="user.userName" :twoot="twoot" :email="user.email" @favourite="toggleFavourite" /> </b-list-group>
	</a-row>
</template>


<script>
import TwootItem from "./TwootItem";

export default {
  name: 'UserProfile',
  components: { TwootItem },
  data() {
    return {
      newTwootContent: '',
      selectedTwootType: 'instant',
      twootTypes: [
        { value: 'draft', name: 'Draft' },
        { value: 'instant', name: 'Instant Twoot' }
      ],
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
    },
    toggleFavourite(id) {
        console.log(`Favourite Tweet ${id}`)
    },
    createNewTwoot() {
      if (this.newTwootContent && this.selectedTwootType !== 'draft') {
        this.user.twoots.unshift({
          id: this.user.twoots.length + 1,
          content: this.newTwootContent
        })
        this.newTwootContent = '';
      }
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
