/*
  mplement the JavaScript Array.includes function in the type system.
  A type takes the two arguments.
  The output should be a boolean true or false.

  type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
*/

type Includes<T extends string[], U extends string> =  {
  [p in T[number]]: true
} [U] extends true ? true : false;

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Wamuu'> // expected to be `false`
