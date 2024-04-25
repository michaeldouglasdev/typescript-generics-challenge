/*
  Implement the type version of Object.entries

  For example

  interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }
  type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];

*/

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

//type ObjectEntries<T> = keyof
type Result = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];
