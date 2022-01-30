import PropTypes from "prop-types"
import s from "./Statistics.module.css"
console.log(s.statistics)
const Section = ({ title, children }) => {
  return (
    <section className={s.section}>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </section>
  )
}

export default Section

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}
