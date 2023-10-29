import React, { useEffect, useState } from "react";
import TransactionList from "./TransactionList";
import Search from "./Search";
import TransactionForm from "./TransactionForm";

function Container() {
  const [transaction, setTransaction] = useState([])
  const [query, setQuery] = useState("")
  useEffect(() => {
    fetch("http://localhost:3000/transactions" )
      .then((resp) => resp.json())
      .then(transaction => setTransaction(transaction))
  }, [])
  function handleSearch(e) {
    setQuery(e.target.value)
  }
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <TransactionForm />
      <TransactionList transactions={transaction} />
    </div>
  );
}

export default Container;