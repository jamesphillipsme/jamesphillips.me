import * as React from "react";

export interface ISomethingProps {
    message?:string;
}

export class Something extends React.Component<ISomethingProps, void> {
    render() {
        return <p>Hello {this.props.message}</p>;
    }
}
