/*
  Implement Trim<T> which takes an exact string type
  and returns a new string with the whitespace from both ends removed.

  For example

  type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'
*/

type Space = ' ' | '\n' | '\t';

type Trim<S extends string> = S extends `${Space}${infer R}` | `${infer R}${Space}` ? Trim<R> : S


type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'
type trimmed2 = Trim<'  Hello World'> // expected to be 'Hello World'
type trimmed3 = Trim<'Hello World  '> // expected to be 'Hello World'