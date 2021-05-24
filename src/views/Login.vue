<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="handlelogin" class="z-depth-2">
      <InputEmail @changeEmail="setEmail" />
      <br />
      <InputPassword @changePassword="setPassword" />
      <br />

      <button type="submit" class="white-text deep-purple darken-1 btn">
        Connexion
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import InputEmail from "../components/Inputs/Email";
import InputPassword from "../components/Inputs/Password";

export default {
  name: "Login",
  components: {
    InputEmail,
    InputPassword,
  },
  data() {
    return {
      form: {},
      errors: false,
    };
  },
  methods: {
    setEmail(data) {
      this.form.email = data.value;
      this.errors = data.errors.length > 0;
    },
    setPassword(data) {
      this.form.password = data.value;
      this.errors = data.errors.length > 0;
    },
    handlelogin() {
      this.$store.dispatch("auth/login", this.form);
    },
  },
  action: {},
};
</script>

<style scoped>
form {
  padding: 20px;
  border-radius: 10px;
}
</style>