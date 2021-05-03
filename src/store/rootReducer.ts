import {combineReducers} from 'redux'
import { tweetReducer } from './ducks/tweets/reducer'
import { tagsReducer } from './ducks/tags/reducer'
import {TweetsState} from "./ducks/tweets/contracts/state";
import { TagsState } from './ducks/tags/contracts/state';
import { selectedTweetReducer } from './ducks/selectedTweet/reducer';
import { SelectedTweetState } from './ducks/selectedTweet/contracts/state';

export const rootReducer = combineReducers({
    tweets: tweetReducer,
    tags: tagsReducer,
    selectedTweet: selectedTweetReducer,
})

export interface RootState {
    tweets: TweetsState
    tags: TagsState
    selectedTweet: SelectedTweetState
}
