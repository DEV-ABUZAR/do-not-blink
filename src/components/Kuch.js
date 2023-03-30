import React from 'react'
import { useState, useEffect } from 'react';

import { collection, addDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase';



export default function Kuch() {







    const [data, setData] = useState < [] > ([])
    const [naming, setNaming] = useState('')
    const [batching, setBatching] = useState('')
    const [classing, setClassing] = useState('')
    const [oldVaue, setOldValue] = useState({
        Name: "",
        Section: "",
        Batch: "",
        id: ""
    })
    useEffect(() => {
        onReadHandler()
    }, [])

    const alpha = (e) => {
        setNaming(e.target.value)
    }
    const beta = (e) => {
        setClassing(e.target.value)
    }
    const gamma = (e) => {
        setBatching(e.target.value)

    }

    const onReadHandler = async () => {
        let a  = []

        const querySnapshot = await getDocs(collection(db, "todos"));
        querySnapshot.forEach((doc) => {
            a.push({
                Name: doc.data().Name,
                Section: doc.data().Section,
                Batch: doc.data().Batch,
                id: doc.id


            })
            setData(a)
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });

    }

    const onAddHandler = async () => {
        let addStudent = {
            Name: naming,
            Section: classing,
            Batch: batching
        }

        try {
            const docRef = await addDoc(collection(db, "todos"), addStudent);
            setData([...data, { ...addStudent, id: docRef.id }])
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        finally {
            setNaming('')
                setBatching('')
            setClassing('')
        }

    }

    const onDeleteHandler = async (id) => {
        let onDelete = data.filter((value) => {
            if (value.id !== id) {
                return value

            }

        })
        await deleteDoc(doc(db, "todos", `${id}`));

        setData(onDelete)

    }

    const onUpdateHandler = (item) => {
        setOldValue(item)
        console.log(item, 'update item');
        setNaming(item.Name)
        setBatching(item.Batch)
        setClassing(item.Section)

    }
    const onEdit = () => {
        let newArray = data.map((todo) => {
            if (todo.id === oldVaue.id) {
                todo.Name = naming;
                todo.Batch = batching;
                todo.Section = classing;
            }
            return todo;
        });
        setNaming('');
        setBatching('');
        setClassing('');
    }
    
    return (
        <div>
            <div className='d-flex justify-content-center mt-5'>
                <div className='card' style={{ width: '24rem' }}>
                    <div className='card-title text-center'>
                        <h2>Event Planner</h2>
                        <div className='card-body '>
                            <div className='mt-3'>
                                <input type="text" placeholder='Name' value={naming} onChange={alpha} />

                            </div>
                            <div className='mt-3'>
                                <input type="text" placeholder='Class' value={classing} onChange={beta} />

                            </div>
                            <div className='mt-3'>
                                <input type="text" placeholder='Batch' value={batching} onChange={gamma} />

                            </div>
                            <div className='mt-3'>
                                <button onClick={onAddHandler}>Add</button>


                            </div>
                            <div className='mt-3'>
                            <button onClick={onEdit}>Edit</button>


                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Class</th>
                        <th scope="col">Batch</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Update</th>
                    </tr>
                </thead>

                {
                    data.map((value, index) => (

                        <tbody>
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{value.Name}</td>
                                <td>{value.Section}</td>
                                <td>{value.Batch}</td>
                                <td>
                                    <button onClick={()=>onDeleteHandler(value.id)}> Delete</button>
                                </td>
                                <td>
                                    <button onClick={()=>onUpdateHandler(value)}>Update</button>
                                </td>
                            </tr>

                        </tbody>

                    ))}



            </table>



        </div>
    )
}
