import Joke from './component/Joke'
//import React from 'react'
import productData from "./data/vschoolProducts"
import Product from './component/Product'
import LoggedIn from './component/LoggedIn'
import React from "react"

function App() {
    const productComponents = productData.map(
        product => <Product
            key={product.id}
            product={product}
        />
    )
    console.log(productComponents)
    return (
        <div>
            {productComponents}
        </div>
    )
}

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 < LoggedIn />
//             </div>
//         )
//     }
// }

export default App
