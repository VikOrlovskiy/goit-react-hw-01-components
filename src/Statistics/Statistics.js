import PropTypes from 'prop-types';
import StatisticsListItem from "./StatisticsListItem"

export default function Statistics ({stats}) {
  return  <ul className="stat-list">
    {stats.map(item =>
    <li className="item" key = {item.id}>
       <StatisticsListItem
       label ={item.label}
       percentage ={item.percentage}
       /></li>)}
    </ul>
}
Statistics.propTypes = {
  key: PropTypes.number,
}