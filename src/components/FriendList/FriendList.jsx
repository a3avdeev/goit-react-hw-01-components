import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import {FriendListThumb} from './FriendList.Styled'

export const FriendList = ({ friends }) => {
    return (
        <FriendListThumb>
            {
                friends.map(el => (
                    <FriendListItem
                        key={el.id}
                        avatar={el.avatar}
                        name={el.name}
                        isOnline={el.isOnline} />
                ))
            }
        </FriendListThumb>
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

