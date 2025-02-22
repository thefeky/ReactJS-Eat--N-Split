import { useState } from "react";

export default function AddFriend({ onAddFriend, display, onFormDisplay }) {
  const [newName, setNewName] = useState("");
  const [newImage, setNewImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!newName || !newImage) return;

    const newFriend = {
      name: newName,
      image: newImage,
      balance: 0,
      id: crypto.randomUUID(),
    };

    onAddFriend(newFriend);

    setNewName("");
    setNewImage("");
    onFormDisplay(false);
  }

  return (
    <>
      {display === true ? (
        <>
          <form className="form-add-friend">
            <p>👨🏻‍🤝‍👩🏻 Friend name</p>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            ></input>
            <p>🖼️ Image URL</p>
            <input
              type="text"
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
            ></input>
            <button className="button" onClick={handleSubmit}>
              Add
            </button>
          </form>
          <button className="button" onClick={onFormDisplay}>
            Close
          </button>
        </>
      ) : (
        <button className="button" onClick={onFormDisplay}>
          Add friend
        </button>
      )}
    </>
  );
}
