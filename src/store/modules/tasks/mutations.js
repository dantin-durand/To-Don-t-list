export const setTasks = (state, data) => {
  state.tasks = data;
};
export const addTask = (state, data) => {
  state.tasks.unshift(data);
};

export const editTask = (state, data) => {
  const taskToUpdate = state.tasks.findIndexOf((task) => task.id === data.id);
  state.tasks[taskToUpdate] = data;
};

export const removeTask = (state, data) => {
  const taskToRemove = state.tasks.findIndexOf((task) => task.id === data.id);
  state.tasks = state.tasks.splice(taskToRemove);
};
