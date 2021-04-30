import {Draft, produce} from 'immer'
import {LoadingState, TagsState} from './contracts/state'
import {ITagsActions, TagsActionsType} from "./contracts/actionsCreators";

const initialTagsState: TagsState = {
    items: [],
    LoadingState: LoadingState.NEVER
}

export const tagsReducer = produce((state: Draft<TagsState>, action: ITagsActions) => {
    switch (action.type) {
        case TagsActionsType.SET_LOADING:
            state.LoadingState = action.payload
            break;
        case TagsActionsType.FETCH_TAGS:
            state.LoadingState = LoadingState.LOADING
            break;
        case TagsActionsType.SET_TAGS:
            state.items = []
            state.items = action.payload
            state.LoadingState = LoadingState.LOADED
            break;
        default:
            break;
    }
}, initialTagsState)