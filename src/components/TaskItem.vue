
<template>
  <suspense>
    <template #default>
      <div class="list-item">
        <div class="list-item-status" @click="taskUpdateDone">
          <i v-if="task.done" class="material-icons">check_circle</i>
          <i v-else class="material-icons opacity">check_circle</i>
        </div>
        <router-link
          v-if="task"
          :to="`/todont/${task.id}`"
          class="trigger-open-task"
        >
          <div class="list-item-title">
            {{ task.title }}
          </div>

          <i class="material-icons white-text">chevron_right</i>
        </router-link>
      </div>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </suspense>
</template>



<script>
export default {
  name: "TaskItem",
  props: {
    task: {
      id: Number,
      done: Boolean,
      title: String,
    },
  },

  methods: {
    taskUpdateDone() {
      this.task.done = !this.task.done;
      this.$store.dispatch("tasks/updateTask", this.task);
    },
  },
};
</script>

<style>
.list-item {
  background-color: #673ab7;
  color: #fff;
  display: flex;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 16px;
  align-items: center;
}
.list-item-status {
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #ffffff46;
  padding-right: 15px;
  cursor: pointer;
}
.list-item-status > i {
  font-size: 30px !important;
  transform: scale(1.2);
  padding: 3px;
}
.list-item-title {
  margin: 0 16px;
  width: 75%;
  text-align: left;
  overflow: ellipsis;
  color: #fff;
}
.list-item-edit {
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.opacity {
  opacity: 0.3;
  border-radius: 20px;
  border: dashed 1px white;
  transform: scale(1) !important;
  padding: 2px !important;
}
.trigger-open-task {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
</style>