/*

Sometimes, you may want to look up a type in a union by its attributes.

In this challenge, we would like to get the corresponding type by searching
for the common type field in the union Cat | Dog.
In other words, we will expect to get Dog for LookUp<Dog | Cat, 'dog'>
and Cat for LookUp<Dog | Cat, 'cat'> in the following example.

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type MyDogType = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`
*/

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type LookUp<T extends {type: string}, K> = T extends T ? T['type'] extends K ? T : never : never

type LookUp2<U, T extends string> = {
  [K in T]: U extends { type: T } ? U : never
}[T]

type LookUp3<U, T> = U extends {type: T} ? U : never;

type Result = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`
type Result2 = LookUp2<Cat | Dog, 'dog'> // expected to be `Dog`
type Result3 = LookUp3<Cat | Dog, 'dog'> // expected to be `Dog`
