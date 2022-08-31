import { createAction, props } from "@ngrx/store";

export const login = createAction(
    '[Login Page] Login',
    props<{username: string; password: string; email: string}>()
)