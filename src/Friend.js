export default function Friend({ friend, selected, onSelected }) {
  return (
    <li className={selected === friend ? "selected" : null}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p
        className={
          friend.balance < 0 ? "green" : friend.balance > 0 ? "red" : null
        }
      >
        {friend.balance < 0
          ? `${friend.name} owes you ${Math.abs(friend.balance)}€`
          : friend.balance > 0
          ? `You owe ${friend.name} ${Math.abs(friend.balance)}€`
          : `You and ${friend.name} are even`}
      </p>
      <button className="button" onClick={() => onSelected(friend)}>
        {selected === friend ? "Close" : "Select"}
      </button>
    </li>
  );
}
