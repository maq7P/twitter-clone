// types
import {LoadingState} from "./contracts/state";
import {TweetActionsType} from './contracts/actionsCreators';

import {call, put, takeEvery} from 'redux-saga/effects'
import {setTweets, setTweetsLoading} from "./actionsCreators";
import {APITweets} from "../../../services/api/tweets";


export function* fetchTweetsRequest() {
  try{
    // @ts-ignore
    const items = yield call(APITweets.fetchTweets)
    yield put(setTweets(items))
    yield put(setTweetsLoading(LoadingState.LOADED))
  }catch(e){
    yield put(setTweetsLoading(LoadingState.ERROR))
  }
}

export function* tweetsSaga() {
  yield takeEvery(TweetActionsType.FETCH_TWEETS, fetchTweetsRequest)
}