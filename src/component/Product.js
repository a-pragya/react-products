import React from "react"


class Product extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: "Yes"
        }
    }
    render() {
        return (
            <div>

                <h1>Name: {this.props.product.name}</h1>
                <h2>Price: {this.props.product.price}</h2>
                <h3>Description: {this.props.product.description}</h3>
                <h5> State is important? {this.state.answer}</h5>
            </div>
        )
    }
}

// function Product(props){
//     return(
//         <div>
//             <h1>Name: {props.product.name}</h1>
//             <h2>Price: {props.product.price}</h2>
//             <h3>Description: {props.product.description}</h3>
//         </div>
//     )
// }

export default Product