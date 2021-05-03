import {SetSelectedTweetType,SelectedTweetActionsType, FetchSelectedTweetType, SetSelectedTweetLoading } from './contracts/actionsCreators';
import {LoadingState, SelectedTweetState} from "./contracts/state";

export const setSelectedTweet = (payload: SelectedTweetState['item']): SetSelectedTweetType => ({
    type: SelectedTweetActionsType.SET_TWEET,
    payload
})
export const fetchSelectedTweet = (payload: string): FetchSelectedTweetType => ({
    type: SelectedTweetActionsType.FETCH_TWEET,
    payload

})
export const setSelectedTweetLoading = (payload: LoadingState): SetSelectedTweetLoading => ({
    type: SelectedTweetActionsType.SET_LOADING,
    payload
})



