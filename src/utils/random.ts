export function randomInt(
  min = 0,
  max: number = Number.MAX_SAFE_INTEGER
): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
