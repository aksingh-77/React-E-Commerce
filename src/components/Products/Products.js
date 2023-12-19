import { useState, useEffect } from "react";
import ListItem from "../ListItems/ListItem";
import axios  from "axios";
import Loader from "../UI/Loader";

const Products = ({onAddItem, onRemoveItem}) => {
    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(true);
    const [presentItems, setPresentItems] = useState([]);

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
                // setLoader(false);
                setItems(transformedData);
            } 
            catch (error) {
                // setLoader(false);
                console.log({error})
            }
            finally{
                setLoader(false);
            }
            
        }
         
        fetchItems();
    },[])

    const handleAddItem = id =>{
        console.log(id);
        if(presentItems.indexOf(id) > -1){
            return;
        }
        setPresentItems([...presentItems, id]);
        onAddItem();
    }

    const handleRemoveItem = id => {
        console.log(id);
        let index = presentItems.indexOf(id)
        if(index > -1){
            let items = [...presentItems];
            items.splice(index , 1)
            setPresentItems([...items]);
            onRemoveItem();
        }
    }

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
    // console.log({loader})

    return (
        <>
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                {/* <ListItem data={items[0]} />
                <ListItem data={items[1]} /> */}
                {
                    items.map(item=>{
                        // console.log(item);
                        return (<ListItem onAdd={handleAddItem} onRemove={handleRemoveItem} key={item.id} data={item} updateItemTitle={updateItemTitle}/>)
                    })
                }
            </div>
        </div>
        {
            
            loader && <Loader />
        }
        </>
    )
}

export default Products;