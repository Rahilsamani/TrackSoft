import { useForm, Controller } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setValue("image", file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const toastId = toast.loading("Loading...");

    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);
    formData.append("image", data.image);

    try {
      await axios.post("http://localhost:4000/api/v1/auth/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.dismiss(toastId);
      toast.success("Successfully Registered");
      navigate("/login");
    } catch (error) {
      console.error("Error submitting form:", error.message);
      toast.dismiss(toastId);
      toast.error("Something Went Wrong!");
    }
    setLoading(false);
  };

  return (
    <div className="bg-[#F6F5F5ff] flex justify-center items-center">
      <div className="bg-white w-[45%] shadow-xl p-5 mt-10 mb-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-3xl font-semibold text-center mb-5 text-blue">
            REGISTER NOW
          </h1>

          {/* Profile Image */}
          <div className="mb-4">
            <Controller
              control={control}
              name="image"
              rules={{ required: "Image is required" }}
              render={({ field: { onChange, onBlur, ref } }) => (
                <div
                  {...getRootProps()}
                  className="w-[150px] flex justify-center items-center h-[150px] p-2 border border-gray-300 mx-auto rounded-[100%] mt-2 cursor-pointer"
                >
                  <input
                    {...getInputProps()}
                    onChange={(e) => {
                      onChange(e);
                      onDrop(e.target.files);
                    }}
                    onBlur={onBlur}
                    ref={ref}
                  />
                  {preview ? (
                    <img
                      src={preview}
                      alt="Profile Preview"
                      className="w-full h-full rounded-[100%]"
                    />
                  ) : (
                    <p className="text-gray-500">Add Profile Image</p>
                  )}
                </div>
              )}
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1 text-center">
                {errors.image.message}
              </p>
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
          <div className="flex gap-2">
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
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
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
              {loading ? (
                <div className="custom-loader"></div>
              ) : (
                <p>REGISTER</p>
              )}
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
