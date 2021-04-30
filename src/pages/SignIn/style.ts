import { makeStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core';

export const signInStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
        color: '#ffffff',
    },
    infoSide: {
        backgroundColor: '#74CAFE',
        flex:'0 0 50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
    },
    infoSideList: {
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 390,
        '& h6': {
            fontWeight: 700,
            fontSize: 20
        },
        '& li': {
            display: 'flex',
            alignItems: 'center',
            marginBottom: 40
        }
    },
    infoSideIcons: {
        fontSize: 32,
        marginRight: 15,
    },
    infoSideBigIcon: {
        position: 'absolute',
        left: '65%',
        top: '40%',
        transform: 'translate(-50%, -50%)',
        width: '180%',
        height: '180%',
    },
    loginSide: {
        backgroundColor: '#15202B',
        flex:'0 0 50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginSideTwitterIcon: {
        fontSize: 45,
        marginBottom: 20
    },
    loginSideWrapper: {
        width: '380px'
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: '32px',
        marginBottom: 45
    },
    loginSideBtn: {
        display: 'block',
        marginBottom: 15,
        width: '100%'
    },
    loginSideField: {
        marginBottom: 18,
    },
    registerField: {
        marginBottom: theme.spacing(5),
    },
    loginFormControl: {
        marginBottom: theme.spacing(2),
    },

}))