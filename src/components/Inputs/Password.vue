<template>
  <div class="input-field">
    <input
      placeholder="mot de passe"
      id="password"
      type="password"
      name="password"
      @input="changeInputPassword"
      v-model="password"
    />
    <label for="name">Mot de passe</label>
    <div v-for="error of v$.password.$silentErrors" :key="error.$uid">
      <p class="left-align red-text">{{ error.$message }}</p>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

export default {
  name: "InputPassword",
  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      password: "",
    };
  },
  validations() {
    return {
      password: { required, minLength: minLength(6) },
    };
  },
  methods: {
    changeInputPassword() {
      this.$emit("changePassword", {
        value: this.password,
        errors: this.v$.password.$silentErrors,
      });
    },
  },
};
</script>

<style>
</style>

