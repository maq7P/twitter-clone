import { TagsActionsType, FetchTagsType, SetTagsType, SetTagsLoading } from './contracts/actionsCreators';
import {LoadingState, TagsState} from "./contracts/state";

export const setTags = (payload: TagsState['items']): SetTagsType => ({
    type: TagsActionsType.SET_TAGS,
    payload
})
export const fetchTags = (): FetchTagsType => ({
    type: TagsActionsType.FETCH_TAGS,
})
export const setTagsLoading = (payload: LoadingState): SetTagsLoading => ({
    type: TagsActionsType.SET_LOADING,
    payload
})



