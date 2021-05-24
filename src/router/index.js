import { createRouter, createWebHistory } from "vue-router";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Me from "../views/Me.vue";
import Todolist from "../views/Todolist.vue";
import Newtask from "../views/Newtask.vue";

const routes = [
  {
    path: "/",
    name: "Todontlist",
    component: Todolist,
  },
  {
    path: "/todont/:id_task",
    name: "Todont",
    component: Newtask,
    props: true,
  },
  {
    path: "/newtask",
    name: "Newtask",
    component: Newtask,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/me",
    name: "Me",
    component: Me,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
