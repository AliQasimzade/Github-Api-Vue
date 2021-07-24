<template>
  <v-container>
    <v-alert border="top" colored-border type="info" elevation="2">
      {{ filter }}
    </v-alert>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    filter: "",
  }),
  mounted() {
    this.filter = this.$store.getters.getCurrentName;
  },
};
</script>
