export default function snapValue(value: number, snapValue: number): number {
  const snapped = Math.round(value / snapValue);
  return snapped * snapValue;
}
