import axios, { Axios } from 'axios';
import React, { useEffect, useRef, useState } from 'react'

const Api = () => {

    let [data, setData] = useState([]);
    let [view, setview] = useState([]);

    let name = useRef();
    let age = useRef();


    //get data
    const apidata = () => {
        axios.get("http://localhost:5005/post").then((res) => {
            // console.log(res);
            setData(res.data);
        });
    };

    //post data
    const handleSubmit = () => {
        let person = {
            name: name.current.value,
            age: age.current.value
        }
        console.log(person);
        axios.post("http://localhost:5005/post", person).then((response) => {
            console.log(response.data);
            name.current.value = "";
            age.current.value = "";
            setData([...data, response.data]);
        })
    }


    //delete data
    const deleteData = (id) => {
        console.log(id);
        axios.delete(`http://localhost:5005/post/${id}`).then((result) => {
            console.log(result);
            setData(data.filter((val) => val.id !== id));
        })


    }

    // updata data
    const viewAll = (index) => {
        console.log(index);
        let show = data[index]
        setview(show)
    }

    const viewupdata = (e) => {
        setview({ ...view, [e.target.name]: e.target.value });
        console.log(view, "viewwwww");

    }

    let updata = () => {
        axios.put(`http://localhost:5005/post/${view.id}`, view).then((resultdata) => {
            console.log(resultdata.data, "upview");

            setData(data.map((value, index) => {
                if (value.id == resultdata.data.id) {
                    return resultdata.data;
                } else {
                    return value;
                }
            }))
        })
    }

    useEffect(() => {
        apidata();
    }, []);
    return (
        <>
            <input type="text" name="name" ref={name} placeholder='enter name' />
            <input type="number" name="age" ref={age} placeholder='enter age' />
            <button onClick={handleSubmit}>Add</button>
            <br />

            <label>updata</label>
            <input type="text" name="name" value={view.name} onChange={viewupdata} placeholder='enter name' />
            <input type="number" name="age" value={view.age} onChange={viewupdata} placeholder='enter age' />
            <button onClick={updata}>add</button>
            <button>cancal</button>

            <div class="row">
                {
                    data.map((value, index) => {
                        return (
                            <div class="card" style={{ width: "18rem" }}>
                                <div class="card-body">
                                    <h5 class="card-title">{value.name}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">{value.age}</h6>
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <button onClick={() => deleteData(value.id)} class="card-link">Delete</button>
                                    <button class="card-link" onClick={() => viewAll(index)}>update </button>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </>
    );
}

export default Api