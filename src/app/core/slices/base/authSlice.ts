import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../../store';
import axios from "axios";
import { SvyInitialType, coporation, reqSaveModel } from '../../models/svy'
import { Auth } from "../../models/auth";

export const initialState: Auth = {
    access_token: "",
    token_type: "",
    refresh_token: "",
    expires_in: 0,
    scope: "",
    jti: ""
};

// our slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAccessToken: (state, { payload }) => {
            state.access_token = payload;
            state.token_type = payload;
        },
    },
});

// export the actions
export const { setAccessToken } = authSlice.actions;

// export the selector (".items" being same as in slices/index.js's "items: something")
export const authSelector = (state: RootState) => state.auth;

// export the default reducer
export default authSlice.reducer;





const testUrl = 'https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json';

const devUrl = 'https://test.fico2000.com';
const mainUrl = 'https://www.fico2000.com';

const commonUrl = devUrl;

let svyId = '20220529211621008000';
let userId = 'fico2000webadm@gmail.com';

//1. 설문지 항목 조회
let svyItemList = '/svy/SvyItemList.do';

//4. 기업 정보 List
let coporationList = '/fin/CoporationList.do';

const api = axios.create({
    baseURL: commonUrl,
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
    },
});


// export function get() {
//     return async (dispatch: (arg0: { payload: any; type: string; }) => void) => {
//         api
//         .post(svyItemList, { svyId: svyId })
//         .then((response) => {
//             dispatch(setItems(response.data));

//             console.log('getSvyList', response.data);
//         })
//         .catch((er) => {
//             dispatch(setError());
//         });
//     };                                    
// }
