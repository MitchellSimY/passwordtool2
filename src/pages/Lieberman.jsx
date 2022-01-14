import React, { useState } from 'react';
import NatoTable from '../components/NatoTable.jsx'


export default function Lieberman() {

    const [showTable, setShowTable] = useState(false);
    const [password, setPassword] = useState("");
    const [charArray, setCharArray] = useState("");


    function handleSubmit(e) {
        setShowTable(true);
        setCharArray(Array.from(password));
    }

    return (
        <div>
            <h2>Lieberman</h2>
            <div class="col-sm-5 center-block" >
                <div class="input-group mb-3">
                    
                    <input type="text" class="form-control" size="25" placeholder="Lieberman password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <div class="input-group-append">
                        <button class="btn btn-outline-primary" type="button" onClick={handleSubmit} onKeyDown={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>

            {showTable ? <NatoTable charArray={charArray}/> : ""}
            {" "}
        </div>
    );
}