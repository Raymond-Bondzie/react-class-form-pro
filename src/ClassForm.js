import React from 'react'


class Cform  extends React.Component{
    constructor(){
        super();
        this.state= {
            name: "",
            email: "",
            password: ""

        };
    }

    handleName(first) {
        this.setState({name: first.target.value})
    }

    handleEmail(second) {
        this.setState({email: second.target.value})
    }

    handlePassword(third) {
        this.setState({password: third.target.value})
    }

    handleSubmit(last) {
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.password);
        last.preventDefault()

        this.setState({
            name: "",
            email: "",
            password: ""
        })

    }

    render(){
        return(
            <>
            <form onSubmit={(last) =>this.handleSubmit(last)} className="classForm">

                <h1>ClassForm</h1>
                <br/>
                <br/>
                <br/>
                <label className="labels">Enter Your Name:</label>
           <input name="name" type="text" value={this.state.name} onChange={(first) => this.handleName(first)} className="inputs"/>
           <br/>
           <br/>
           <label className="labels">Your Email:</label>
           <input name="email" type="email" value={this.state.email} onChange={(second) => this.handleEmail(second)} className="inputs"/>
           <br/>
           <br/>
           <label className="labels">Password:</label>
           <input name="password" type="password" value={this.state.password} onChange={(third) => this.handlePassword(third)} className="inputs"/>
           <br/>
           <br/>
           <input name="submit" type="submit" className="button"/>
           </form>
           </>
           
        )
    }




};


export default Cform;