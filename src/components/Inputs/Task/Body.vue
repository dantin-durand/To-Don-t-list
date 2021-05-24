<template>
  <textarea
    name="body"
    class="body"
    placeholder="À ne pas faire..."
    v-model="body"
    @input="changeInputBody"
  ></textarea>
</template>

<script>
export default {
  name: "InputBody",
  props: {
    body: {
      type: String,
      required: false,
    },
  },
  mounted() {},

  methods: {
    changeInputBody() {
      this.$emit("changeTextareaBody", {
        value: this.body,
      });
    },
  },
};
</script>

<style scoped>
.body {
  border: 0px;
  outline: none;
  min-height: 50vh;
  padding: 10px 20px;
}
</style>

