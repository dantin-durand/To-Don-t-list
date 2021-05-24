<template>
  <div class="container">
    <h1>Register</h1>
    <form @submit.prevent="handleRegister()" class="z-depth-2">
      <InputName @changeName="setName" />
      <br />
      <InputEmail @changeEmail="setEmail" />
      <br />
      <InputPassword @changePassword="setPassword" />
      <br />
      <div v-for="error of fetchedErrors" :key="error.key">
        <p class="left-align red-text">{{ error }}</p>
      </div>
      <input
        type="submit"
        value="Inscription"
        class="white-text deep-purple darken-1 btn"
      />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import InputName from "../components/Inputs/Name";
import InputEmail from "../components/Inputs/Email";
import InputPassword from "../components/Inputs/Password";

export default {
  name: "Register",
  components: {
    InputName,
    InputEmail,
    InputPassword,
  },
  data() {
    return {
      form: {},
      errors: false,
      fetchedErrors: [],
    };
  },
  methods: {
    setName(data) {
      this.form.name = data.value;
      this.errors = data.errors.length > 0;
    },
    setEmail(data) {
      this.form.email = data.value;
      this.errors = data.errors.length > 0;
    },
    setPassword(data) {
      this.form.password = data.value;
      this.errors = data.errors.length > 0;
    },
    handleRegister() {
      if (this.errors === false) {
        this.$store.dispatch("auth/register", this.form);
      }
    },
    ...mapActions({ register: "auth/register" }),
  },

  mounted() {
    M.updateTextFields();
  },
};
</script>

<style scoped>
form {
  padding: 20px;
  border-radius: 10px;
}
</style>