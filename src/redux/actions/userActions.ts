import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import axios from 'axios';

// Определите типы действий
interface RegisterUserAction {
  type: 'REGISTER_USER';
  payload: {
    status: string;
    data?: UserData;
    error?: string;
  };
}

interface LogoutAction {
  type: 'LOGOUT';
}

export interface UserData {
  email: string;
  password: string;
}


export type UserAction = RegisterUserAction | LogoutAction;


export const registerUser = (
  userData: UserData
): ThunkAction<Promise<void>, RootState, undefined, UserAction> => async (dispatch: Dispatch) => {
  try {
    const response = await axios.post('https://example.com/api/register', userData);

    dispatch({
      type: 'REGISTER_USER',
      payload: {
        status: 'success',
        data: response.data,
      },
    });
  } catch (error) {
    dispatch({
      type: 'REGISTER_USER',
      payload: {
        status: 'error',
        error: 'Error registering user',
      },
    });
  }
};

export const logout = (): LogoutAction => ({
  type: 'LOGOUT',
});
