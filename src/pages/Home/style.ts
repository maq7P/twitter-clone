import { makeStyles } from "@material-ui/core";
import {grey} from '@material-ui/core/colors';
import {Theme} from "@material-ui/core";

export const homeStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        height: '100vh'
    },
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    sideMenuListItem: {
        '& div': {
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0 25px 0 20px',
            borderRadius: '30px',
            height: '50px',
            marginBottom: '15px',
            transition: 'background-color 0.1s ease-in-out',
            userSelect: 'none'
        },
        '&:hover': {
            '& div':{
                backgroundColor: 'rgba(29,161,242,0.1)',
            },
            '& h6, i':{
                color: theme.palette.primary.main
            },
            '& svg path':{
                fill:  theme.palette.primary.main
            },
        },
        '& i':{
            height: '45px',
            width: '34px',
            fontSize: '34px',
            textAlign: 'center',
        },
        '& svg': {
            width: '32px',
            height: '32px',
            textAlign: 'center',
        },
    },
    logo: {
        margin: '10px 0',
        '& #logo': {
            height: '39px!important',
            width: '39px!important',
        },
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: '20px',
        marginLeft: '15px'
    },
    tweetsWrapper: {
        height: '100%',
        borderRadius: 0,
        borderTop: 0,
        borderBottom: 0
    },
    tweetsHeader: {
        borderRadius: 0,
        borderTop: 0,
        borderRight: 0,
        borderLeft: 0,
        padding: '20px 15px',
        '& h6': {
            fontWeight: 800
        }
    },
    tweet: {
        display: 'flex',
        padding: '20px 20px 15px 20px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgba(245,248,250)',
        }
    },
    tweetUserName: {
        color: grey[500]
    },
    tweetFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: 420,
        position: 'relative',
        left: -10,
        '& svg': {
            fontSize: '20px'
        }
    },
    tweetAvatar: {
        width: theme.spacing(6.5),
        height: theme.spacing(6.5),
        marginRight: 15,
    },
    sideMenuTweetBtn: {
        padding: theme.spacing(3.2),
        marginTop: theme.spacing(3),
    },
    sideMenuTweetBtnEdit: {
        borderRadius: '2px',
    },
    sticky: {
        position: 'sticky',
        top: 0,
        zIndex: 100
    },
    rightSide: {
        paddingTop: 20,
    },
    rightSideBlock: {
        backgroundColor: '#F5F8FA',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
        paddingTop: 0,
        },
    },
    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
        fontSize: 20,
        fontWeight: 800,
        },
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
        fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
        minWidth: 50,
        },
        '& .MuiListItemText-root': {
        margin: 0,
        },
        '&:hover': {
        backgroundColor: '#edf3f6',
        },
    },
    addForm: {
        padding: 20,
    },
    addFormBody: {
        display: 'flex',
        width: '100%',
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addFormBottomActions: {
        marginTop: 10,
        paddingLeft: 70,
    },
    addFormTextarea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#E6ECF0',
    },
    addFormCircleProgress: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
        position: 'absolute',
        },
    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
    },
    circularProgressBlock: {
        marginTop: 40,
        textAlign: 'center',
    }
}))
