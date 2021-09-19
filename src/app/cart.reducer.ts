import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart, reset } from './cart.actions';

export const initialState = 0;

  // /**
  //  * Define a reducer function for add to cart
  //  */
const _cartReducer = createReducer(
  initialState,
  on(addToCart, (state, {amount}) => state + amount),
  on(reset, (state) => 0)
);

export function cartReducer(state, action) {
  return _cartReducer(state, action);
}