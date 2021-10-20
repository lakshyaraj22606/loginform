import React, { useState } from 'react';
class Register extends React.Component{
  constructor()
  {
    super();
    this.state={
      name:"",
      hostel:"",
      room:"",
      branch:"",
      email:"",
      password:"",
      confirmpassword:"",
      emailError:"",
      passwordError:"",
      confirmpasswordError:""
    }
  }

  valid()
  {
    if(!this.state.email.includes("@mnit.ac.in") && this.state.password.length<8 && this.state.confirmpassword!=this.state.password)
    {
      this.setState(
        {emailError:"Invalid Email", passwordError:"Invalid Password", confirmpasswordError:"password does not match"}
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
    else if(this.state.confirmpassword!=this.state.password)
    {
        this.setState(
            {confirmpasswordError:"password does not match"}
        )
    }
    else{
      return true
    }
  }

  Submit()
  {
    this.setState(
      {emailError:"", passwordError:"", confirmpasswordError:""}
    )
    if(this.valid())
    {
      alert("logged in successfully")
    }
  }

    render(){
        return(

          <div class="center">
            <h1>Register</h1>
            <form>

              <div class="txt_field">
                <input type="text" required onChange={(event)=>{this.setState({name:event.target.value})}}/>
                <label>Fullname</label>
              </div>
              
              <div class="txt_field">
                <input type="text" required onChange={(event)=>{this.setState({hostel:event.target.value})}}/>
                <label>Hostel</label>
              </div>

              <div class="txt_field">
                <input type="text" required onChange={(event)=>{this.setState({room:event.target.value})}}/>
                <label>Room</label>
              </div>

              <div class="txt_field">
                <input type="text" required onChange={(event)=>{this.setState({branch:event.target.value})}}/>
                <label>Branch</label>
              </div>

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

              <div class="txt_field">
                <input type="password" required onChange={(event)=>{this.setState({confirmpassword:event.target.value})}}/>
                <p style={{color:"red",fontSize:"14px"}}>{this.state.confirmpasswordError}</p>
                <label>Confirm Password</label>
              </div>

            
              <input type="submit" value="Register" onClick={()=>this.Submit()}/>
              <div class="signup_link">
                Already a Member? <a href="login">login</a>
              </div>
            </form>
          </div>




        );
    }
}

export default Register;