import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EntityUsuario } from '../Domain/General/EntityUsuario';

interface IGenericSlice {
    user: EntityUsuario;
    loading: boolean;
}

const initialState: IGenericSlice = {
    user: {
        token: '',
        user: {
            email: '',
            first_name: '',
            id: 0,
            last_name: '',
            is_staff: false,
            username: '',
            phone: '',
            date_joined: '',
            permitir_notifications: false
        }
    },
    loading: false
};

const genericSlice = createSlice({
    name: 'genericSlice',
    initialState,
    reducers: {
        changeUser: (state, { payload }: PayloadAction<EntityUsuario>) => {
            return {
                ...state,
                user: payload
            };
        },
        addLoading: (state) => {
            return {
                ...state,
                loading: true
            }
        },
        removeLoading: (state) => {
            return {
                ...state,
                loading: false
            }
        }
    },
});

export const {
    changeUser,
    addLoading,
    removeLoading
} = genericSlice.actions;

export default genericSlice.reducer;