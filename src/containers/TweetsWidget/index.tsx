import { CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Tweet from '../../components/Tweet/Tweet';
import { fetchTweets } from '../../store/ducks/tweets/actionsCreators';
import { selectIsTweetsLoadingState, selectTweets } from '../../store/ducks/tweets/selectors';

interface ITweetsWidget {
  classes?: any
}
const TweetsWidget: React.FC<ITweetsWidget> = ({
  classes
}) => {
     const dispatch = useDispatch();

        const tweets = useSelector(selectTweets);
        const isTweetsLoading = useSelector(selectIsTweetsLoadingState);

        useEffect(() => {
            dispatch(fetchTweets());
        }, []);
    return (
      <>
        {isTweetsLoading ? (
            <div className={classes.circularProgressBlock}>
              <CircularProgress />
            </div>
          ) : (
            tweets.map((tweet) => (
              <Link to={`home/tweet/${tweet._id}`}>
                <Tweet key={tweet._id} text={tweet.text} classes={classes} user={tweet.user} />
              </Link>
            ))
          )}
          </>
    )
}

export default TweetsWidget
