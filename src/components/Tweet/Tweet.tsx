import React from 'react'
import classNames from 'classnames'

// MUI Components
import { Avatar, Grid, IconButton, Paper, Typography } from '@material-ui/core'

// icons
import CommentIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import ReplyIcon from '@material-ui/icons/Reply';
import { homeStyles } from '../../pages/Home/style';

interface Props {
    text: string;
    classes: ReturnType<typeof homeStyles>;
    user: {
        username: string;
        fullname: string;
        avatarUrl: string;
    },
}

const Tweet: React.FC<Props> = ({classes, user, text}: Props): React.ReactElement => {
    return (
        <Paper 
            className={classNames(classes.tweet ,classes.tweetsHeader)}
            variant="outlined">
                <Avatar 
                    className={classes.tweetAvatar}
                    alt={`Аватарка пользователя ${user.fullname}`} 
                    src={user.avatarUrl} 
                />
                <div>
                    <Typography>
                        <b>{user.fullname}</b>&nbsp;
                        <span className={classes.tweetUserName}>@{user.username}</span>&nbsp;
                        <span className={classes.tweetUserName}>·</span>&nbsp;
                        <span className={classes.tweetUserName}>1ч</span>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {text}
                    </Typography>
                    <div className={classes.tweetFooter}>
                        <div>
                            <IconButton >
                                <CommentIcon/>
                            </IconButton>
                            <span>1</span>
                        </div>
                        <div>
                            <IconButton >
                                <RepeatIcon/>
                            </IconButton>
                        </div>
                        <div>
                            <IconButton >
                                <LikeIcon/>
                            </IconButton>
                        </div>
                        <div>
                            <IconButton >
                                <ReplyIcon/>
                            </IconButton>
                        </div>
                    </div>
                </div>
        </Paper>
    )
}

export default Tweet
