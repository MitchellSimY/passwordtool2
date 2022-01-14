import React, { useState } from 'react';
import NatoTable from '../components/NatoTable';


export default function GeneratePassword() {

    const [showTable, setShowTable] = useState(false);
    const [password, setPassword] = useState([]);
    const [showPassword, setShowPassword] = useState([]);

    function handleGenericPw(e) {
        e.preventDefault();
        var pwArray = [];

        for (var i = 0; i <= 7; i++) {
            var x = Math.floor(Math.random() * (122 - 33) + 33);
            if (x === 34 || x === 39 || x === 44 || x === 47 || x === 58 || x === 59 || x === 60 || x === 62 || x === 91 || x === 92 || x === 93 || x === 95 || x === 96) {
                i--;
            } else {
                pwArray[i] = String.fromCharCode(x);
            }
        }

        setPassword(pwArray);
        setShowPassword(true);
        setShowTable(true);
    }

    function handleHardPw(e) {
        e.preventDefault();
        var pwArray = [];

        for (var i = 0; i <= 11; i++) {
            var x = Math.floor(Math.random() * (122 - 33) + 33);
            if (x === 34 || x === 39 || x === 44 || x === 47 || x === 58 || x === 59 || x === 60 || x === 62 || x === 91 || x === 92 || x === 93 || x === 95 || x === 96) {
                i--;
            } else {
                pwArray[i] = String.fromCharCode(x);
            }
        }

        setPassword(pwArray);
        setShowPassword(true);
        setShowTable(true);
    }

    return (
        <div>
            <h2>Generate PW</h2>
            <div>
                <button type="button" class="btn btn-primary" onClick={handleGenericPw}>Generic Password</button> {" "}
                <button type="button" class="btn btn-danger" onClick={handleHardPw}>Hard Password</button>
            </div>
            <br></br>
            {showPassword ? password : ""}
            {showTable ? <NatoTable charArray={password}/> : ""}
            <br></br>
            <br></br>
        </div>
    );
}