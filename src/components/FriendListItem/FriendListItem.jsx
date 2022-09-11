import PropTypes from 'prop-types';
import {FriendListItemThumb} from './FriendListItem.Styled'

export const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
        <FriendListItemThumb>
            <span style={{backgroundColor: isOnline ? 'Green' : 'Red'}}></span>
            <img src={avatar} alt={name} width="48" />
            <p>{name}</p>
        </FriendListItemThumb>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
