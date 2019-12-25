export const allTodos = (state) => {
    const array = Object.keys(state.todos).map( (id) => {
        return(state.todos[id]);
    })
    return array;
}

window.allTodos = allTodos;

// {
//     todos: {
//         1: todo1,
//         2: todo2,
//         3: todo3
//     }
// }