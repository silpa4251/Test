import React,{useState,useEffect} from 'react'
import './Form.css'

const Form = () => {
    const initalValue = {
        username: '',
        email: '',
        password: ''
    };
    const [formData, setFormData] = useState(initalValue);
    const [formError, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formData));
    setIsSubmit(true);
    }
    useEffect(() => {
        if(Object.keys(formError).length === 0 && isSubmit) {
            alert('Form submitted successfully');
        }},[formError,isSubmit]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.username) {
            errors.username = "Username is required";
        }
        if(!values.email) {
            errors.email = "Email is required";
        }
        else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if(!values.password) {
            errors.password = "Password is required";
        }
        else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        }
        else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
    };

  
  return (
    <div className="container">
        {/* {Object.keys(formError).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formData, undefined, 2)}</pre>
      )} */}
        <form onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <div className="ui divider"></div>
            <div className="ui form">
                <div className="field">
                    <label>Username:</label>
                    <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange}/>
                </div>
                <p>{formError.username}</p>
                <div className="field">
                    <label>Email:</label>
                    <input type="email" name="email" placeholder="email" value={formData.email} onChange={handleChange}/>
                </div>
                <p>{formError.email}</p>
                <div className="field">
                    <label>Password:</label>
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
                </div>
                <p>{formError.password}</p>
                <button className="ui button" type="submit" >Login</button>
            </div>
        </form>
    </div>
  )
}

export default Form

