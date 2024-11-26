// src/components/TerrariumBuilder.tsx
import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";

// Type definition for the item
const ITEM_TYPE = "ITEM";

// Draggable Item Component
const DraggableItem = ({ name, id }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ITEM_TYPE,
    item: { name, id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className="bg-green-300 text-white p-4 rounded-lg cursor-move shadow-lg mb-4"
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {name}
    </div>
  );
};

// Drop Target Component (Terrarium container)
const DropTarget = ({ items, setItems }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ITEM_TYPE,
    drop: (item) => {
      // Add the dropped item to the terrarium (drop target)
      setItems((prevItems) => [...prevItems, item]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const backgroundColor = isOver
    ? canDrop
      ? "rgba(34,197,94,0.3)" // Light green when dropping allowed
      : "rgba(248,113,113,0.3)" // Light red when not allowed
    : "rgba(207,250,204,0.4)"; // Light grey when idle

  return (
    <div
      ref={drop}
      className="w-72 h-72 border-2 border-dashed rounded-lg p-4 bg-green-100 flex flex-wrap justify-center items-center"
      style={{
        backgroundColor,
        transition: "background-color 0.3s ease",
      }}
    >
      <p className="text-center text-green-800">
        {isOver
          ? canDrop
            ? "Release to add!"
            : "Can't drop here"
          : "Drop your plants here!"}
      </p>
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-green-300 text-white p-4 rounded-lg m-2 shadow-lg"
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

// TerrariumBuilder Component
const TerrariumBuilder = () => {
  const [items, setItems] = useState([]);

  const draggableItems = [
    { id: 1, name: "Cactus" },
    { id: 2, name: "Fern" },
    { id: 3, name: "Pebbles" },
    { id: 4, name: "Succulent" },
    { id: 5, name: "Moss" },
  ];

  return (
    <div className="flex justify-center items-center p-4 space-x-8">
      <div className="flex flex-wrap space-x-4 space-y-4 w-1/4">
        {draggableItems.map((item) => (
          <DraggableItem key={item.id} id={item.id} name={item.name} />
        ))}
      </div>
      <DropTarget items={items} setItems={setItems} />
    </div>
  );
};

export default TerrariumBuilder;
