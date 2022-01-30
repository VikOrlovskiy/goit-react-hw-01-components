import PropTypes from "prop-types"
import TransactionTableItem from "./TransactionTableItem "
import s from "./TransactionHistory.module.css"
export default function TransactionTable({ items }) {
  return (
    <table className={s.table}>
      <thead className={s.tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map((item) => (
        <tbody key={item.id} className={s.tbody}>
          <TransactionTableItem
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        </tbody>
      ))}
    </table>
  )
}
TransactionTable.propTypes = {
  key: PropTypes.string,
}
