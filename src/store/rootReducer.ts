import {combineReducers} from 'redux'
import { tweetReducer } from './ducks/tweets/reducer'
import { tagsReducer } from './ducks/tags/reducer'
import {TweetsState} from "./ducks/tweets/contracts/state";
import { TagsState } from './ducks/tags/contracts/state';

export const rootReducer = combineReducers({
    tweets: tweetReducer,
    tags: tagsReducer
})

export interface RootState {
    tweets: TweetsState
    tags: TagsState
}
