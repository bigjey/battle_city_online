import type { Body } from "../shared/gameplay/Body";

export function AABBIntersects(A: Body, B: Body): boolean {
  return !(A.r <= B.l || A.l >= B.r || A.t >= B.b || A.b <= B.t);
}
