type Query = `query routes {
  routes(url: $url) {
    sku
  }
}`


type VariablePrefix = '$';
type VariableSeparator = ')' | ',';

type GetGraphQLVariables<S extends string> =
  S extends `${VariablePrefix}${infer Rest}` ? GetGraphQLVariables<Rest> : S extends VariableSeparator ? infer R : false



  } // Rest extends VariableSeparator ? S | GetGraphQLVariables<Rest> : never : never;

/*type Query = `query Routes {
  routes(url: $url) {
    canonical
    code
    description
    id
    identifier
    sku
    target
    title
    type
    url
    cd_grm
    meta_title
    meta_description
  }
}`*/

type x = GetGraphQLVariables<Query>


interface Production {
  planted: boolean;
  readyToHarvest: boolean;
  harvested: boolean;
  whatever1: string;
  whatever2: string;
  whatever3: string;
}
const production: Production = {
  planted: false,
  readyToHarvest: true,
  harvested: false,
  whatever1: 'whatever1',
  whatever2: 'whatever2',
  whatever3: 'whatever3'
}

type GetProductionStatusType<T extends Production> =  {
  [K in keyof T]: T[K] extends boolean ? K : never
}[keyof T]


type PickByType<T, U> = Pick<T, { [K in keyof T]: T[K] extends U ? K : never }[keyof T]>;

type ProductionStatusType<T extends Production> = GetProductionStatusType<T>

type Prod = ProductionStatusType<Production>

//type ProductionStatusType<T extends Production> = PickByType<T, boolean>

//type xy = ProductionStatusType<Production>

type xx = PickByType<Production, boolean>