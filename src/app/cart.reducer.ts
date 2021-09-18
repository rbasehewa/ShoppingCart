import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart, reset } from './cart.actions';

export const initialState = 0;

const _cartReducer = createReducer(
  initialState,
  on(addToCart, (state, {amount}) => state + amount),
  on(removeFromCart, (state) => state - 1),
  on(reset, (state) => 0)
);

export function cartReducer(state, action) {
  return _cartReducer(state, action);
}