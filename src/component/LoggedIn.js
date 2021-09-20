import React from "react"

class LoggedIn extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        let in2 = "in";
        if (!this.state.isLoggedIn) {
            in2 = "out"
        }
        return (
            <div>
                <h1> User is logged {in2}</h1>
            </div>
        )
    }
}

export default LoggedIn