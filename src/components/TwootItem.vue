<template>
    <b-list-group @click="favouriteTwoot(twoot.id)">
        <div>
            <b-card :title="userName" :sub-title="email">
                <b-card-text>
                {{ twoot.content}}
                </b-card-text>
            </b-card>
        </div>
    </b-list-group>
</template>

<script>

export default {
  name: 'TwootItem',
  props:  {
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    twoot: {
        type: Object,
        required: true
    }
  },
  methods: {
      favouriteTwoot(id) {
          this.$emit('favourite', id)
      }
  }
};
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
