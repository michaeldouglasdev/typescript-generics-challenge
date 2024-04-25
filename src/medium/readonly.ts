/*

  Implement the built-in Readonly<T> generic without using it.

  Constructs a type with all properties of T set to readonly,
  meaning the properties of the constructed type cannot be reassigned.

  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  const todo: MyReadonly2<Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
  }

  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
  todo.completed = true // OK
*/

type MyReadonly<T, K extends keyof T = keyof T> = Omit<T, K> & {
  readonly [P in K]: T[P];
}


interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo: MyReadonly<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo.title = "2" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK
