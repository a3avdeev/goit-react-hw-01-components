import PropTypes from 'prop-types';
import { ProfileCard, ProfileDescription, StatsWrapper } from './Profile.Styled';

export const Profile = ({ username, tag, location, avatar, stats}) => {
    return (
        <ProfileCard>
            <ProfileDescription>
                <img
                    src={avatar}
                    alt={username}
                />
                <p><b>{username}</b></p>
                <p>@{tag}</p>
                <p>{location}</p>
            </ProfileDescription>

            <StatsWrapper>
                <li>
                    <span>Followers </span>
                    <span>{stats.followers}</span>
                </li>
                <li>
                    <span>Views </span>
                    <span>{stats.views}</span>
                </li>
                <li>
                    <span>Likes </span>
                    <span>{stats.likes}</span>
                </li>
            </StatsWrapper>
        </ProfileCard>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
};