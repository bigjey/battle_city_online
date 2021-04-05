import { BATTLEFIELD_H, BATTLEFIELD_W } from "../constants";
import type { Body } from "../shared/gameplay/Body";

export default function bodyInBounds(body: Body): boolean {
  return (
    body.l >= 0 &&
    body.t >= 0 &&
    body.b <= BATTLEFIELD_W &&
    body.r <= BATTLEFIELD_H
  );
}
