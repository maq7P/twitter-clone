import {Draft, produce} from 'immer'
import {LoadingState, TweetsState} from './contracts/state'
import {ITweetsActions, TweetActionsType} from "./contracts/actionsCreators";

const initialTweetsState: TweetsState = {
    items: [],
    LoadingState: LoadingState.NEVER
}

export const tweetReducer = produce((state: Draft<TweetsState>, action: ITweetsActions) => {
    switch (action.type) {
        case TweetActionsType.SET_LOADING:
            state.LoadingState = action.payload
            break;
        case TweetActionsType.FETCH_TWEETS:
            state.LoadingState = LoadingState.LOADING
            break;
        case TweetActionsType.SET_TWEETS:
            state.items = []
            state.items = action.payload
            state.LoadingState = LoadingState.LOADED
            break;
        default:
            break;
    }
}, initialTweetsState)