import { useEffect, useState} from 'react'

const List = ({ getItems }) => {
  const items = getItems();
  
  const [Myitems, setMyItems] = useState([]);

  useEffect(() => {
    console.log("Buscando meu DB...");

    setMyItems(getItems);
  }, [getItems]);



  return (
    <div>
        {Myitems && 
        Myitems.map((item, index) => (
            <p key={index}>{item}</p>
        ))}
    </div>
  )
}

export default List