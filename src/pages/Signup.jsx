import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-[#F6F5F5ff] flex justify-center items-center">
      <div className="bg-white w-[45%] shadow-xl h-screen p-5 mt-10 mb-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-3xl font-semibold text-center mb-5 text-blue">
            REGISTER NOW
          </h1>

          {/* Profile Image */}
          <div className="mb-4">
            <label className="block text-gray-700">Profile Image</label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="w-full p-2 border border-gray-300 rounded mt-2"
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">Image is required</p>
            )}
          </div>

          {/* First Name And Last Name */}
          <div className="mb-4 flex gap-2">
            <div className="w-1/2">
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                {...register("firstName", { required: true })}
                placeholder="Enter your first name"
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  First name is required
                </p>
              )}
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                {...register("lastName", { required: true })}
                placeholder="Enter your last name"
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  Last name is required
                </p>
              )}
            </div>
          </div>

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

          {/* Password And Confirm Password */}
          <div className="flex gap-2" >
            <div className="w-1/2">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="Enter your password"
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  Password is required
                </p>
              )}
            </div>

            <div className="w-1/2">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: true,
                })}
                placeholder="Confirm your password"
                className="w-full p-2 border border-gray-300 rounded mt-2"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 w-[70%] mx-auto bg-blue mb-4">
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded"
            >
              REGISTER NOW
            </button>
          </div>
          <div className="text-center">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-blue font-medium">
                Login now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
