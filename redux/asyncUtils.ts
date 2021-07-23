// Reference : https://react.vlpt.us/redux-middleware/05-redux-thunk-with-promise.html

import { payloadType, reducerUtilsType } from "./types"

// Promise에 기반한 Thunk를 만들어주는 함수입니다.
export const createPromiseThunk = (type:string, promiseCreator:any) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]

    // 이 함수는 promiseCreator가 단 하나의 파라미터만 받는다는 전제하에 작성되었습니다.
    // 만약 여러 종류의 파라미터를 전달해야하는 상황에서는 객체 타입의 파라미터를 받아오도록 하면 됩니다.
    // 예: writeComment({ postId: 1, text: '댓글 내용' })
    return (param:any, prevState:any) => async dispatch => {
        // 요청 시작
        dispatch({ type, prevState })
        try {
            // 결과물의 이름을 payload 라는 이름으로 통일시킵니다.
            const payload = await promiseCreator(param)
            if(!payload.valid) {
                throw Error(`${payload.status} api call error`);
            }
            dispatch({ type: SUCCESS, payload }) // 성공
        } catch (e) {
            dispatch({ type: ERROR, payload: e, error: true }) // 실패
        }
    }
}

// Promise에 기반한 Thunk를 만들어주는 함수입니다.
export const createPromiseThunks = (type:string, promiseCreator:any) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]

    // 이 함수는 promiseCreator가 단 하나의 파라미터만 받는다는 전제하에 작성되었습니다.
    // 만약 여러 종류의 파라미터를 전달해야하는 상황에서는 객체 타입의 파라미터를 받아오도록 하면 됩니다.
    // 예: writeComment({ postId: 1, text: '댓글 내용' })
    return (params:[], prevState:any) => async dispatch => {
        // 요청 시작
        dispatch({ type, prevState })
        try {
            let payload = {data: []}
            // 결과물의 이름을 payload 라는 이름으로 통일시킵니다.
            for (let i=0;i<params.length;i++){
                const tempPayload:payloadType = await promiseCreator(params[i])
                if(!tempPayload.valid) {
                    throw Error(`${tempPayload.status} api call error`)
                }
                payload.data.push(tempPayload.data)
            }
            dispatch({ type: SUCCESS, payload }) // 성공
        } catch (e) {
            dispatch({ type: ERROR, payload: e, error: true }) // 실패
        }
    }
}

// 리듀서에서 사용 할 수 있는 여러 유틸 함수들입니다.
export const reducerUtils:reducerUtilsType = {
    // 초기 상태. 초기 data 값은 기본적으로 null 이지만
    // 바꿀 수도 있습니다.
    initial: (initialData = null) => ({
        loading: false,
        data: initialData,
        error: null,
        reRender: false
    }),
    // 로딩중 상태. prevState의 경우엔 기본값은 null 이지만
    // 따로 값을 지정하면 null 로 바꾸지 않고 다른 값을 유지시킬 수 있습니다.
    loading: (prevState:any = null) => {
        return ({
        loading: true,
        data: prevState,
        error: null,
        reRender: false
    })},
    // 성공 상태
    success: (payload:any) => ({
        loading: false,
        data: payload.data,
        error: null,
        reRender: false
    }),
    // 실패 상태
    error: (error:string) => ({
        loading: false,
        data: null,
        error: error,
        reRender: false
    })
}

// 비동기 관련 액션들을 처리하는 리듀서를 만들어줍니다.
// type 은 액션의 타입, key 는 상태의 key (예: posts, post) 입니다.
export const handleAsyncActions = (type:string, key:string) => {
    const [SUCCESS, ERROR, RERENDER, CLEAR] = [`${type}_SUCCESS`, `${type}_ERROR`, `${type}_RERENDER`, `${type}_CLEAR`]
    return (state:any, action:any) => {
        switch (action.type) {
            case type:
                let loadData
                if(action.prevState !== undefined){
                    loadData = action.prevState
                }else {
                    loadData = state[key].data
                }
                return {
                    ...state,
                    [key]: reducerUtils.loading(loadData)
                }
            case SUCCESS:
                return {
                    ...state,
                    [key]: reducerUtils.success(action.payload)
                }
            case ERROR:
                return {
                    ...state,
                    [key]: reducerUtils.error(action.payload)
                }
            case RERENDER:
                console.log('RERENDER called')
                let newData = state[key]
                newData.reRender = !newData.reRender
                return {
                    ...state,
                    [key]: newData
                }
            case CLEAR:
                return {
                    ...state,
                    [key]: reducerUtils.initial(null)
                }
            default:
                return state
        }
    }
}