/*
  type ExampleType = Promise<string>

  type Result = MyAwaited<ExampleType> // string
*/



type ExampleType = Promise<string>;

type MyAwaited<T> = T extends Promise<infer R> ? R : null;

type Result = MyAwaited<ExampleType> // string
