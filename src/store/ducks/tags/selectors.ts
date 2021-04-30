import {createSelector} from "reselect";
import { RootState } from "../../rootReducer";
import {LoadingState, TagsState} from "./contracts/state";

const selectTweetsState = (state: RootState): TagsState => state.tags

export const selectTags = createSelector(selectTweetsState, tags => tags.items)
export const selectLoadingState = (state: RootState) => selectTweetsState(state).LoadingState
export const selectIsTagsLoadingState = (state: RootState) => selectLoadingState(state) === LoadingState.LOADING