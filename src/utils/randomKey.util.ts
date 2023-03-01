export function randomKey() {
  let key = Math.trunc((Math.random() * Date.now()) / 123456);
  return key;
}
