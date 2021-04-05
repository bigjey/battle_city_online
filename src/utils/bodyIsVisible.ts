import { BATTLEFIELD_H, BATTLEFIELD_W } from "../constants";
import { Body } from "../shared/gameplay/Body";

export function bodyIsVisible(body: Body): boolean {
  if (
    body.t < 0 ||
    body.l < 0 ||
    body.r > BATTLEFIELD_W ||
    body.b > BATTLEFIELD_H
  ) {
    return false;
  }

  return true;
}
