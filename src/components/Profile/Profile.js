import PropTypes from "prop-types"
import s from "./Profile.module.css"

const UserProfile = ({ username, tag, location, avatar, stats }) => {
  console.log(stats)
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={username} className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.statsList}>
        <li className={s.statsListItem}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.statsListItem}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li className={s.statsListItem}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  )
}

export default UserProfile

UserProfile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    likes: PropTypes.number,
    views: PropTypes.number,
    followers: PropTypes.number,
  }).isRequired,
}
