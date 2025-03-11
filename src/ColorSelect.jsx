import React, { useState } from "react";

function ColorPicker() {

    const [color, setColor] = useState("#ffffff")

    function handleChange(e) {
        setColor(e.target.value)
    }

    return(
            <div className="container">
                <h1>Color Picker</h1>
                <div className="color-dis" style={{background: color}}>
                      <p>Selected color: {color}</p>
                </div>
                <label>Select a color</label>
                <input type="color" value={color} onChange={handleChange}/>
            </div>
    );
}

export default ColorPicker