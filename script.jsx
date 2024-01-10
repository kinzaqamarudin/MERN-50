function addTodo() {
    var input = document.getElementById('todo-input');
    var newTodo = input.value;
    if (newTodo) {
        var li = document.createElement('li');
        li.textContent = newTodo;
        document.getElementById('todo-list').appendChild(li);
        input.value = '';
    }
}function addTodo() {
    var input = document.getElementById('todo-input');
    var newTodo = input.value;
    if (newTodo) {
        var li = document.createElement('li');
        li.textContent = newTodo;

        // Task ko delete karne ke liye button
        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function() {
            li.remove();
        };

        // Button ko list item ke sath jodna
        li.appendChild(deleteBtn);

        // List item ko list mein jodna
        document.getElementById('todo-list').appendChild(li);

        // Input field ko clear karna
        input.value = '';
    }
}
