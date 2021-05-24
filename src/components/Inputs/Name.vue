<template>
  <div class="input-field">
    <input
      placeholder="Golden_Viynle"
      id="name"
      type="text"
      name="name"
      v-model="name"
      @input="changeInputName"
    />
    <label for="name">Pseudo</label>
    <div v-for="error of v$.name.$silentErrors" :key="error.$uid">
      <p class="left-align red-text">{{ error.$message }}</p>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

export default {
  name: "InputName",
  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      name: "",
    };
  },
  validations() {
    return {
      name: { required, minLength: minLength(3) },
    };
  },
  methods: {
    changeInputName() {
      this.$emit("changeName", {
        value: this.name,
        errors: this.v$.name.$silentErrors,
      });
    },
  },
};
</script>

<style>
</style>

