import PropTypes from 'prop-types';

export default function StatisticsListItem ({label,percentage}) {
  return  <div>
    <span className="label">{label}</span>
    <span className="percentage">{percentage}%</span>
  </div>
}

StatisticsListItem.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number,

}