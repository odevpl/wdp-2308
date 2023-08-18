/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getProductById = ({ products }, id) =>
  products.find(product => product.id === id);

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getPromoted = ({ products }) =>
  products.filter(item => item.promoted === true);

const createActionName = actionName => `app/products/${actionName}`;
const TOGGLE_FAVORITE = createActionName('TOGGLE_FAVORITE');
const RATE_PRODUCT = createActionName('RATE_PRODUCT');

// actions
export const toggleFavorite = payload => ({ type: TOGGLE_FAVORITE, payload });
export const rateProduct = payload => ({ type: RATE_PRODUCT, payload });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      return statePart.map(product =>
        product.id === action.payload.id ? { ...product, ...action.payload } : product
      );

    case RATE_PRODUCT:
      return statePart.map(product =>
        product.id === action.payload.id ? { ...product, ...action.payload } : product
      );

    default:
      return statePart;
  }
}
