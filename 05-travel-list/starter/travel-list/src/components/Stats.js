const Stats = ({ items }) => {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((i) => i.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You got everything! Ready to go ✈️</em>
      ) : (
        <em>
          💼 You have {numItems > 0 ? numItems : "no"} item
          {numItems === 1 ? "" : "s"} on your list, and you{" "}
          {numPacked ? "already" : "haven't"} packed{" "}
          {numPacked ? numPacked : "any"} ({numItems ? percentage : 0}%)
        </em>
      )}
    </footer>
  );
};

export default Stats;
