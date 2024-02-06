import {
  ProfileContainer,
  ProfileImage,
  ProfileDescription,
  ProfileText,
  TagText,
  ProfileStats,
  ProfileLabel,
  ProfileSpan,
  ProfileList,
} from './Profile.styles';

const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <ProfileContainer>
      <ProfileDescription>
        <ProfileImage src={avatar} />
        <ProfileText>{username}</ProfileText>
        <TagText>@{tag}</TagText>
        <TagText>{location}</TagText>
      </ProfileDescription>
      <ProfileStats>
        <ProfileList>
          <ProfileLabel>Followers</ProfileLabel>
          <ProfileSpan>{followers}</ProfileSpan>
        </ProfileList>
        <ProfileList $variant="center">
          <ProfileLabel>Views</ProfileLabel>
          <ProfileSpan>{views}</ProfileSpan>
        </ProfileList>
        <ProfileList>
          <ProfileLabel>Likes</ProfileLabel>
          <ProfileSpan>{likes}</ProfileSpan>
        </ProfileList>
      </ProfileStats>
    </ProfileContainer>
  );
};

export default Profile;
