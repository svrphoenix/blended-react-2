import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, Text, Todo } from 'components';

// EditForm

export class Todos extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) {
      this.setState({ todos });
    }
  }
  componentDidUpdate(_, prevState) {
    const { todos } = this.state;
    if (prevState.todos !== todos) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }

  addTodo = text => {
    const todo = { id: nanoid(), text };
    this.setState(({ todos }) => ({
      todos: [...todos, todo],
    }));
  };

  handleSubmit = data => {
    this.addTodo(data);
  };

  deleteTodo = id => {
    this.setState(({ todos }) => ({
      todos: todos.filter(todo => todo.id !== id),
    }));
  };

  editTodo = (id, value) => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo => {
        if (todo.id === id) {
          todo.text = value;
        }
        return todo;
      }),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.handleSubmit} />
        {todos.length === 0 && (
          <Text textAlign="center">There are no any todos ... </Text>
        )}
        <Grid>
          {todos.length > 0 &&
            todos.map((todo, idx) => (
              <GridItem key={todo.id}>
                <Todo
                  id={todo.id}
                  text={todo.text}
                  onDelete={this.deleteTodo}
                  onEdit={this.editTodo}
                  counter={idx + 1}
                />
              </GridItem>
            ))}
        </Grid>
      </>
    );
  }
}
