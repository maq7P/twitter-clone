import React from 'react';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import { homeStyles } from '../../pages/Home/style';


interface AddTweetFormProps {
  classes: ReturnType<typeof homeStyles>;
  maxRows?: number;
}

const MAX_LENGTH = 280;

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  classes,
  maxRows,
}: AddTweetFormProps): React.ReactElement => {
  const [text, setText] = React.useState<string>('')
  const textLimitPercent = Math.round(text.length / MAX_LENGTH * 100)
  const textCount = MAX_LENGTH - text.length

  const handleChangeTextArea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    if(e.currentTarget){
      setText(e.currentTarget.value)
    }  
  }
  const handleClickAddTweet = (): void => {
    setText('')
  }

  return (
    <div>
      <div className={classes.addFormBody}>
        <Avatar
          className={classes.tweetAvatar}
          alt={`Аватарка пользователя UserAvatar`}
          src="https://sun9-46.userapi.com/impg/2yfsAI6oucz1o0xJiL3naNdp7ZZmWx7wLJbiGg/kxQ87FHuRBk.jpg?size=1280x960&quality=96&proxy=1&sign=a40662d1014bb6c4bc615c56e68ddf75&type=album"
        />
        <TextareaAutosize
          onInput={handleChangeTextArea}
          className={classes.addFormTextarea}
          placeholder="Что происходит?"
          rowsMax={maxRows}
          value={text}
        />
      </div>
      <div className={classes.addFormBottom}>
        <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
          <IconButton color="primary">
            <ImageOutlinedIcon style={{ fontSize: 26 }} />
          </IconButton>
          <IconButton color="primary">
            <EmojiIcon style={{ fontSize: 26 }} />
          </IconButton>
        </div>
        <div className={classes.addFormBottomRight}>
            {text && <>
              <span style={
                    {color: `${text.length > MAX_LENGTH ? 'red' : ''}`}
              }>{textCount}</span>
              <div className={classes.addFormCircleProgress}>
                <CircularProgress
                  variant="determinate"
                  size={20}
                  thickness={6}
                  value={textLimitPercent <= 100 ? textLimitPercent : 100}
                  style={
                    {color: 
                      `${textLimitPercent > 90 && text.length <= MAX_LENGTH
                        ? 'orange' : (text.length >= MAX_LENGTH ? 'red' : '')}`
                      }}
                />
                <CircularProgress
                  style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                  variant="determinate"
                  size={20}
                  thickness={6}
                  value={100}
                />
              </div>
            </>}
          <Button
            onClick={handleClickAddTweet}
            color="primary"
            variant="contained"
            disabled={textLimitPercent > 100}
            >
            Твитнуть
          </Button>
        </div>
      </div>
    </div>
  );
};
