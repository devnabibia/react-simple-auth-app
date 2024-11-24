import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Auth } from "../../models/auth.model";
import { getUserFromLocalStorage, removeUserFromLocalStorage, setUserLocalStorage } from "../../services/persistUser.service";
import { RootState } from "../store";
import { AppThunk, AppThunkDispatch } from "../utils/types";

export interface AuthState {
	isLoading: boolean;
	error?: any;
	userInfo: Auth | undefined;
}

const initialState: AuthState = {
	isLoading: false,
	userInfo: getUserFromLocalStorage(),
};

export const authenticationSlice = createSlice({
	name: "authentication",
	initialState,
	reducers: {
		request: (state): AuthState => {
			return {
				...state,
				isLoading: true,
			};
		},
		success: (state, action: PayloadAction<any>): AuthState => {
			return {
				...state,
				isLoading: false,
				userInfo: action.payload,
			};
		},
		fail: (state, action: PayloadAction<any>): AuthState => {
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		},
		logout: (state): AuthState => {
			return {
				...state,
				isLoading: false,
				userInfo: undefined,
			};
		},
	},
});

export const authLogin = (email: string, password: string): AppThunk =>
	async (dispatch: AppThunkDispatch): Promise<void> => {
		try {
			dispatch(request());
			const data: Auth = {
        accessToken: 'token_simple_auth_app',
        user: {
          id: '123456789',
          name: 'Bryan',
          lastname: 'Aguilar'
        }
      }
			dispatch(success(data));
			setUserLocalStorage(data);
		} catch (error: any) {
			dispatch(fail(error));
		}
	};

export const authLogout =
	(): AppThunk =>
	async (dispatch: AppThunkDispatch): Promise<void> => {
		dispatch(logout());
		removeUserFromLocalStorage();
	};

export const { request, success, fail, logout } = authenticationSlice.actions;
export const selectAuth = (state: RootState): AuthState => state.authentication;
export const authenticationReducer = authenticationSlice.reducer;
