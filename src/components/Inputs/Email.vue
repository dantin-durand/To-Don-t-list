<template>
  <div class="input-field">
    <input
      placeholder="golden.vinyle@gmail.com"
      id="email"
      type="email"
      name="email"
      v-model="email"
      @input="changeInputEmail"
    />
    <label for="name">Adresse mail</label>
    <div v-for="error of v$.email.$silentErrors" :key="error.$uid">
      <p class="left-align red-text">{{ error.$message }}</p>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  name: "InputEmail",
  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      email: "",
    };
  },
  validations() {
    return {
      email: { required, email },
    };
  },
  methods: {
    changeInputEmail() {
      this.$emit("changeEmail", {
        value: this.email,
        errors: this.v$.email.$silentErrors,
      });
    },
  },
};
</script>

<style>
</style>

