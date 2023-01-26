import React, {useState} from 'react'
import axios from 'axios'
import { toast} from 'react-toastify';
import { Navigate } from 'react-router-dom';


const SignIn = ({history}) => {
    const [values, setValues] = useState({
        email: '',
        password:''
 
    });

    const { email, password} = values;

    const handleChange = name => (e) =>{
        setValues({...values, [name]: e.target.value});
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
    try{
        const res = await fetch('/api/signin', {
          method:'POST',
          body:JSON.stringify({ email,password}),
          headers:{'Content-Type':'application/json'}
        });

        const data = await res.json()
        console.log(data); 
        if(data){
            setValues({ email: '', password:''});
            toast.success("Log In successfully");
            localStorage.setItem("token", JSON.stringify(data))
           window.location.assign('/UserDashboard');
        }

      }
      catch(err){
        console.log(err)
      }
    }    
  
    return (
        <div>
            <div className="container custom_className ">
                <h2 className="signup_title text-center">Sign In</h2>
                <form className=" col-sm-6 offset-3 pt-5 signup_form">

                    <div className="form-outline mb-4">
                        <input onChange={handleChange("email")}   type="email" id="form4Example2" className="form-control"  value={email} />
                        <label className="form-label" htmlFor="form4Example2">Email </label>
                    </div>

                
                    <div className="form-outline mb-4">
                        <input onChange={handleChange("password")}   type="password" id="form4Example3" className="form-control" value={password}  />
                        <label className="form-label" htmlFor="form4Example3">Password</label>
                    </div>
                
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary btn-block mb-4">Log In</button>
                    </form>
              
        </div>
</div>
    )
}

export default SignIn
