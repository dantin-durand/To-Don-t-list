<template>
  <div>
    <button>EDIT</button>
    <button>DELETE</button>
    <div v-if="isEditMode !== false" class="task-wrapper">
      <span>'status:' {{ task.done }}</span>
      <p>{{ task.title }}</p>
    </div>
    <div v-else>
      <input name="title" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  data() {
    return {
      isEditMode: "",
    };
  },
  props: {
    task: {
      id: Number,
      done: Boolean,
      title: String,
    },
  },
  methods: {
    handleEdit: () => {},
  },
};
</script>

<style>
.task-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
}
</style>