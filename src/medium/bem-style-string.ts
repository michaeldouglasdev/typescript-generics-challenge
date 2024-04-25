/*
  The Block, Element, Modifier methodology (BEM)
  is a popular naming convention for classes in CSS.

  For example, the block component would be represented as btn,
  element that depends upon the block would be represented as btn__price,
  modifier that changes the style of the block would be represented as btn--big or btn__price--warning.

  Implement BEM<B, E, M> which generate string union from these three parameters.
  Where B is a string literal, E and M are strings.
*/

type BEM<B extends string, E extends string = '', M extends string = ''> =
  `${B}${E extends '' ? '' : `__${E}`}${M extends '' ? '' : `--${M}`}`

type BEMed = BEM<'btn', 'big', 'warning'>

type ChannelPID<BC extends string>= BC extends '' ? never : `ChannelBC${BC}`;

type ChannelPID2<T extends string> = T extends `ChannelBC${infer U}` ? `ChannelBC${U extends '' ? never : U}` : never;
type ChannelPID3<T extends string> = T extends `ChannelBC${infer U}` ? U extends '' ? never : `ChannelBC${U}` : never;

type ChannelBC = 'ChannelBC'
type ChannelBCPlaceholder = 'ChannelBC${BC_NAME}'

type NotifierChannelBC<T> =
  T extends ''
    ? ChannelBC
    : T extends `${ChannelBC}${infer U}`
      ? U extends ''
        ? ChannelBCPlaceholder
        : T
      : ChannelBC;

type Result<T extends string> = ChannelPID2<T>;



function add<T extends string>(pid: NotifierChannelBC<T>) {

}

function main() {
  add('ChannelBCAccount');
}