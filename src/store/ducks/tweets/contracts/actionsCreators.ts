import {Action} from "redux";
import {LoadingState, Tweet, TweetsState} from "./state";

export enum TweetActionsType {
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  SET_LOADING = 'tweets/LOADING',
  ADD_TWEET = 'tweets/ADD_TWEET',
  FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
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
export interface AddTweetType extends Action<TweetActionsType> {
  type: TweetActionsType.ADD_TWEET,
  payload: Tweet
}
export interface FetchAddTweetType extends Action<TweetActionsType> {
  type: TweetActionsType.FETCH_ADD_TWEET,
  payload: string
}
export type ITweetsActions =
  | SetTweetsType
  | SetTweetsLoading
  | FetchTweetsType