/*
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
*/


type MyExclude<T, K> = T extends K ? never : T;

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'