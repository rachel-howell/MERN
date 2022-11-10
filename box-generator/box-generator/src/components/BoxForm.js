import React, { useState } from 'react'
import { nanoid } from 'nanoid'

const BoxForm = ({boxList, setBoxList}) => {

    const [color, setColor] = useState("");
    const [height, setHeight] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(color, height);
        const box = {
            id: nanoid(),
            color,
            height,
            width:{height}
        }
        setBoxList([...boxList, box])
    }

    return (
        <div>
            <form onSubmit={ handleSubmit } className="form p-3 col-3 mx-auto">
                <label className="me-2 form-label">Color: </label>
                <input type="text" className="form-control me-2" onChange={ (e) => 
                    e.target.value ? setColor(e.target.value)
                    : setColor("blue")
                }/>
                <label className="me-2 form-label">Height: </label>
                <input type="text" className="form-control me-2" onChange={ (e) => 
                    e.target.value ? setHeight(`${e.target.value}px`)
                    : setHeight("50px")
                    }/>
                <button type="submit" className="btn border px-3 m-2">Add</button>
            </form>
        </div>
    )
}

export default BoxForm