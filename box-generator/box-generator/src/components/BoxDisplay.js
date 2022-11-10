import React from 'react';
// import style from './Style.module.css';


const BoxDisplay = ({boxList}) => {
    return (
        <div className="col-3 mx-auto">
            {
                boxList.map((box)=>(
                    <div style={{
                        display: "inline-block",
                        margin: "10px",
                        height: box.height,
                        width: box.height,
                        backgroundColor: box.color
                    }}>
                    </div>
                ))
            }
        </div>
    )
}

export default BoxDisplay