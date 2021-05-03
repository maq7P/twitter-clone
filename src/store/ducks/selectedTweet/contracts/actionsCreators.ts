import {Action} from "redux";
import {LoadingState, SelectedTweetState} from "./state";

export enum SelectedTweetActionsType {
  SET_TWEET = 'selectedTweet/SET_TWEET',
  FETCH_TWEET = 'selectedTweet/FETCH_TWEET',
  SET_LOADING = 'selectedTweet/LOADING'
}
export interface SetSelectedTweetType extends Action<SelectedTweetActionsType> {
  type: SelectedTweetActionsType.SET_TWEET,
  payload: SelectedTweetState['item']
}
export interface SetSelectedTweetLoading extends Action<SelectedTweetActionsType> {
  type: SelectedTweetActionsType.SET_LOADING,
  payload: LoadingState
}
export interface FetchSelectedTweetType extends Action<SelectedTweetActionsType> {
  type: SelectedTweetActionsType.FETCH_TWEET,
  payload: string
}
export type ISelectedTweetActions =
  | SetSelectedTweetType
  | SetSelectedTweetLoading
  | FetchSelectedTweetType