import PropTypes from "prop-types";
import {FriendItem} from './FriendItem';
import { List } from "./FriendList.styled";

export  function FriendList({friends}) {
    return (

<List className="friend-list">
    {friends.map(friend => (
    <FriendItem 
    key={friend.id}
    avatar = {friend.avatar}
    name = {friend.name}
    isOnline = {friend.isOnline}
    />
  ))}
  
</List>
    );
};

FriendList.prototype = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired
        }).isRequired
    )
};