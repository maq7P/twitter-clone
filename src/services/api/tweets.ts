import { instance } from ".";
import {TweetsState} from "../../store/ducks/tweets/contracts/state";

export const APITweets = {
  fetchTweets(): Promise<TweetsState['items']> {
    return instance.get('/tweets').then(({data}) => data)
  }
}