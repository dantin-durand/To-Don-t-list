<template>
  <nav class="deep-purple">
    <div class="brand-logo"><img src="/img/logo.svg" /></div>
    <a href="#" data-target="slide-out" class="sidenav-trigger"
      ><i class="material-icons">menu</i></a
    >
  </nav>

  <ul id="slide-out" class="sidenav" ref="sidenav">
    <ul v-if="user.name">
      <li>
        <div class="user-view">
          <div class="background deep-purple"></div>
          <span class="white-text name">{{ user.name }}</span>
          <span class="white-text">{{ user.email }}</span>
        </div>
      </li>

      <li>
        <router-link to="/" class="waves-effect">To Don’t list</router-link>
      </li>
    </ul>

    <ul v-if="user.name">
      <li>
        <router-link to="/me" class="waves-effect">Mon compte</router-link>
      </li>
      <li>
        <a @click.prevent="logout" href="#!" class="waves-effect"
          >Déconnexion</a
        >
      </li>
    </ul>
    <ul v-else>
      <li>
        <router-link to="/login" class="waves-effect">Connexion</router-link>
      </li>
      <li>
        <router-link to="/register" class="waves-effect"
          >Inscription</router-link
        >
      </li>
    </ul>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Navbar",
  methods: {
    ...mapActions({ logout: "auth/logout" }),
  },
  computed: {
    ...mapGetters({ user: "auth/data" }),
  },

  watch: {
    $route() {
      if (M) {
        let sidenav = M.Sidenav.getInstance(this.$refs.sidenav);
        sidenav.close();
      }
    },
  },
};
</script>

<style>
.brand-logo > img {
  height: 20px;
}
.sidenav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.router-link-active {
  background-color: #d1c4e9;
}
.sidenav-trigger {
  display: block !important;
}
.user-view .name {
  text-transform: capitalize;
}
</style>