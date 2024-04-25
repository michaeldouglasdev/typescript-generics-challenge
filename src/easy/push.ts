/*
  Implement the generic version of Array.push

  type Result = Push<[1, 2], 3> // [1, 2, 3]
*/

type Push<T extends number[], U> =  [...T, U]

type Result = Push<[1, 2], 3> // [1, 2, 3]
