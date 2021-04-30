import {createSelector} from "reselect";
import { RootState } from "../../rootReducer";
import {LoadingState, TweetsState} from "./contracts/state";

const selectTweetsState = (state: RootState): TweetsState => state.tweets

export const selectTweets = createSelector(selectTweetsState, tweets => tweets.items)
export const selectLoadingState = (state: RootState) => selectTweetsState(state).LoadingState
export const selectIsTweetsLoadingState = (state: RootState) => selectLoadingState(state) === LoadingState.LOADING