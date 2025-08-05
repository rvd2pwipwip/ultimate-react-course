import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((i) => i.id !== id));
  };

  const handleTogglePacked = (id) => {
    setItems((items) =>
      items.map((i) => (i.id === id ? { ...i, packed: !i.packed } : i))
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onTogglePacked={handleTogglePacked}
      />
      <Stats items={items} />
    </div>
  );
}

const Logo = () => {
  return <h1>🌴 Far Away 💼</h1>;
};

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) {
      alert("Please enter a description");
      return;
    }
    // create a new item
    const newItem = { description, quantity, packed: false, id: Date.now() };
    // add the new item to the items array
    onAddItems(newItem);
    // reset the form
    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }).map((n, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

const PackingList = ({ items, onDeleteItem, onTogglePacked }) => {
  return (
    <div className="list">
      <ul>
        {items.map((i) => (
          <Item
            key={i.id}
            item={i}
            onDeleteItem={onDeleteItem}
            onTogglePacked={onTogglePacked}
          />
        ))}
      </ul>
    </div>
  );
};

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

const Item = ({ item, onDeleteItem, onTogglePacked }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onTogglePacked(item.id)}
      />
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.quantity} {item.description}
      </span>
      <button className="remove-btn" onClick={() => onDeleteItem(item.id)}>
        ❌
      </button>
    </li>
  );
};
