import React from 'react';
import {
  CircularProgress,
  Box,
  Typography,
  ListItem,
  ListItemText,
  List,
  Divider,
  Paper,
} from '@material-ui/core';
import { TagsState } from '../../store/ducks/tags/contracts/state';
import { useTagStyles } from './style';

interface ITags {
  items: {
    _id: string | number;
    name: string;
    count: string | number;
  }[];
  isLoading: boolean;
}
const Tags: React.FC<ITags> = ({ items, isLoading }) => {
  const classes = useTagStyles();
  return (
    <Paper className={classes.root}>
      <Paper className={classes.head} variant="outlined">
        <b>Актуальные темы</b>
      </Paper>
      <List>
        {isLoading ? (
          <div className={classes.circularProgress}>
            <CircularProgress />
          </div>
        ) : (
          items.map((item) => (
            <Box key={item._id}>
              <ListItem className={classes.item}>
                <ListItemText
                  primary={item.name}
                  secondary={
                    <Typography component="span" variant="body2" color="textSecondary">
                      Твитов: {item.count}
                    </Typography>
                  }
                />
              </ListItem>
              <Divider component="li" />
            </Box>
          ))
        )}
      </List>
    </Paper>
  );
};
export default Tags;
