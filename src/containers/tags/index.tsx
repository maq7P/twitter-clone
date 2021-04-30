import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Tags from '../../components/Tags/Tags'
import { fetchTags } from '../../store/ducks/tags/actionsCreators';
import { selectIsTagsLoadingState, selectTags } from '../../store/ducks/tags/selectors';

const TagsWidget = () => {
        const dispatch = useDispatch();

        const tags = useSelector(selectTags);
        const isTagsLoading = useSelector(selectIsTagsLoadingState)

        React.useEffect(() => {
            dispatch(fetchTags())
        }, []);

    return (
        <Tags
            items={tags}
            isLoading={isTagsLoading}
        />
    )
}

export default TagsWidget
