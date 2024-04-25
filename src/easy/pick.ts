/*

  Implement the built-in Pick<T, K> generic without using it.

  Constructs a type by picking the set of properties K from T

  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyPick<Todo, 'title' | 'completed'>

  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }
*/

interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyPick<T extends Object, K extends keyof T> = {
  [k in  K]: T[k]
}
type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}
