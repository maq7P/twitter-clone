import { FetchSelectedTweetType, SelectedTweetActionsType } from './contracts/actionsCreators';
// types
import {LoadingState} from "./contracts/state";

import {call, put, takeEvery} from 'redux-saga/effects'
import {setSelectedTweet, setSelectedTweetLoading} from "./actionsCreators";
import {APITweets} from "../../../services/api/tweets";


export function* fetchSelectedTweetRequest({payload: tweetId}: FetchSelectedTweetType) {
  try{
    // @ts-ignore
    const items = yield call(APITweets.fetchTweetById, tweetId)
    yield put(setSelectedTweet(items))
    yield put(setSelectedTweetLoading(LoadingState.LOADED))
  }catch(e){
    yield put(setSelectedTweetLoading(LoadingState.ERROR))
  }
}

export function* selectedTweetSaga() {
  yield takeEvery(SelectedTweetActionsType.FETCH_TWEET, fetchSelectedTweetRequest)
}