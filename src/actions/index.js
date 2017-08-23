export const COPY = "COPY";
export const CTA = "CTA";
export const PRODUCT_COLOUR = "PRODUCT_COLOUR";

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

export function updateProductColour(colour) {
  return {
    type: PRODUCT_COLOUR,
    payload: colour
  }
}
