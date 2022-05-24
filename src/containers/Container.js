import React, { Component } from "react";
import Component1 from "../components/component1";
import Component2 from "../components/Component2";
import Component3 from "../components/Component3";
import Component4 from "../components/Component4";
import Userinfo from "../components/userInfo";

export default class Container extends Component {
    render() {
        return (
            <div class="container vh-100 d-grid align-items-center">
                <div class="row">
                    <div class="col-4">
                        <Userinfo />
                    </div>
                    <div class="col-8">
                        <Component1 />
                        <Component2 />
                        <Component3 />
                        <Component4 />
                    </div>
                </div>
            </div>
        )
    }
}