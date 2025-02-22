import Friend from "./Friend";

export default function FriendList({ friends, selected, onSelected }) {
  return (
    <ul>
      {friends.map((friend, i) => (
        <Friend
          key={friend.id}
          friend={friend}
          selected={selected}
          onSelected={onSelected}
        />
      ))}
    </ul>
  );
}
