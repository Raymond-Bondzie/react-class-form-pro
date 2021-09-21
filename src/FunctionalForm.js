import React,{useState} from 'react'

function Fform() {
    const[name , setName] = useState("")
    const[email , setEmail] = useState("")
    const[password , setPassword] = useState("")

    function handleName(first) {
        setName(first.target.value)
    }

    function handleEmail(second) {
        setEmail(second.target.value)
    }

    function handlePassword(third) {
        setPassword(third.target.value)
    }

    function handleSubmit(last) {
        last.preventDefualt()
        console.log(name);
        console.log(email);
        console.log(password);
    }

    return(
        <>
        <form onSubmit= {(last) => handleSubmit(last)}>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <h1>FunctionalForm</h1>
        <br/>
        <br/>
        <br/>
        <label className="labels">Enter Your Name:</label>
         <input name="name" type="name" value={name} onChange={(first) => handleName(first)} className="inputs"/>
         <br/>
         <br/>
         <label className="labels">Your Email:</label>
         <input name="email" type="email" value={email} onChange={(second) => handleEmail(second)} className="inputs"/>
         <br/>
         <br/>
         <label className="labels">Password:</label>
         <input name="password" type="password" value={password} onChange={(third) => handlePassword(third)} className="inputs" />
         <br/>
         <br/>
         <input type="submit" className="button" />
         </form>
        </>
    )
}

export default Fform;