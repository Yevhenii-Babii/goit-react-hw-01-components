import { Text, Wrapper, Image, TextSmall, Descrp, ListStats, ItemLi } from "./Profile.slyled"
import PropTypes from "prop-types";

export default function Profile({avatar,location,tag,username,stats:{followers,views,likes}}) {
    return (
        <>
        <Wrapper className="profile">
  <Descrp className="description">
    <Image
      src={avatar}
      alt={tag}
      className="avatar"
    />
    <Text className="name">{username}</Text>
    <TextSmall className="tag">{tag}</TextSmall>
    <TextSmall className="location">{location}</TextSmall>
  </Descrp>

  <ListStats className="stats">
    <ItemLi>
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </ItemLi>
    <ItemLi>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </ItemLi>
    <ItemLi>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </ItemLi>
  </ListStats>
</Wrapper>
        </>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  };