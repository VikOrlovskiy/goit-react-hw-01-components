import PropTypes from 'prop-types';
import FriendsListItem from "./FriendsListItem"

export default function FriendsList ({friends}) {
  return  <ul className="friend-list">
    {friends.map(item =>
    <li className="item" key = {item.id}>
       <FriendsListItem
       isOnline ={item.isOnline}
       avatar ={item.avatar}
       name ={item.name}
       />
       </li>)}
    </ul>
}
FriendsList.propTypes = {
  key: PropTypes.number,
}