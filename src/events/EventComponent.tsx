const EventComponent: React.FC = () => {
  const onChange = (event: any) => {
    console.log(event);
  };

  const onDragStart = () => {
    console.log("dragging");
  };

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
