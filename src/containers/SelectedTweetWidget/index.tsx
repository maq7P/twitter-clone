import { CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Tweet from '../../components/Tweet/Tweet';
import { fetchSelectedTweet, setSelectedTweet } from '../../store/ducks/selectedTweet/actionsCreators';
import { selectIsTweetsLoadingState, selectTweet } from '../../store/ducks/selectedTweet/selectors';
import { fetchTweets } from '../../store/ducks/tweets/actionsCreators';

interface ITweetsWidget {
  classes?: any;
}
const SelectedTweetWidget: React.FC<ITweetsWidget> = ({ classes }) => {
  const dispatch = useDispatch();

  const selectedTweet = useSelector(selectTweet);
  const isTweetsLoading = useSelector(selectIsTweetsLoadingState);

  const params: { id?: string } = useParams();
  useEffect(() => {
    if (params.id) {
      dispatch(fetchSelectedTweet(params.id));
    }
    return () => {
      dispatch(setSelectedTweet([]));
    }
  }, []);
  return (
    <>
      {isTweetsLoading ? (
        <div className={classes.circularProgressBlock}>
          <CircularProgress />
        </div>
      ) : (
        selectedTweet.map((tweet) => 
          <Link to={`home/tweet/${tweet._id}`}>
            <Tweet key={tweet._id} text={tweet.text} classes={classes} user={tweet.user} />
          </Link>
        )
      )}
    </>
  );
};

export default SelectedTweetWidget;
