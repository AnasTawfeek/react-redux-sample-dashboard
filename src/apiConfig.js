export const rootApi = `http://localhost:3001`;

// Users
export const usersApi = `${rootApi}/users`;
export const userApi = (id) => `${usersApi}?id.value=${id}`;

// Todos
export const todosApi = `${rootApi}/todos`;
export const editTodoApi = (id) => `${todosApi}/${id}`;
