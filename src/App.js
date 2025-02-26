import { useState } from "react";
import "./index.css";
import FriendList from "./FriendList";
import AddFriend from "./AddFriend";
import SplitBill from "./SplitBill";

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

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [selected, setSelected] = useState(null);
  const [display, setDisplay] = useState(false);

  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
  }

  function handleSelected(friend) {
    setSelected(friend === selected ? null : friend);
    setDisplay(false);
  }

  function handleFormDisplay() {
    setDisplay(!display);
    setSelected(null);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selected.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selected={selected}
          onSelected={handleSelected}
        />
        <AddFriend
          onAddFriend={handleAddFriend}
          display={display}
          onFormDisplay={handleFormDisplay}
        />
      </div>
      {selected && (
        <SplitBill
          selected={selected}
          onSelected={handleSelected}
          onFormDisplay={handleFormDisplay}
          onSplitBill={handleSplitBill}
          key={selected.id}
        />
      )}
    </div>
  );
}
