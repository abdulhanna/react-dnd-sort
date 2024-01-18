
import React, { useState,useCallback, useRef } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import draggableItemClass from "./draggableItem.css"
import ListComponent from "./list.jsx"

const ItemType = 'ITEM';


const DraggableItem = ({ id, index, item, moveItem, children }) => {
  const ref = useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: ItemType,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(draggedItem,monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = draggedItem.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine the rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveItem(dragIndex, hoverIndex);
      draggedItem.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.5 : 1;
  const boxShadow = isDragging ? "0 4px 8px rgba(0, 0, 0, 0.3)" : "none";
  
  drag(drop(ref));
  
  return (
    <div ref={ref} style={{padding: '8px', marginBottom: '4px',  backgroundColor: "white",opacity,boxShadow}} data-handler-id={handlerId}>
      {React.cloneElement(children, { draggable: false })} {/* Disable dragging on the child component */}
    </div>
  );
};



  //Component for Sorting Item 
  const SortableList = ({ handleMove = () => {},customComponent: CustomComponent = ListComponent ,data}) => {
    // console.log(CustomComponent,'dd')
    const [cards, setCards] = useState([
      // ... your card data
    ]);
  
    const [items,setItems] = useState(data||[])
   
  
  
    const moveItem = (fromIndex, toIndex) => {
      const newItems = [...items];
      const [movedItem] = newItems.splice(fromIndex, 1);
      newItems.splice(toIndex, 0, movedItem);
      setItems(newItems);
      handleMove(newItems)
      // console.log(newItems)
    };
  
    return (
      <div>
        <DndProvider backend={HTML5Backend}>
          {items.map((item, index) => (
            <DraggableItem key={item.id} id={item.id} index={index} item={item} moveItem={moveItem}>
              <CustomComponent item={item} />
            </DraggableItem>
          ))}
        </DndProvider>
      </div>
    );
  };

  export default SortableList