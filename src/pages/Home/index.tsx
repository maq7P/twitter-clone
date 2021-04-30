import React, { useEffect } from 'react';
import classNames from 'classnames';
import {
  Grid,
  Paper,
  List,
  ListItem,
  Container,
  withStyles,
  createStyles,
  InputBase,
  InputAdornment,
  Avatar,
  Hidden,
  Divider,
  ListItemText,
  Button,
  ListItemAvatar,
  CircularProgress,
  Box,
} from '@material-ui/core';
import { homeStyles } from './style';
import SearchIcon from '@material-ui/icons/Search';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import { Typography } from '@material-ui/core';
import Tweet from '../../components/Tweet/Tweet';
import SideMenu from '../../components/sideMenu/SideMenu';
import { SearchTextField } from '../../components/searchForm/SearchForm';
import { AddTweetForm } from '../../components/addTweetForm/AddTweetForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../../store/ducks/tweets/actionsCreators';
import { selectTweets, selectIsTweetsLoadingState } from '../../store/ducks/tweets/selectors';
import { selectIsTagsLoadingState, selectTags } from '../../store/ducks/tags/selectors';
import { fetchTags } from '../../store/ducks/tags/actionsCreators';
import TagsWidget from '../../containers/tags';

export const Home: React.FC = () => {
  const classes = homeStyles();
  const dispatch = useDispatch();

  const tweets = useSelector(selectTweets);
  const isTweetsLoading = useSelector(selectIsTweetsLoadingState)

  const tags = useSelector(selectTags);
  const isTagsLoading = useSelector(selectIsTagsLoadingState)

  useEffect(() => {
    dispatch(fetchTweets())
    dispatch(fetchTags())
  }, []);
  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item lg={3} md={2} sm={2} xs={2}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item lg={6} md={7} sm={10} xs={10}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classNames(classes.tweetsHeader, classes.sticky)} variant="outlined">
              <Typography variant="h6">Главная</Typography>
            </Paper>
            <Paper>
              <div className={classes.addForm}>
                <AddTweetForm classes={classes} />
              </div>
              <div className={classes.addFormBottomLine} />
            </Paper>
            {isTweetsLoading ? (
              <div className={classes.circularProgressBlock}>
                <CircularProgress />
              </div>
            ) : (
              tweets.map((tweet) => (
                <Tweet key={tweet._id} text={tweet.text} classes={classes} user={tweet.user} />
              ))
            )}
          </Paper>
        </Grid>
        <Grid item lg={3} md={3}>
          <Hidden smDown>
            <div className={classNames(classes.rightSide, classes.sticky)}>
              <SearchTextField
                variant="outlined"
                placeholder="Поиск по Твиттеру"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
              <TagsWidget/>
              <Paper className={classes.rightSideBlock}>
                <Paper className={classes.rightSideBlockHeader} variant="outlined">
                  <b>Кого читать</b>
                </Paper>
                <List>
                  <ListItem className={classes.rightSideBlockItem}>
                    <ListItemAvatar>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Dock Of Shame"
                      secondary={
                        <Typography component="span" variant="body2" color="textSecondary">
                          @FavDockOfShame
                        </Typography>
                      }
                    />
                    <Button color="primary">
                      <PersonAddIcon />
                    </Button>
                  </ListItem>
                  <Divider component="li" />
                </List>
              </Paper>
            </div>
          </Hidden>
        </Grid>
      </Grid>
    </Container>
  );
};
