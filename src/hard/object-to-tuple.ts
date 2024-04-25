type User = {
  id: string;
  name: string;
}


type MyExclude<T, K> = T extends K ? never : T;

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'


type MyOmit2<T extends object, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

//<User, 'id'> // 'name'
type MyOmit<T extends object, K extends keyof T> = {
  [k in keyof T as k extends  K ? never : k]: T[k]
}

type X = MyOmit<User, 'id'>
