type TPrimitive =
  | string
  | number
  | boolean
  | bigint
  | symbol
  | undefined
  | null;

function isEqualPrimitive<T extends TPrimitive>(a: T, b: T): boolean {
  if (a === b) {
    return !Number.isNaN(a);
  }
  return a === b;
}

export default isEqualPrimitive;
