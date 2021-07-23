export type reducerUtilsType = {
	initial: (initialData:any) => reducerStates,
	loading: (prevState:any) => reducerStates,
	success: (payload:any) => reducerStates,
	error: (error:string) => reducerStates,
}
type reducerStates = {
	loading: boolean,
	data: any,
	error: string | null,
	reRender: boolean,
}

export type payloadType = {
	data?: number,
	valid?: boolean,
	status?: number,
}