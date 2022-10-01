import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../store';
import axios from "axios";
import { svyRepHis, svyRepHisResp } from '../models/svy'

export const initialState: svyRepHisResp = {
    loading: false,
    error: false,
    data: null,
};

const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true;
        },
        setHistory: (state, { payload }) => {
            state.loading = false;
            state.error = false;
            state.data = payload;
        },
        setError: (state) => {
            state.error = true;
        },
    },
});

// export the actions
export const { setLoading, setHistory, setError } = historySlice.actions;

// export the selector (".items" being same as in slices/index.js's "items: something")
export const historySelector = (state: RootState) => state.history;

// export the default reducer
export default historySlice.reducer;



const testUrl = 'https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json';

const devUrl = 'https://test.fico2000.com';
const mainUrl = 'https://www.fico2000.com';

const commonUrl = devUrl;

let svyId = '20220529211621008000';
let userId = 'fico2000webadm@gmail.com';

//3. 설문지 응답 이력 조회
let svyRepHisList = '/svy/SvyRepHisList.do';

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

export function getSvyRepHisList( req: svyRepHis ) {
    return async (dispatch: (arg0: { payload: any; type: string; }) => void) => {
        api
        // .post(svyRepHisList, { svyId: svyId, userId: userId })
        .post(svyRepHisList, req)
        .then((response) => {
            dispatch(setHistory(response.data));

            console.log('svyRepHisList', response.data);
        })
        .catch((er) => {
            dispatch(setError());
        });
    };                                    
}





  
