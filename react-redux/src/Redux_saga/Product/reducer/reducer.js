import { GET_PRODUCT_PROGRESS, GET_PRODUCT_SUCCESS } from "../action/action";

const inititalstat = {
  product: [],
  getProductProgress: false,
  getProducterror: null,
  DataIsloded: false,
};

const productReducer = (state = inititalstat, action) => {
  switch (action.type) {
    case GET_PRODUCT_PROGRESS: {
      return {
        ...state,
        getProductProgress: true,
        getProducterror: null,
        DataIsloded: false,
      };
    }
    case GET_PRODUCT_SUCCESS: {
        return {
          ...state,
          getProductProgress: false,
          getProducterror: null,
          product:action.data,
          DataIsloded: true,
        };
      }
      case GET_PRODUCT_SUCCESS: {
        return {
          ...state,
          getProductProgress: false,
          getProducterror:action.data ,
          DataIsloded: false,
        };
      }
      default:
        return{
            ...state
        }
  }
};
export default productReducer;