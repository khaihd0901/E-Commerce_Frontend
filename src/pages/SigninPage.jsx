// import { signin } from "@/services/authService";
import { signIn } from "@/services/authService";
import { useState } from "react";
import { useNavigate } from "react-router";

function SigninPage({setUser}) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      const data = await signIn(formData.username, formData.password);
      console.log(data)
      localStorage.setItem('token', data.accessToken);
      setUser(data.user);
      navigate('/');
      window.location.reload();
    }
    catch(error){
      localStorage.removeItem('token');
      console.error('Signin failed:', error);
    }
  }
  return (
    <div className="flex flex-col justify-center items-center w-[50%] font-mono">
      <div className="h2 pt-10 pb-10 text-2xl  w-full text-center">
        Sign In Page
      </div>
      <form className="flex flex-col w-[50%] border-t border-black pt-5 pb-5">
        <div className="flex flex-col capitalize ">
          <label htmlFor="username" className="mb-2 text-[16px]">
            username or username
          </label>
          <input
            name='username'
            type="username"
            placeholder="Username"
            className="border border-black p-2 mb-4"
            value={formData.username}
            onChange={handleChange}
            required
            autoCapitalize="off"
          />
        </div>
        <div className="flex flex-col capitalize ">
          <label htmlFor="Password" className="mb-2 text-[16px]">
            password
          </label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="border border-black p-2 mb-4"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="remember_me flex items-center">
            <input type="checkbox" className="mr-1 cursor-pointer" />
            <label htmlFor="remember me" className="text-[16px]  ">
              remember me
            </label>
          </div>
          <div className="lost_password">
            <a href="#" className="text-[16px] text-black hover:underline">
              Lost your password?
            </a>
          </div>
        </div>
        <button onClick={handleSubmit} className="bg-black text-white p-2 hover:bg-white hover:text-black cursor-pointer border border-black transition-smooth">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SigninPage;
