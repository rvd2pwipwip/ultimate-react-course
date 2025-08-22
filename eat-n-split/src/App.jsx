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
  const [friends, setFriends] = useState(initialFriends);
  const [showFriendForm, setShowFriendForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setShowFriendForm(false);
  };

  const handleShowFriendForm = () => {
    setShowFriendForm((show) => !show);
  };

  const handleSelectFriend = (friend) => {
    // setSelectedFriend(friend);
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowFriendForm(false);
  };

  const handleSplitBill = (value) => {
    setFriends((friends) =>
      friends.map((f) =>
        f.id === selectedFriend.id ? { ...f, balance: f.balance + value } : f
      )
    );

    setSelectedFriend(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelectFriend={handleSelectFriend}
          selectedFriend={selectedFriend}
        />
        {showFriendForm && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowFriendForm}>
          {showFriendForm ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

const FriendsList = ({ friends, onSelectFriend, selectedFriend }) => {
  return (
    <ul>
      {friends.map((f) => (
        <Friend
          friend={f}
          key={f.id}
          onSelectFriend={onSelectFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};

const Friend = ({ friend, onSelectFriend, selectedFriend }) => {
  const isSelected = friend.id === selectedFriend?.id;
  return (
    <div>
      <li className={isSelected ? "selected" : ""}>
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
        <Button
          onClick={() => {
            onSelectFriend(friend);
          }}
        >
          {isSelected ? "Close" : "Select"}
        </Button>
      </li>
    </div>
  );
};

const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <>
        <label>👥 Friend name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>🌄 Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </>

      <Button>Add</Button>
    </form>
  );
};

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [billValue, setBillValue] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [whosPaying, setWhosPaying] = useState("user");

  const friendExpense = billValue ? billValue - yourExpense : "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!billValue || !yourExpense) return;

    onSplitBill(whosPaying === "user" ? friendExpense : -yourExpense);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={billValue}
        onChange={(e) => setBillValue(Number(e.target.value))}
      />
      <label>🫵 Your Expense</label>
      <input
        type="text"
        value={yourExpense}
        onChange={(e) =>
          setYourExpense(
            Number(e.target.value) > billValue
              ? yourExpense
              : Number(e.target.value)
          )
        }
      />
      <label>🙂 {selectedFriend.name}'s Expense</label>
      <input type="text" disabled value={friendExpense} />
      <label>💰 Who's paying?</label>
      <select
        value={whosPaying}
        onChange={(e) => setWhosPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
};

export default App;
