/*
  Implement the String to Union type. Type take string argument.
  The output should be a union of input letters

  type Test = '123';
  type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
*/


type Test = '123';

type StringToUnion<S extends string> =
  S extends `${infer FirstLetter}${infer rest}` ? FirstLetter | StringToUnion<rest> : never

type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
