import React from "react";
// function Button(props) {
//     const {func, number} = props;
//     return (
//         <button onClick={func}>{number}</button>
//     )
// }
class Button extends React.Component {

    render() {
        return (
            <button onClick={this.props.func}>{this.props.number}</button>
        )
    }
}

export default Button;