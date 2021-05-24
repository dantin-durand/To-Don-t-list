<template>
  <Navbar />
  <router-view />
</template>

<script>
import { mapActions } from "vuex";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
  created() {
    this.$store.dispatch("auth/userInit");
  },
  methods: {
    ...mapActions({ logout: "auth/logout" }),
  },
  mounted() {
    if (M) {
      M.AutoInit();
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>