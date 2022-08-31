import { createReducer, on } from '@ngrx/store';
import { RegisterComponent } from '../component/register/register.component';
import { AuthStateInterface } from '../types/authState.interface';
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

const _cartRemover = createReducer(
  initialState,
  on(removeFromCart, (state) => state - 1),
  on(reset, (state) => 0)
);

export function cartRemover(state, action) {
  return _cartRemover(state, action);
}

// intilize the interface for register

const firstInitialState: AuthStateInterface = {

  isSubmitting: false
}

// const authReducer = createReducer(firstInitialState, on(RegisterComponent))