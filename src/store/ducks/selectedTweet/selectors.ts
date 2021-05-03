import {createSelector} from "reselect";
import { RootState } from "../../rootReducer";
import {LoadingState, SelectedTweetState} from "./contracts/state";

const selectTweetsState = (state: RootState): SelectedTweetState => state.selectedTweet

export const selectTweet = (state: RootState) => selectTweetsState(state).item
export const selectLoadingState = (state: RootState) => selectTweetsState(state).LoadingState
export const selectIsTweetsLoadingState = (state: RootState) => selectLoadingState(state) === LoadingState.LOADING