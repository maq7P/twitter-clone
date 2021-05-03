import { ISelectedTweetActions, SelectedTweetActionsType } from './contracts/actionsCreators';
import {Draft, produce} from 'immer'
import {LoadingState, SelectedTweetState} from './contracts/state'

const initialTweetState: SelectedTweetState = {
    item: [],
    LoadingState: LoadingState.NEVER
}

export const selectedTweetReducer = produce((state: Draft<SelectedTweetState>, action: ISelectedTweetActions) => {
    switch (action.type) {
        case SelectedTweetActionsType.SET_LOADING:
            state.LoadingState = action.payload
            break;
        case SelectedTweetActionsType.FETCH_TWEET:
            state.LoadingState = LoadingState.LOADING
            break;
        case SelectedTweetActionsType.SET_TWEET:
            state.item = []
            state.item = action.payload
            state.LoadingState = LoadingState.LOADED
            break;
        default:
            break;
    }
}, initialTweetState)