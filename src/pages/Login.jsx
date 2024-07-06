import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBlock, setToken, setUser } from "../slices/authSlice";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const toastId = toast.loading("Loading...");

    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    try {
      const response = await axios.post(
        "https://tracksoft-node.onrender.com/api/v1/auth/login",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.dismiss(toastId);
      toast.success("Login Successfull");

      // add in localstorage
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("block", JSON.stringify(response.data.user.block));

      // add in redux
      dispatch(setToken(response.data.token));
      dispatch(setUser({ ...response.data.user }));
      dispatch(setBlock(response.data.user.block));

      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error.message);
      toast.dismiss(toastId);
      toast.error("Something Went Wrong!");
    }
    setLoading(false);
  };

  return (
    <div className="bg-[#F6F5F5ff] h-screen flex justify-center items-center">
      <div className="bg-white w-[80%] md:w-[45%] shadow-xl p-5 mt-10 mb-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-3xl font-semibold text-center mb-5 text-blue">
            LOGIN NOW
          </h1>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">Email is required</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">Password is required</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-8 w-[70%] mx-auto bg-blue mb-4">
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded"
            >
              {loading ? <div className="custom-loader"></div> : <p>LOGIN</p>}
            </button>
          </div>
          <div className="text-center">
            <p>
              don't have an account?{" "}
              <Link to="/login" className="text-blue font-medium">
                Register now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
