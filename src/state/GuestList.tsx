import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [guests, setGuest] = useState<string[]>([]);

  const onClickbtn = () => {
    setName("");
    setGuest([...guests, name]);
    console.log(guests);
  };

  return (
    <div>
      <h3>Guest List</h3>
      {/* values printed to screen */}
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>

      {/* Input section */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClickbtn}>Add Guest</button>
    </div>
  );
};

export default GuestList;
