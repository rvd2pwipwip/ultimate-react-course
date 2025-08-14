import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const Button = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

function App() {
  const [showFriendForm, setShowFriendForm] = useState(false);
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showFriendForm && <FormAddFriend />}
        <Button
          onClick={() => {
            setShowFriendForm((show) => !show);
          }}
        >
          {showFriendForm ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

const FriendsList = () => {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((f) => (
        <Friend friend={f} key={f.id} />
      ))}
    </ul>
  );
};

const Friend = ({ friend }) => {
  return (
    <div>
      <li>
        <img src={friend.image} alt={friend.name}></img>
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} ${Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you ${friend.balance}
          </p>
        )}
        {!friend.balance && <p>You and {friend.name} are even</p>}
        <Button>Select</Button>
      </li>
    </div>
  );
};

const FormAddFriend = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleClick = () => {};

  return (
    <form className="form-add-friend">
      <>
        <label>👥 Friend name</label>
        <input type="text" onChange={(e) => setName(e.value)} />
        <label>🌄 Image URL</label>
        <input type="text" onChange={(e) => setImage(e.value)} />
      </>

      <Button onClick={handleClick}>Add</Button>
    </form>
  );
};

const FormSplitBill = ({ friend }) => {
  const handleClick = () => {};
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {friend}</h2>
      <label>💰 Bill value</label>
      <input type="text" />
      <label>🫵 Your Expense</label>
      <input type="text" />
      <label>🙂 {friend}'s Expense</label>
      <input type="text" disabled />
      <label>💰 Who's paying?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{friend}</option>
      </select>
      <Button onClick={handleClick}>Split Bill</Button>
    </form>
  );
};

export default App;
