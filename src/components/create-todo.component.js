import React, { Component } from 'react';

export default class CreateTodo extends Component {
    render() {
        return (
            <div>
                <p>Welcome to Create Todo Component!!</p>
            </div>
        )
    }
}

constructor(props) {
    super(props);

    this.state = {
        todo_description: '',
        todo_responsible: '',
        todo_priority: '',
        todo_completed: false
    }
}

onChangeTodoDescription(e) {
    this.ListeningStateChangedEvent({
        todo_description: e.target.value
    });
}

onChangeTodoResponsible(e) {
    this.ListeningStateChangedEvent({
        todo_responsible: e.target.value
    });
}

onChangeTodoPriority(e) {
    this.ListeningStateChangedEvent({
        todo_priority: e.target.value
    });
}