import { AddTweet, fetchAddTweet } from './actionsCreators';
// types
import {LoadingState} from "./contracts/state";
import {FetchAddTweetType, TweetActionsType} from './contracts/actionsCreators';

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
export function* FetchAddTweetRequest({payload}: FetchAddTweetType) {
  const tweet = {
    _id: Math.random().toString(32).substr(2),
    text: payload,
    user: {
      username: "brenda",
      fullname: "Vazquez Hale",
      avatarUrl: "https://source.unsplash.com/random/100x100?4"
    }
  }
  try{
    // @ts-ignore
    const item = yield call(APITweets.addTweet, tweet)
    yield put(AddTweet(item))
    yield put(setTweetsLoading(LoadingState.LOADED))
  }catch(e){
    yield put(setTweetsLoading(LoadingState.ERROR))
  }
}

export function* tweetsSaga() {
  yield takeEvery(TweetActionsType.FETCH_TWEETS, fetchTweetsRequest)
   yield takeEvery(TweetActionsType.FETCH_ADD_TWEET, FetchAddTweetRequest)
}