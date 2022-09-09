import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {
                friends.map(el => (
                    <FriendListItem key={el.id} avatar={el.avatar} name = { el.name } isOnline = { el.isOnline } />
                ))
            }
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }))
    
};