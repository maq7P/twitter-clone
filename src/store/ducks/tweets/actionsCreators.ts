import {AddTweetType, FetchAddTweetType, FetchTweetsType, SetTweetsLoading, SetTweetsType, TweetActionsType } from './contracts/actionsCreators';
import {LoadingState, Tweet, TweetsState} from "./contracts/state";

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
export const AddTweet = (payload: Tweet): AddTweetType => ({
    type: TweetActionsType.ADD_TWEET,
    payload
})
export const fetchAddTweet = (payload: string): FetchAddTweetType => ({
    type: TweetActionsType.FETCH_ADD_TWEET,
    payload
})



