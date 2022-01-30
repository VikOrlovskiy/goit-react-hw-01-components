import PropTypes from 'prop-types';

export default function StatisticsListItem ({avatar,name,isOnline}) {
  return <div>
     <span className="status">{isOnline ? "true" : "false"}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
  </div>
       
}

StatisticsListItem.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    isOnline:PropTypes.bool,
}
