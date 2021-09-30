import { createAction, props } from '@ngrx/store';
  // /**
  //  * Define the actions
  //  */
export const addToCart = createAction('[Cart Component] addToCart',  props<{amount: number}>());
export const addToCartItems = createAction('[Cart Component] addToCart',  props<{amount: []}>());
export const removeFromCart = createAction('[Cart Component] removeFromCart',  props<{amount: number}>());
export const reset = createAction('[Cart Component] reset');