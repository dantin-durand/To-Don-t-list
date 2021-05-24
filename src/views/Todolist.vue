<template>
  <div class="container">
    <br />
    <div class="fixed-action-btn">
      <router-link to="/newtask" class="btn-floating btn-large deep-purple">
        <i class="large material-icons">add</i>
      </router-link>
      <a> </a>
    </div>

    <div class="list-wrapper">
      <ul v-if="tasks.length > 0">
        <li v-for="(item, index) in tasks" :key="index">
          <TaskItem :task="item" />
        </li>
      </ul>
      <div v-else>Aucune tâche</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TaskItem from "../components/TaskItem";

export default {
  name: "Todolist",
  components: {
    TaskItem,
  },
  data() {
    return {
      form: { dontDoInput: "" },
    };
  },
  methods: {
    handleAddTask() {
      this.addTask(this.form);
      this.form = "";
    },
  },

  mounted() {
    this.$store.dispatch("tasks/allTasks");
  },
  computed: {
    ...mapGetters({ tasks: "tasks/tasks" }),
    ...mapActions({
      addTask: "tasks/addDontDo",
    }),
  },
};
</script>

<style>
.input-wrapper {
  padding: 5px 15px;
  border-radius: 10px;
  background-color: #fff;
}
.form {
  height: 100%;
  color: #fff;
}
.todo {
  background-color: #fff;
  color: black;
}
.list-wrapper {
  height: 600px;
}
.input-field {
  margin: 0 !important;
}
</style>