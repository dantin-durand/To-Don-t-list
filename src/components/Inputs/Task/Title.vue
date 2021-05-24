<template>
  <div>
    <input
      placeholder="Titre..."
      id="title"
      type="text"
      name="title"
      class="title"
      v-model="title"
      @input="changeInputTitle"
      autocomplete="off"
    />
  </div>
</template>

<script>
export default {
  name: "InputTitle",
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  methods: {
    changeInputTitle() {
      this.$emit("changeInputTitle", {
        value: this.title,
      });
    },
  },
};
</script>

<style scoped>
div {
  width: 100vw;
}
.title {
  border-bottom: 1px solid #e6e5e5 !important;
  box-shadow: none !important;
  padding: 5px 20px !important;
  box-sizing: border-box !important;
  max-width: 100vw;
}
</style>

