import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../store';
import axios from "axios";
import { SvyInitialType } from '../models/svy'

export const initialState: SvyInitialType = {
    loading: false,
    error: false,
    sitems: {
        data: {
            svyData: {
                svyId: '',
                itmList: [],
                success: false,
                cmmError: false,
            }
        }
    },
};

// our slice
const apiSlice = createSlice({
    name: "sitems",
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true;
        },
        setItems: (state, { payload }) => {
            state.loading = false;
            state.error = false;
            state.sitems = payload;
        },
        setError: (state) => {
            state.error = true;
        },
    },
});

// export the actions
export const { setLoading, setItems, setError } = apiSlice.actions;

// export the selector (".items" being same as in slices/index.js's "items: something")
export const itemsSelector = (state: RootState) => state.sitems;

// export the default reducer
export default apiSlice.reducer;





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


export function getSvyList() {
    return async (dispatch: (arg0: { payload: any; type: string; }) => void) => {
        api
        .post(svyItemList, { svyId: svyId })
        .then((response) => {
            dispatch(setItems(response.data));

            console.log('getSvyList', response.data);
        })
        .catch((er) => {
            dispatch(setError());
        });
    };                                    
}



  
