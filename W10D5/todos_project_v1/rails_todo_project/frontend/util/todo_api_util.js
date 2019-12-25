export const fetchTodos = () => {
    // debugger;
    return $.ajax({
    method: 'GET',
    url: '/api/todos'
    });
}

window.fetchTodos = fetchTodos;