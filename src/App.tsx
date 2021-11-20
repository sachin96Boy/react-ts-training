import "./styles.css";

import GuestList from "./state/GuestList";
// import UserSearch from "./state/UserSearch";
import UserSearch from "./refs/UserSearch";
import EventComponent from "./events/EventComponent";

export default function App() {
  return (
    <div className="App">
      <GuestList />
      <br />
      <br />
      <UserSearch />
      <br />
      <br />
      <EventComponent />
    </div>
  );
}
