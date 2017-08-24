export const COPY = "COPY";
export const CTA = "CTA";
export const PRODUCT_COLOUR = "PRODUCT_COLOUR";
export const PRODUCT_CATEGORY = "PRODUCT_CATEGORY";
export const IMAGE_VARIANT = "IMAGE_VARIANT";

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

export function updateCategory(category) {
  return {
    type: PRODUCT_CATEGORY,
    payload: category
  }
}

export function updateImageVariant(imageVariant) {
  return {
    type: IMAGE_VARIANT,
    payload: imageVariant
  }
}
