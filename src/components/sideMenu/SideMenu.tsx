import React from 'react'
import classNames from 'classnames'

// MUI Components
import { Button, Hidden, Typography, withStyles, createStyles, Theme } from '@material-ui/core';

// Components
import { homeStyles } from '../../pages/Home/style';

import ButtonBase from '@material-ui/core/ButtonBase';

//icons
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import DnsIcon from '@material-ui/icons/Dns';
import PersonIcon from '@material-ui/icons/Person';
import CreateIcon from '@material-ui/icons/Create'
import { AddTweetForm } from '../addTweetForm/AddTweetForm';
import { ModalBlock } from '../modal/Modal';
import { Link } from 'react-router-dom';
import AddTweetFormWidget from '../../containers/AddTweetFormWidget';

interface Props {
    classes: ReturnType<typeof homeStyles>;
}

const CustomsBtn = withStyles((theme: Theme) =>  createStyles({
    root:{
        borderRadius: '50%',
        backgroundColor: theme.palette.primary.main,
        padding: '8px',
        color: '#fff'
    },
}))(ButtonBase)

const SideMenu: React.FC<Props> = ({classes}: Props): React.ReactElement => {
    const [visibleAddTweet, setVisibleAddTweet] = React.useState<boolean>(false)

    const handleClickOpenTweet = () => {
        setVisibleAddTweet(true)
    }
    const handleClickCloseTweet = () => {
        setVisibleAddTweet(false)
    }
    return (
            <ul className={classNames(classes.sideMenuList, classes.sticky)}>
                <Link to="/home">
                    <li className={classes.sideMenuListItem}>
                        <IconButton className={classes.logo} aria-label='delete' color="primary">
                            <TwitterIcon id="logo"/>
                        </IconButton>
                    </li>
                </Link>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <i className="material-icons" color="secondary">#</i>
                        <Hidden mdDown>
                            <Typography className={classes.sideMenuListItemLabel} variant='h6'>Поиск</Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <NotificationsIcon/>
                        <Hidden mdDown>
                            <Typography className={classes.sideMenuListItemLabel} variant='h6'>Уведомления</Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <MarkunreadIcon/>
                        <Hidden mdDown>
                            <Typography className={classes.sideMenuListItemLabel} variant='h6'>Сообщения</Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <BookmarksIcon/>
                        <Hidden mdDown>
                            <Typography className={classes.sideMenuListItemLabel} variant='h6'>Закладки</Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <DnsIcon/>
                        <Hidden mdDown>
                            <Typography className={classes.sideMenuListItemLabel} variant='h6'>Список</Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <div>
                        <PersonIcon/>
                        <Hidden mdDown>
                            <Typography className={classes.sideMenuListItemLabel} variant='h6'>Профиль</Typography>
                        </Hidden>
                    </div>
                </li>
                <li className={classes.sideMenuListItem}>
                    <Hidden mdDown>
                        <Button 
                            onClick={handleClickOpenTweet}
                            style={{width: '230px'}}
                            className={classes.sideMenuTweetBtn}
                            variant='contained' 
                            color='primary'
                        >Твитнуть
                        </Button>
                    </Hidden>
                </li>
                <li className={classes.sideMenuTweetBtn}>
                    <Hidden lgUp>
                        <CustomsBtn 
                            onClick={handleClickOpenTweet}
                            color='primary'
                        ><CreateIcon/></CustomsBtn>
                    </Hidden>
                </li>
                <ModalBlock onClose={handleClickCloseTweet} visible={visibleAddTweet}>
                    <div style={{ width: 550 }}>
                        <AddTweetFormWidget classes={classes} />
                    </div>
                </ModalBlock>
            </ul>
    )
}

export default SideMenu
