import {Action} from "redux";
import {LoadingState, TagsState} from "./state";

export enum TagsActionsType {
  SET_TAGS = 'tweets/SET_TAGS',
  FETCH_TAGS = 'tweets/FETCH_TAGS',
  SET_LOADING = 'tweets/LOADING'
}
export interface SetTagsType extends Action<TagsActionsType> {
  type: TagsActionsType.SET_TAGS,
  payload: TagsState['items']
}
export interface SetTagsLoading extends Action<TagsActionsType> {
  type: TagsActionsType.SET_LOADING,
  payload: LoadingState
}
export interface FetchTagsType extends Action<TagsActionsType> {
  type: TagsActionsType.FETCH_TAGS,
}
export type ITagsActions =
  | SetTagsType
  | SetTagsLoading
  | FetchTagsType