import React, { useState } from 'react';
class Art extends React.Component{
  constructor()
  {
    super();
    this.state={
      email:"",
      password:"",
      emailError:"",
      passwordError:""
    }
  }

  valid()
  {
    if(!this.state.email.includes("@mnit.ac.in") && this.state.password.length<8)
    {
      this.setState(
        {emailError:"Invalid Email", passwordError:"Invalid Password"}
      )
    }
    else if(!this.state.email.includes("@mnit.ac.in") )
    {
      this.setState(
        {emailError:"Invalid Email"}
      )
    }
    else if(this.state.password.length<8)
    {
      this.setState(
        {passwordError:"Invalid Password"}
      )
    }
    else{
      return true
    }
  }

  Submit()
  {
    this.setState(
      {emailError:"", passwordError:""}
    )
    if(this.valid())
    {
      alert("logged in successfully")
    }
  }

    render(){
        return(

          <div class="center">
            <h1>Login</h1>
            <form>

              <div class="txt_field">
                <input type="email" required onChange={(event)=>{this.setState({email:event.target.value})}}/>
                <p style={{color:"red",fontSize:"14px"}}>{this.state.emailError}</p>
                <label>College Email</label>
              </div>
              

              <div class="txt_field">
                <input type="password" required onChange={(event)=>{this.setState({password:event.target.value})}}/>
                <p style={{color:"red",fontSize:"14px"}}>{this.state.passwordError}</p>
                <label>Password</label>
              </div>
            
              <input type="submit" value="Login" onClick={()=>this.Submit()}/>
              <div class="signup_link">
                Not a member? <a href="register">Register</a>
              </div>
            </form>
          </div>




        );
    }
}

export {Art};