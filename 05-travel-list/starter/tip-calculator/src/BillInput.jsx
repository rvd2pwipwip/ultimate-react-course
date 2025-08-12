const BillInput = ({ onSetBill, bill }) => {
  const handleBillChange = (e) => {
    onSetBill(Number(e.target.value));
  };

  return (
    <>
      <span>
        <label>How much was the bill?</label>
        <input
          type="number"
          placeholder="Bill value"
          value={bill}
          onChange={handleBillChange}
        ></input>
      </span>
    </>
  );
};

export default BillInput;
