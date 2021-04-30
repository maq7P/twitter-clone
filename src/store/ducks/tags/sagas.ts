// types
import {LoadingState} from "./contracts/state";
import {call, put, takeEvery} from 'redux-saga/effects'
import {APITags} from "../../../services/api/tags";
import { setTags, setTagsLoading } from "./actionsCreators";
import { TagsActionsType } from "./contracts/actionsCreators";


export function* fetchTweetsRequest() {
  try{
    // @ts-ignore
    const items = yield call(APITags.fetchTweets)
    yield put(setTags(items))
    yield put(setTagsLoading(LoadingState.LOADED))
  }catch(e){
    yield put(setTagsLoading(LoadingState.ERROR))
  }
}

export function* tagsSaga() {
  yield takeEvery(TagsActionsType.FETCH_TAGS, fetchTweetsRequest)
}