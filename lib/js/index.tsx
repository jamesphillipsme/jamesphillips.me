import * as React from "react";
import * as ReactDOM from "react-dom";

import {Person} from "./person";
import {Something} from "./something";

const tommy = new Person('tommy', 'sullivan');
console.log(tommy.fullName);

setTimeout(() => {
    ReactDOM.render(
        <Something message="yooooo"/>,
        document.getElementById('reactContainer')
    );
}, 2000);
