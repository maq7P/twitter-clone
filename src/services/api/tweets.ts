import { instance } from ".";
import {Tweet, TweetsState} from "../../store/ducks/tweets/contracts/state";

export const APITweets = {
  fetchTweets(): Promise<TweetsState['items']> {
    return instance.get('/tweets').then(({data}) => data)
  },
  fetchTweetById(id: number | string): Promise<TweetsState['items']> {
    return instance.get(`/tweets?_id=${id}`).then(({data}) => data)
  },
  addTweet(payload: Tweet): Promise<Tweet> {
    return instance.post(`/tweets`, payload).then(({data}) => data)
  },
}