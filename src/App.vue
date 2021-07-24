<template>
  <v-app id="app">
    <v-container>
      <div class="user" v-for="user in users" :key="user.id">
        <img :src="user.avatar_url" :alt="user.login" />
        <a :href="user.html_url">Get user</a>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => {
    return {
      users: null,
    };
  },
  created() {
    const getData = async () => {
      const result = await fetch("https://api.github.com/search/users?q=AliQasimzade");
      const res = await result.json();
      this.users = res.items;
      console.log(this.users[0]);
     
    };
    getData();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
