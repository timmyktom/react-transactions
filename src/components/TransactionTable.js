import React, { useState } from "react";

function TransactionTable({txns, filterDate, onFilterClick, onSortByAmountClick}) {
  const [newFilterDate, setNewFilterDate] = useState(filterDate);

  function onFilterChange(event) {
    setNewFilterDate(event.target.value);
  }

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <label className="mr-10">Transaction Date</label>
        <input id="date" type="date" value={newFilterDate} onChange={onFilterChange} />
        <button className="small" onClick={() => onFilterClick(newFilterDate)}>Filter</button>
      </section>

      <div className="card mt-50">
          <table className="table">
              <thead>
              <tr className="table">
                  <th className="table-header">Date</th>
                  <th className="table-header">Description</th>
                  <th className="table-header">Type</th>
                  <th className="table-header amount-column">
                      <span id="amount" onClick={onSortByAmountClick}>Amount ($)</span>
                  </th>
                  <th className="table-header">Available Balance</th>
              </tr>
              </thead>
              <tbody>
              {txns.map((transaction, index) => (
                <tr key={`${transaction.date}${index}`}>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.type === 1 ? "Debit" : "Credit"}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.balance}</td>
                </tr>
              ))}
              </tbody>
          </table>
      </div>
    </div>
  );
}

export default TransactionTable;
