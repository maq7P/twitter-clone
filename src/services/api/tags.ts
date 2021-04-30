import { instance } from ".";
import { TagsState } from "../../store/ducks/tags/contracts/state";

export const APITags = {
  fetchTweets(): Promise<TagsState['items']> {
    return instance.get('/tags').then(({data}) => data)
  }
}