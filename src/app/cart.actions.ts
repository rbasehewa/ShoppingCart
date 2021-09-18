import { createAction, props } from '@ngrx/store';

export const addToCart = createAction('[Cart Component] addToCart',  props<{amount: number}>());
export const removeFromCart = createAction('[Cart Component] removeFromCart');
export const reset = createAction('[Cart Component] reset');