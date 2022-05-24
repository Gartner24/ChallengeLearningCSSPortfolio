import React, { Component } from "react";

export default class Component4 extends Component {
    render() {
        return (
            <div class="border p-3">
                <h2>Habilidades</h2>
                <div class="d-flex flex-row">
                    <div class="mx-3">
                        <h3>HTML</h3>
                        <progress max="100" value="70"></progress>
                    </div>
                    <div class="mx-3">
                        <h3>CSS</h3>
                        <progress max="100" value="80"></progress>
                    </div>
                    <div class="mx-3">
                        <h3>JavaScript</h3>
                        <progress max="100" value="30"></progress>
                    </div>
                    <div class="mx-3">
                        <h3>ReactJS</h3>
                        <progress max="100" value="5"></progress>
                    </div>
                </div>
            </div>
        )
    }
}