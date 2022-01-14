import React, { Component } from 'react';
import logo from "../images/logo.png"
import { InfoSquare } from 'react-bootstrap-icons';


export default function HeaderBar() {

    return (
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <div class="container-fluid">
                <img src={logo}></img>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/LiebermanTool">Liberman</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/GeneratePassword">Generate Password</a>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        <InfoSquare width="50" height="25" />
                    </span>
                </div>
            </div>
        </nav>
    );
}