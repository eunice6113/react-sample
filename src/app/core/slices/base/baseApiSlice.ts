import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../../store';
import axios from "axios";
import { BaseApi } from "../../models/base-api";

export const initialState: BaseApi = {
    loading: false,
    error: false,
    response: [],
};

// our slice
const baseApiSlice = createSlice({
    name: "api",
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true;
        },
        setResponse: (state, { payload }) => {
            state.loading = false;
            state.error = false;
            state.response = payload;
        },
        setError: (state) => {
            state.error = true;
        },
    },
});

// export the actions
export const { setLoading, setResponse, setError } = baseApiSlice.actions;

// export the selector (".items" being same as in slices/index.js's "items: something")
export const apiSelector = (state: RootState) => state.api;

// export the default reducer
export default baseApiSlice.reducer;





const testUrl = 'https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json';

const devUrl = 'https://test.fico2000.com';
// const mainUrl = 'https://www.fico2000.com';

const commonUrl = devUrl;

let svyId = '20220529211621008000';
// let userId = 'fico2000webadm@gmail.com';

//1. 설문지 항목 조회
let svyItemList = '/svy/SvyItemList.do';

//4. 기업 정보 List
// let coporationList = '/fin/CoporationList.do';

const TOKEN_NAME = 'access_token';
const REFRESH_TOKEN = 'refresh_token';

const getToken = (): string|null => {
    return localStorage.getItem(TOKEN_NAME);
}

const setToken = (token: string): void => {
    localStorage.setItem(TOKEN_NAME, token);
}

const getRefreshToken = (): string|null => {
    return localStorage.getItem(REFRESH_TOKEN);
}

const setRefreshToken = (token: string): void => {
    localStorage.setItem(REFRESH_TOKEN, token);
}

const getHeaders = (path: string, method: string, isApiGateway?: boolean) => {
    const authorization = getToken() ?  `Bearer ${getToken()}` : '';
    let headersObj = {};

    if (isApiGateway) {
        // const timestamp = (new Date().getTime() - StoreService.getIns().getTimeGap()).toString();

        headersObj = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            // 'x-ncp-apigw-api-key' : this.iam.apiKey,
            // 'x-ncp-iam-access-key' : this.iam.accessKey,
            // 'x-ncp-apigw-timestamp' : timestamp,
            // 'x-ncp-apigw-signature-v2' : ApiUtils.generateSignature(path, method, timestamp),
            authorization,
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
            Expires: 'Sat, 01 Jan 2000 00:00:00 GMT'
        }
    } else {
        headersObj =  {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            authorization,
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
            Expires: 'Sat, 01 Jan 2000 00:00:00 GMT'
        };
    }

    return headersObj;
}

const api = axios.create({
    baseURL: commonUrl,
    withCredentials: false,
    headers: getHeaders("", "")
});


export function get() {
    return async (dispatch: (arg0: { payload: any; type: string; }) => void) => {
        api
        .post(svyItemList, { svyId: svyId })
        .then((response) => {
            dispatch(setResponse(response.data));

            console.log('get', response.data);
        })
        .catch((er) => {
            dispatch(setError());
        });
    };                                    
}

export function post() {
    return async (dispatch: (arg0: { payload: any; type: string; }) => void) => {
        api
        .post(svyItemList, { svyId: svyId })
        .then((response) => {
            dispatch(setResponse(response.data));

            console.log('post', response.data);
        })
        .catch((er) => {
            dispatch(setError());
        });
    };                                    
}


