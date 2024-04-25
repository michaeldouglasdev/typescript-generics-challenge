/*
  Implement a generic TupleToUnion<T> which covers the values of a tuple to its values union.

  type Arr = ['1', '2', '3']

  type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
*/

type Arr = ['1', '2', '3'];

type TupleToUnion<T extends unknown[]> = T[number];

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
