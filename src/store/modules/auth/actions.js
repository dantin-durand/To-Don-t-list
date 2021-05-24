import axios from "axios";
import router from "../../../router";

export const login = ({ commit, state }, form) => {
  let params = {
    email: form.email,
    password: form.password,
    device_name: "vue",
  };

  axios
    .post(process.env.VUE_APP_API_URL + "/api/auth/login", params)
    .then((response) => {
      commit("token", response.data.token);
      const config = {
        headers: {
          Authorization: `Bearer ${response.data.token}`,
        },
      };

      axios
        .post(process.env.VUE_APP_API_URL + "/api/auth/me", null, config)
        .then((result) => {
          const user = {
            id: result.data.id,
            name: result.data.name,
            email: result.data.email,
            created_at: result.data.created_at,
            updated_at: result.data.updated_at,
          };

          commit("data", user);
        })
        .catch(() => {
          router.push({ name: "Login" });
        });
      router.push("/");
      M.toast({
        html: "Vous venez de vous connecter.",
      });
    })
    .catch((error) => {
      const statusCode = error.response.status;

      if (statusCode === 401) {
        M.toast({
          html: "Mauvais mot de passe/identifiant.",
          classes: "red",
        });
      }
    });
};

export const register = ({ commit, state }, form) => {
  let params = {
    email: form.email,
    name: form.name,
    password: form.password,
    device_name: "vue",
  };

  axios
    .post(process.env.VUE_APP_API_URL + "/api/auth/register", params)
    .then((response) => {
      commit("token", response.data.token);

      const config = {
        headers: {
          Authorization: `Bearer ${response.data.token}`,
        },
      };

      axios
        .post(process.env.VUE_APP_API_URL + "/api/auth/me", null, config)
        .then((result) => {
          const user = {
            id: result.data.id,
            name: result.data.name,
            email: result.data.email,
            created_at: result.data.created_at,
            updated_at: result.data.updated_at,
          };

          commit("data", user);
        })
        .catch(() => {
          router.push({ name: "Login" });
        });
      router.push("/");
    })
    .catch((error) => {
      const statusCode = error.response.status;

      if (statusCode === 409) {
        M.toast({
          html: "Utilisateur déjà inscrit",
          classes: "red",
        });
      }
      if (statusCode === 422) {
        M.toast({
          html: "Veuillez remplir tout les champs",
          classes: "red",
        });
      }
    });
};

export const logout = ({ commit, state }) => {
  const token = state.user.token;
  if (!token) return;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const bodyParameters = {};
  axios
    .post(
      process.env.VUE_APP_API_URL + "/api/auth/logout",
      bodyParameters,
      config
    )
    .then(() => {
      commit("token", "");
      commit("data", {});
      router.push({ name: "Login" });
    })
    .catch(() => {});
};

export const userInit = ({ commit, state }) => {
  const token = localStorage.getItem("Authtoken");

  if (!token || token.length < 0) {
    router.push({ name: "Login" });
    return;
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .post(process.env.VUE_APP_API_URL + "/api/auth/me", null, config)
    .then((response) => {
      commit("token", token);
      const user = {
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
        created_at: response.data.created_at,
        updated_at: response.data.updated_at,
      };
      commit("data", user);
    })
    .catch(() => {
      router.push({ name: "Login" });
    });
};
