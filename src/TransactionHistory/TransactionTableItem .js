import PropTypes from 'prop-types';

export default function TransactionTableItem ({type ,amount ,currency }) {
  return <tr>
    <td>{type}</td>
  <td>{amount}</td>
  <td>{currency}</td>
  </tr>

}

TransactionTableItem.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency:PropTypes.string,
}

