import React, { useState, Fragment } from "react";
import "./tittle.component.css";

const Title = () => {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");
    const [edit, setEdit] = useState(-1);
    const [update, setUpdate] = useState("");

    const changehandler = (e) => {
        setItem(e.target.value);
    };

    const Additem = (e) => {
        e.preventDefault();
        if (!item) {
            alert("Enter an item");
            return;
        };
        const items = {
            id: Math.floor(Math.random() * 1000),
            value: item,
        };
        setList((oldlist) => [...oldlist, items]);
        setItem('');
        console.log(list);
    }
    const deleteitem = (id) => {
        const newArray = list.filter(items => (items.id !== id));
        setList(newArray);
    }
    const edititem = (id, newtext) => {
        const currentItem = list.filter(items => (items.id === id));
        const newItem = {
            id: currentItem.id,
            value: newtext,
        };
        // deleteitem(id);
        setList((oldlist) => [...oldlist, newItem]);
        setUpdate("");
        setEdit(-1);
        console.log(newItem);
    };
    const OnPress = (event) => {

        if (event.key === "Enter") {
            Additem();
        }
    }
    return (
        <Fragment>
            <div className="start">
                <h1>Todo App</h1>
                <form>
                    <label >Tittle</label><br />
                    <input type="text" value={item} onChange={changehandler} onKeyPress={OnPress} />
                </form>
                <button className="add" onClick={Additem} type="submit">Add Item</button>



                <ul>
                    {list.map(items => {
                        return (
                            <div>

                                <li className="list" key={items.id} onClick={() => setEdit(items.id)}>{items.value}<button onClick={() => deleteitem(items.id)}>❌</button></li>
                                {edit == items.id ? (
                                    <div>
                                        <input type="text" value={update} onChange={(e) => setUpdate(e.target.value)}></input>
                                        <button onClick={() => edititem(items.id, update)}>update</button>
                                    </div>

                                ) : null}
                            </div>
                        );
                    })}
                </ul>
            </div>
        </Fragment >
    );
}
export default Title;



