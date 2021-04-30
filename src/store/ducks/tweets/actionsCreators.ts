import {FetchTweetsType, SetTweetsLoading, SetTweetsType, TweetActionsType } from './contracts/actionsCreators';
import {LoadingState, TweetsState} from "./contracts/state";

export const setTweets = (payload: TweetsState['items']): SetTweetsType => ({
    type: TweetActionsType.SET_TWEETS,
    payload
})
export const fetchTweets = (): FetchTweetsType => ({
    type: TweetActionsType.FETCH_TWEETS,
})
export const setTweetsLoading = (payload: LoadingState): SetTweetsLoading => ({
    type: TweetActionsType.SET_LOADING,
    payload
})



