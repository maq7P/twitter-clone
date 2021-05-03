import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddTweetForm, AddTweetFormProps } from '../../components/addTweetForm/AddTweetForm';
import { fetchAddTweet } from '../../store/ducks/tweets/actionsCreators';

interface IProps extends Omit<AddTweetFormProps, "onSubmit"> {}
function AddTweetFormWidget(props: IProps): React.ReactElement {
    const dispatch = useDispatch();

    const handleSubmit = React.useCallback(
        (tweetText: string) => {
            dispatch(fetchAddTweet(tweetText))
        },
        []
    )
    return (
        <AddTweetForm {...props} onSubmit={handleSubmit}/>
    )
}

export default AddTweetFormWidget
