import { useState } from "react";

export default function SplitBill({ selected, onSelected, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const friendExpense = bill - yourExpense;
  const [whoIsPaying, setWhoIsPaying] = useState("1");

  if (selected === null) return;

  function splitBill(e) {
    e.preventDefault();

    if (
      bill === null ||
      yourExpense === null ||
      bill === "" ||
      yourExpense === ""
    )
      return;

    onSplitBill(whoIsPaying === "1" ? -friendExpense : yourExpense);

    onSelected(null);
    setBill("");
    setYourExpense("");
    setWhoIsPaying("1");
  }

  return (
    <form className="form-split-bill">
      <h2>SPLIT A BILL WITH {selected.name}</h2>
      <p>💰 Bill value</p>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>
      <p>🦹‍♂️ Your expense</p>
      <input
        type="number"
        value={yourExpense}
        onChange={(e) => setYourExpense(Number(e.target.value))}
      ></input>
      <p>👨🏻‍🤝‍👩🏻 {selected.name}'s expense</p>
      <input type="text" value={!bill ? "" : friendExpense} disabled></input>
      <p>🤑 Who is paying the bill</p>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="1">You</option>
        <option value="2">{selected.name}</option>
      </select>
      <button className="button" onClick={splitBill}>
        Split bill
      </button>
    </form>
  );
}
