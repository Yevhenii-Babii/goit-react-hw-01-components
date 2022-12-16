import PropTypes from "prop-types";
import { Span,ItemLi,Text } from "./FriendList.styled";


export  function FriendItem({avatar,name,isOnline}) { 
    return (
        <ItemLi className="item">
        <Span isOnline={isOnline}></Span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <Text className="name">{name}</Text>
      </ItemLi>
    )
}


FriendItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
}