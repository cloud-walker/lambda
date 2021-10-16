export function add(a: number): (b: number) => number
export function add(a: number, b: number): number
export function add(a: number, b?: number) {
  const _add = (b: number) => a + b

  return b != null ? _add(b) : _add
}
