import PropTypes from "prop-types"
import FriendsListItem from "./FriendsListItem"
import s from "./FriendList.module.css"
export default function FriendsList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map((item) => (
        <li className={s.friendListItem} key={item.id}>
          <FriendsListItem
            isOnline={item.isOnline}
            avatar={item.avatar}
            name={item.name}
          />
        </li>
      ))}
    </ul>
  )
}
FriendsList.propTypes = {
  key: PropTypes.number,
}
