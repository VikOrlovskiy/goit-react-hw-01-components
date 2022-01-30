import PropTypes from "prop-types"
import StatisticsListItem from "./StatisticsListItem"
import s from "./Statistics.module.css"
export default function Statistics({ stats }) {
  return (
    <ul className={s.statList}>
      {stats.map((item) => (
        <li className={s.statListItem} key={item.id}>
          <StatisticsListItem label={item.label} percentage={item.percentage} />
        </li>
      ))}
    </ul>
  )
}
Statistics.propTypes = {
  key: PropTypes.number,
}
