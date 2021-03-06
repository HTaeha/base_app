import {
	createAction,
	ActionType,
	createReducer
} from "typesafe-actions"

// 액션 타입을 선언합니다
// 뒤에 as const 를 붙여줌으로써 나중에 액션 객체를 만들게 action.type 의 값을 추론하는 과정에서
// action.type 이 string 으로 추론되지 않고 'counter/INCREASE' 와 같이 실제 문자열 값으로 추론 되도록 해줍니다.
const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'
const INCREASE_BY = 'counter/INCREASE_BY'

// 액션 생성함수를 선언합니다
export const increase = createAction(INCREASE)()
export const decrease = createAction(DECREASE)()
export const increaseBy = createAction(INCREASE_BY)<number>()

const actions = { increase, decrease, increaseBy }
type CounterAction = ActionType<typeof actions>

// 이 리덕스 모듈에서 관리 할 상태의 타입을 선언합니다
type CounterState = {
  count: number;
};

// 초기상태를 선언합니다.
const initialState: CounterState = {
  count: 0
};

// 리듀서를 만듭니다
// createReducer 는 리듀서를 쉽게 만들 수 있게 해주는 함수입니다.
// Generics로 리듀서에서 관리할 상태, 그리고 리듀서에서 처리 할 모든 액션 객체들의 타입을 넣어야합니다
const counter = createReducer<CounterState, CounterAction>(initialState, {
	[INCREASE]: state => ({ count: state.count + 1 }), // 액션을 참조 할 필요 없으면 파라미터로 state 만 받아와도 됩니다
	[DECREASE]: state => ({ count: state.count - 1 }),
	[INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }) // 액션의 타입을 유추 할 수 있습니다.
  });

export default counter;