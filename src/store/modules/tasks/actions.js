import axios from "axios";

export const allTasks = ({ commit, rootState }) => {
  let token;
  if (!rootState.auth.user.token) {
    token = localStorage.getItem("Authtoken");
  } else {
    token = rootState.auth.user.token;
  }
  if (!token) return;

  const config = {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
  };

  axios
    .get(process.env.VUE_APP_API_URL + "/api/tasks", config)
    .then((response) => {
      commit("setTasks", response.data);
    })
    .catch(() => {});
};

export const addDontDo = ({ commit, rootState }, task) => {
  let token;
  if (!rootState.auth.user.token) {
    token = localStorage.getItem("Authtoken");
  } else {
    token = rootState.auth.user.token;
  }
  if (!token) return;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const bodyParameters = task;

  axios
    .post(process.env.VUE_APP_API_URL + "/api/tasks", bodyParameters, config)
    .then((response) => {
      commit("addTask", response.data);
    })
    .catch(() => {});
};

export const updateTask = ({ commit, rootState }, task) => {
  let token;
  if (!rootState.auth.user.token) {
    token = localStorage.getItem("Authtoken");
  } else {
    token = rootState.auth.user.token;
  }
  if (!token) return;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const bodyParameters = task;

  axios
    .put(
      `${process.env.VUE_APP_API_URL}/api/tasks/${task.id}`,
      bodyParameters,
      config
    )
    .then((response) => {
      commit("editTask", response.data);
    })
    .catch(() => {});
};

export const deleteTask = ({ commit, rootState }, taskId) => {
  let token;
  if (!rootState.auth.user.token) {
    token = localStorage.getItem("Authtoken");
  } else {
    token = rootState.auth.user.token;
  }
  if (!token) return;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .delete(`${process.env.VUE_APP_API_URL}/api/tasks/${taskId}`, config)
    .then((response) => {
      commit("removeTask", response.data);
    })
    .catch(() => {});
};
