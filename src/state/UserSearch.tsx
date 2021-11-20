import React, { useState } from "react";

const users = [
  { name: "search", age: 20 },
  { name: "kamal", age: 20 },
  { name: "useff", age: 20 }
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClicksearchbtn = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    console.log(foundUser);
    setUser(foundUser);
  };

  return (
    <div>
      <h3>User Search</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClicksearchbtn}>Submit Search</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
