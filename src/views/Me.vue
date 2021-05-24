<template>
  <suspense>
    <template #default>
      <div class="container">
        <ul class="z-depth-1">
          <h5>Compte</h5>
          <li>Pseudo: {{ user.name }}</li>
          <li>Adresse mail: {{ user.email }}</li>
          <li>
            Créer le:
            {{
              user.created_at ? new Date(user.created_at).toLocaleString() : ""
            }}
          </li>
        </ul>
      </div>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </suspense>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Me",
  data() {
    return {};
  },
  mounted() {},
  computed: {
    ...mapGetters({ user: "auth/data" }),
  },
};
</script>


<style scoped>
ul {
  border-radius: 10px;
  padding: 10px 20px 20px 20px;
  text-align: left;
}
</style>