export const addTodo = (todo) => (dispatch, getState) => {
  _.delay(() => dispatch({ type: 'todos/ADD_TODO', payload: todo }), 2000)
}

export const updateTodoText = (todoText) => (dispatch, getState) => {
  dispatch({ type: 'todos/UPDATE_TODO_TEXT', payload: todoText })
}

export const completeTodo = (todoId) => (dispatch, getState) => {
  dispatch({ type: 'todos/COMPLETE_TODO', payload: todoId })
  dispatch({ type: 'todos/COMPLETE_TODO', payload: todoId })
}

export const deleteTodo = (todoId) => (dispatch, getState) => {
  dispatch({ type: 'todos/DELETE_TODO', payload: todoId })
}
