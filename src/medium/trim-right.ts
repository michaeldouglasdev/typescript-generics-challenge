/*
  Implement TrimRight<T> which takes an exact string type and
  returns a new string with the whitespace ending removed.

  For example:

  type Trimed = TrimRight<'   Hello World    '> // expected to be '   Hello World'
*/

type Space = ' ' | '\n' | '\t';

type TrimRight<S extends string> = S extends `${infer R}${Space}` ? TrimRight<R>: S

type Trimed = TrimRight<'   Hello World    '> // expected to be '   Hello World'
