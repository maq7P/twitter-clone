import {Action} from "redux";
import {LoadingState, TweetsState} from "./state";

export enum TweetActionsType {
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  SET_LOADING = 'tweets/LOADING'
}
export interface SetTweetsType extends Action<TweetActionsType> {
  type: TweetActionsType.SET_TWEETS,
  payload: TweetsState['items']
}
export interface SetTweetsLoading extends Action<TweetActionsType> {
  type: TweetActionsType.SET_LOADING,
  payload: LoadingState
}
export interface FetchTweetsType extends Action<TweetActionsType> {
  type: TweetActionsType.FETCH_TWEETS,
}
export type ITweetsActions =
  | SetTweetsType
  | SetTweetsLoading
  | FetchTweetsType