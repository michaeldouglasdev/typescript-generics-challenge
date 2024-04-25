
type ArrayType<T extends unknown[]> = T extends (infer U)[] ? U : T;