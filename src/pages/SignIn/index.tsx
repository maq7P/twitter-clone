import React from 'react';
import {Typography, Button} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import {ModalBlock} from "../../components/modal/Modal";
import { signInStyles } from './style';

export const SignIn: React.FC = () => {
    const classes = signInStyles()

    const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp' | null>();

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn');
    };

    const handleClickOpenSignUp = (): void => {
        setVisibleModal('signUp');
    };

    const handleCloseModal = (): void => {
        setVisibleModal(null);
    };

    return (
        <div className={classes.wrapper}>
            <section className={classes.infoSide}>
                <TwitterIcon className={classes.infoSideBigIcon} color="primary"/>
                <ul className={classes.infoSideList}>
                    <li>
                        <SearchIcon className={classes.infoSideIcons} />
                        <Typography variant="h6">Follow your interests.</Typography>
                    </li>
                    <li>
                        <PeopleOutlineIcon className={classes.infoSideIcons}/>
                        <Typography variant="h6">Hear what people are talking about.</Typography>
                    </li>
                    <li>
                        <ChatBubbleOutlineIcon className={classes.infoSideIcons} />
                        <Typography variant="h6">Join the conversation.</Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon className={classes.loginSideTwitterIcon}/>
                    <Typography variant="h4" className={classes.loginSideTitle}>See what’s happening in the world right now</Typography>
                    <Typography><b color="#fff">Join Twitter today.</b></Typography>
                    <br/>

                    <Button
                        onClick={handleClickOpenSignIn}
                        className={classes.loginSideBtn} variant="contained" color="primary">Sign up</Button>
                    <Button
                        onClick={handleClickOpenSignUp}
                        className={classes.loginSideBtn} variant="outlined" color="primary">Log in</Button>

                    <ModalBlock
                        visible={visibleModal === 'signIn'}
                        onClose={handleCloseModal}
                        classes={classes}
                        title="Войти в аккаунт">
                        <FormControl className={classes.loginSideWrapper} component="fieldset" fullWidth>
                            <FormGroup aria-label="position" row>
                                <TextField
                                    className={classes.registerField}
                                    autoFocus
                                    id="email"
                                    label="E-Mail"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="email"
                                    fullWidth
                                />
                                <TextField
                                    className={classes.registerField}
                                    autoFocus
                                    id="password"
                                    label="Пароль"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="password"
                                    fullWidth
                                />
                                <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth>
                                    Войти
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </ModalBlock>
                    <ModalBlock
                        visible={visibleModal === 'signUp'}
                        onClose={handleCloseModal}
                        classes={classes}
                        title="Создайте учетную запись">
                        <FormControl className={classes.loginSideWrapper} component="fieldset" fullWidth>
                            <FormGroup aria-label="position" row>
                                <TextField
                                    className={classes.registerField}
                                    autoFocus
                                    id="name"
                                    label="Имя"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="name"
                                    fullWidth
                                />
                                <TextField
                                    className={classes.registerField}
                                    autoFocus
                                    id="email"
                                    label="E-Mail"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="email"
                                    fullWidth
                                />
                                <TextField
                                    className={classes.registerField}
                                    autoFocus
                                    id="password"
                                    label="Пароль"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    type="password"
                                    fullWidth
                                />
                                <Button variant="contained" color="primary" fullWidth>
                                    Далее
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </ModalBlock>
                </div>
            </section>
        </div>
    )
}