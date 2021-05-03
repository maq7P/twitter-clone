import React from 'react'
import { useHistory } from 'react-router';
import { IconButton } from '@material-ui/core';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const ArrowBack = () => {
    let history = useHistory()

    const handleClick = () => {
        history.goBack()
    }
    return (
        <IconButton onClick={handleClick}>
            <ArrowBackIcon color="primary"/>
        </IconButton>
    )
}

export default ArrowBack
