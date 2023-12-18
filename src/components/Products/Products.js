import { useState, useEffect } from "react";
import ListItem from "../ListItems/ListItem";
import axios  from "axios";

const Products = ({data}) => {
    const [items, setItems] = useState([])

    useEffect(()=>{
    //    const result =  fetch("https://react-ecomm-2023-default-rtdb.firebaseio.com/items.json")
    //                     .then(response => response.json())
    //                     .then(data => {
    //                         console.log(data)
    //                     })
    //                     .catch(error => {
    //                         console.log(error)
    //                     })

    /**Used Axios method to fetch data from the api ie database created on firebase with json object */
    /**Used Async Await method to fetch the data from the api */

        async function fetchItems(){
            try {
                const response = await axios.get("https://react-ecomm-2023-default-rtdb.firebaseio.com/items.json");
                const data = response.data;
                const transformedData = data.map((item, index) => {
                    return {
                        ...item,
                        id: index
                    }
                });
                console.log({transformedData});
                setItems(transformedData);
            } 
            catch (error) {
                console.log({error})
            }
            
        }
         
        fetchItems();
    },[])

    const updateItemTitle = async(itemId) => {
        console.log("Item with Id", itemId);
        try {
            let title = `Updated Title #item ${itemId}`
            await axios.patch(`https://react-ecomm-2023-default-rtdb.firebaseio.com/items/${itemId}.json`,{
            title:title
            })

            let data = [...items];
            let index = data.findIndex(e => e.id === itemId);
            data[index]['title'] = title;
            setItems(data);
            
        } catch (error) {
            console.log({error})
        }
        

    }

    return (
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                {/* <ListItem data={items[0]} />
                <ListItem data={items[1]} /> */}
                {
                    items.map(item=>{
                        // console.log(item);
                        return (<ListItem key={item.id} data={item} updateItemTitle={updateItemTitle}/>)
                    })
                }
            </div>
        </div>
    )
}

export default Products;