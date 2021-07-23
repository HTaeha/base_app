import { handleAsyncActions, reducerUtils } from "../asyncUtils"
import _ from "lodash"

// Initial State
const initialState:any = {
    list :  reducerUtils.initial(null),
	alarm : 0
}

const alarm = (state = _.cloneDeep(initialState), action:any) => {
    switch (action.type) {
        
        case 'GET_ALARMS':
        case 'GET_ALARMS_ERROR':
        case 'GET_ALARMS_SUCCESS':
            return handleAsyncActions('GET_ALARMS', 'list')(state, action)
        
		case "PLUS_ALARMS":
			return {
				...state, 
				alarm: state.alarm+1
			}

        default: {
            return state
        }
    }
}

export default alarm