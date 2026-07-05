import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      alert("✅ Login Successful");

      navigate("/dashboard");
    } catch (error) {
      alert("❌ Invalid Email or Password");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 to-indigo-800">

      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">

        <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Admin Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <div className="relative">
         <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="w-full p-4 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

         <button
         type="button"
         onClick={() => setShowPassword(!showPassword)}
         className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
         >
          {showPassword ? "🙈" : "👁️"}
          </button>
         </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-4 rounded-lg hover:bg-blue-800 duration-300 font-bold"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;