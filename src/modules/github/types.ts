import { ActionType } from "typesafe-actions";

import { GithubProfile } from "../../api/github";
import * as actions from "./actions";


export type GithubAction = ActionType<typeof actions>

export type GithubState = {
	userProfile: {
		loading: boolean
		error: Error | null
		data: GithubProfile | null
	}
}