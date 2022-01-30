import PropTypes from "prop-types"
// import TransactionTableItem from './TransactionTableItem '

export default function TransactionTable({ items }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map((item) => (
        <tbody key={item.id}>
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
