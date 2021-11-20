import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <div>
      <ChildAsFC color="red" onClick={() => console.log("Clicked!")}>
        asdf1234
      </ChildAsFC>
      ;
    </div>
  );
};

export default Parent;
