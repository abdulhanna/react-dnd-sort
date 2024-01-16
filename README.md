# React dnd sort

This is sortable drag and drop component . You can customize your draggable item as you want.

## Installation

Install my-project with npm

```bash
  npm install react-dnd-sort
  cd my-project
```

## Usage/Examples

```javascript
import SortableList from "react-dnd-sort";

const [data, setData] = useState([
  {
    id: 1,
    text: "Write a cool JS library",
    title: "this is Library titile",
  },
  {
    id: 2,
    text: "Make it generic enough",
    title: "this is Library titile",
  },
  {
    id: 3,
    text: "Write README",
    title: "this is Library titile",
  },
  {
    id: 4,
    text: "Create some examples",
    title: "this is Library titile",
  },
  {
    id: 5,
    text: "Spam in Twitter and IRC to promote it (note that this element is taller than the others)",
    title: "this is Library titile",
  },
  {
    id: 6,
    text: "???",
    title: "this is Library titile",
  },
  {
    id: 7,
    text: "PROFIT",
    title: "this is Library titile",
  },
]);

const handleMove = (node) => {
  // you can get updated  data after drag drop
};

<SortableList data={data} handleMove={handleMove} />;
```

## Authors

- [@abdulhanna](https://github.com/abdulhanna)

## 🚀 About Me

I'm a full stack developer...

## Demo

Insert gif or link to demo

## Deployment

To deploy this project run

```bash
  npm run deploy
```

## Appendix

```javascript
Any additional information goes here


You can make custom  draggable item  by adding customComponent in SortableList.

  const [data,setData] = useState([
    {
      id: 1,
      text: 'Write a cool JS library',
      title:"this is Library titile"
    },
    {
      id: 2,
      text: 'Make it generic enough',
      title:"this is Library titile"
    },
    {
      id: 3,
      text: 'Write README',
      title:"this is Library titile"
    },
    {
      id: 4,
      text: 'Create some examples',
      title:"this is Library titile"
    }, {
            id: 5,
            text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
            title:"this is Library titile"
          },
          {
            id: 6,
            text: '???',
            title:"this is Library titile"
          },
          {
            id: 7,
            text: 'PROFIT',
            title:"this is Library titile"
          }
  ])

const CustomListItem = (props)=>{
  const {item} = props
    // console.log(props,'props')
  return(<>

    <p className='text-green-500'>{item.text}</p>
    <p className='text-green-600'>{item.title}</p>
  </>)
}

  <SortableList customComponent={CustomListItem} data={data} handleMove={handleMove}/>

```
