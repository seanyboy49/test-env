export const COPY = "COPY";
export const CTA = "CTA";

export function updateCopy(copy) {
  return {
    type: COPY,
    payload: copy
  }
}

export function updateCTA(cta) {
  return {
    type: CTA,
    payload: cta
  }
}
