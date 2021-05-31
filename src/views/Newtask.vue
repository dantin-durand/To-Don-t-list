<template>
  <div class="action-barre">
    <router-link to="/" class="white-text"
      ><i class="material-icons">keyboard_arrow_left</i>Retour</router-link
    >
    <div>
      <button
        class="deep-purple-text"
        @click="handleRemoveTask()"
        v-if="id_task"
      >
        <i class="material-icons">delete</i>
      </button>
      <button class="deep-purple-text" @click="handleAddTask()">
        <i class="material-icons">check</i>
      </button>
    </div>
  </div>
  <form v-if="task" @submit.prevent="handleAddTask()">
    <InputTitle @changeInputTitle="setTitle" />
    <InputBody @changeTextareaBody="setBody" />
    <button type="submit">Update task</button>
  </form>

  <form v-else @submit.prevent="handleAddTask()">
    <InputTitle @changeInputTitle="setTitle" :title="form.title" />
    <InputBody @changeTextareaBody="setBody" :body="form.body" />
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TaskItem from "../components/TaskItem";
import InputTitle from "../components/Inputs/Task/Title";
import InputBody from "../components/Inputs/Task/Body";

export default {
  name: "Newtask",
  components: {
    TaskItem,
    InputTitle,
    InputBody,
  },
  props: {
    id_task: {
      type: String,
      require: false,
    },
    task: {
      title: {
        type: String,
        require: false,
      },
      body: {
        type: String,
        require: false,
      },
      done: {
        type: Boolean,
        require: false,
      },
    },
  },
  watch: {
    tasks() {
      if (this.id_task) {
        const taskToUpdate = this.tasks.findIndex(
          (item) => item.id == this.id_task
        );
        this.form = this.tasks[taskToUpdate];
      }
    },
  },
  data() {
    return {
      form: {
        title: "",
        body: "",
        done: false,
      },
    };
  },
  mounted() {
    if (this.task) {
      this.form = this.task;
    } else if (this.id_task) {
      this.$store.dispatch("tasks/allTasks");
    }
  },
  methods: {
    setTitle(data) {
      this.form.title = data.value;
    },
    setBody(data) {
      this.form.body = data.value;
    },
    handleRemoveTask() {
      this.$store.dispatch("tasks/deleteTask", this.id_task);
      this.$router.push("/");
      M.toast({
        html: `"${this.form.title}" a bien été supprimé`,
        classes: "green",
      });
    },
    handleAddTask() {
      if (this.task) {
        this.$store.dispatch("tasks/addDontDo", this.task);
      } else if (
        this.id_task &&
        this.form.title.length > 0 &&
        this.form.body.length > 0
      ) {
        this.$store.dispatch("tasks/updateTask", this.form);
        this.$router.push("/");
        M.toast({
          html: `"${this.form.title}" a bien été modifié`,
          classes: "green",
        });
      } else if (this.form.body.length > 0 && this.form.title.length > 0) {
        this.$store.dispatch("tasks/addDontDo", this.form);
        this.$router.push("/");
        M.toast({
          html: `"${this.form.title}" a bien été créer`,
          classes: "green",
        });
        this.form = "";
      } else {
        M.toast({
          html: "Veuillez renseigner le titre et la description.",
          classes: "red",
        });
        return;
      }
    },
  },
  computed: {
    ...mapGetters({ tasks: "tasks/tasks" }),
  },
};
</script>

<style>
.action-barre {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #683ab782;
  padding: 5px 20px;
}
.action-barre > a {
  display: flex;
  align-items: center;
  font-size: 15px;
}
.action-barre > div {
  display: flex;
  align-items: center;
  gap: 30px;
}
.action-barre button {
  background-color: transparent;
  border: 0px;
  font-size: 15px;
}
</style>