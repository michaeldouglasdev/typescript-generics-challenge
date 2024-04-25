type MyPartial<T> = {
  [K in keyof T]?: T[K]
}

type User = {
  name: string;
  address: UserAddress;
}

type UserAddress = {
  street: string;
}

type DeepPartial<T> = keyof T extends never ? T : {
  [K in keyof T]?: DeepPartial<T[K]>
}

type Result = DeepPartial<User>

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

