const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

const Logo = () => {
  return <h1>🌴 Far Away 💼</h1>;
};

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.quantity.value);
    console.log(e.target.elements.description.value);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select name="quantity">
        {Array.from({ length: 20 }).map((n, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." name="description" />
      <button>Add</button>
    </form>
  );
};

const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((i) => (
          <Item key={i.id} item={i} />
        ))}
      </ul>
    </div>
  );
};
const Stats = () => {
  return (
    <footer className="stats">
      <em>💼 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
};

const Item = ({ item }) => {
  return (
    <li className="item">
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.quantity} {item.description}
      </span>
      <button className="remove-btn">❌</button>
    </li>
  );
};
