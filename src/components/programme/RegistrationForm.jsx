import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import useAxiosPublic from "../../hooks/useAxiosPublic";

const RegistrationForm = () => {
  const [loading, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async (data) => {
    try {
      setLoading(true);

      console.log("Submitting registration form with data:", data);

      // Call the backend registration API
      const response = await axiosPublic.post("/registration", data);

      console.log("Backend response:", response.data);

      if (response.data.success || response.data.insertedId) {
        // Save registration data to localStorage
        toast.success("Registration successful!");
        navigate("/my-registration");
      } else {
        toast.error("Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      const errorMsg =
        error.response?.data?.message ||
        error.message ||
        "Registration failed. Please try again";
      console.error("Error details:", errorMsg);
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-8"
      >
        <div className="mb-8 text-center">
          <h1 className="mb-3 text-2xl md:text-4xl font-bold tracking-tight text-slate-900">
            Registration Form
          </h1>
          <p className="text-md font-medium text-slate-600">
            If you have any questions, please contact us at the provided phone
            number.
          </p>
          <p className="mt-2 text-sm font-semibold text-blue-600">
            Bkash/Nagad: 01859902430
          </p>
        </div>
        {/* Personal Information div*/}
        <div className="mb-6 grid grid-cols-1 gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-3 md:grid-cols-2 md:p-6 shadow-sm">
          {/* Name English */}
          <div>
            <label className="label dark:text-gray-300">Name *</label>
            <input
              {...register("name_en", {
                required: "Name is required",
              })}
              placeholder="Write Your Full Name"
              className="input input-bordered w-full dark:bg-gray-800 dark:text-gray-100"
            />
            {errors.name_en && (
              <p className="text-error">{errors.name_en.message}</p>
            )}
          </div>
          {/* Group*/}
          <div>
            <label className="label dark:text-gray-300">Group *</label>
            <select
              {...register("group", {
                required: "group is required",
              })}
              className="select select-bordered w-full dark:bg-gray-800 dark:text-gray-100"
            >
              <option value="">Select</option>
              <option value="science">Science</option>
              <option value="commerce">Commerce</option>
              <option value="arts">Arts</option>
            </select>
            {errors.group && (
              <p className="text-error">{errors.group.message}</p>
            )}
          </div>
          {/* ssc_exam_roll*/}
          <div>
            <label className="label dark:text-gray-300">SSC Exam Roll *</label>
            <input
              {...register("ssc_exam_roll", {
                required: "ssc exam roll is required",
                pattern: {
                  value: /^01[0-9]{9}$/,
                  message:
                    "বাংলাদেশি মোবাইল নম্বর দিন (১১ ডিজিট)। যে নাম্বার থেকে ফি পাঠিয়েছেন।",
                },
              })}
              placeholder="SSC Exam Roll"
              className="input input-bordered w-full dark:bg-gray-800 dark:text-gray-100"
            />
            {errors.ssc_exam_roll && (
              <p className="text-error">{errors.ssc_exam_roll.message}</p>
            )}
          </div>
          {/* registration_number */}
          <div>
            <label className="label dark:text-gray-300">
              Registration Number *
            </label>
            <input
              {...register("ssc_regi_number", {
                required: " SSC Registration Number is Required",
              })}
              placeholder="Write SSC Registration Number"
              className="input input-bordered w-full dark:bg-gray-800 dark:text-gray-100"
            />
            {errors.ssc_regi_number && (
              <p className="text-error">{errors.ssc_regi_number.message}</p>
            )}
          </div>
        </div>
        {/* Educational Information */}
        <div className="mb-6 grid grid-cols-1 gap-4 rounded-2xl border border-purple-100 bg-purple-50 p-3 md:grid-cols-2 md:p-6 shadow-sm">
          {/* School Name */}
          <div>
            <label className="label dark:text-gray-300">
              Institution Name *
            </label>
            <input
              {...register("institution_name", {
                required: "Institution Name is Required",
              })}
              placeholder="Your School Name"
              className="input input-bordered w-full dark:bg-gray-800 dark:text-gray-100"
            />
            {errors.institution_name && (
              <p className="text-error">{errors.institution_name.message}</p>
            )}
          </div>
          {/* Tshirt Size */}
          <div>
            <label className="label dark:text-gray-300">T-Shirt Size *</label>
            <select
              {...register("tshirt_size", {
                required: "tshirt size is required",
              })}
              className="select select-bordered w-full dark:bg-gray-800 dark:text-gray-100"
            >
              <option value="">Select</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
              <option value="3xl">3XL</option>
            </select>
            {errors.tshirt_size && (
              <p className="text-error">{errors.tshirt_size.message}</p>
            )}
          </div>

          {/* Bkash Number */}
          <div>
            <label className="label dark:text-gray-300">
              Bkash/Nagad Number *
            </label>
            <input
              {...register("sendmoney_number", {
                required: " number is required",
                pattern: {
                  value: /^01[0-9]{9}$/,
                  message:
                    "বাংলাদেশি মোবাইল নম্বর দিন (১১ ডিজিট)। যে নাম্বার থেকে ফি পাঠিয়েছেন।",
                },
              })}
              placeholder="Bkash/Nagad Number in 01XXXXXXXXX format"
              className="input input-bordered w-full dark:bg-gray-800 dark:text-gray-100"
            />
            {errors.sendmoney_number && (
              <p className="text-error">{errors.sendmoney_number.message}</p>
            )}
          </div>
          {/* Transaction Id */}
          <div>
            <label className="label dark:text-gray-300">Transaction Id *</label>
            <input
              {...register("transaction_Id", {
                required: "Transaction Id is required",
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d)[A-Z0-9]{8,15}$/,
                  message: "সঠিক Transaction Id দিন",
                },
              })}
              placeholder="Write Transaction Id"
              className="input input-bordered w-full dark:bg-gray-800 dark:text-gray-100"
            />
            {errors.transaction_Id && (
              <p className="text-error">{errors.transaction_Id.message}</p>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-6 grid grid-cols-1 gap-4 rounded-2xl border border-green-100 bg-green-50 p-3 md:grid-cols-2 md:p-6 shadow-sm">
          {/* Phone */}
          <div>
            <label className="label dark:text-gray-300">Phone Number *</label>
            <input
              {...register("phone_number", {
                required: "Phone number is required",
                pattern: {
                  value: /^01[0-9]{9}$/,
                  message: "Give a valid Bangladeshi mobile number (11 digits)",
                },
              })}
              placeholder="Phone"
              className="input input-bordered w-full dark:bg-gray-800 dark:text-gray-100"
            />
            {errors.phone_number && (
              <p className="text-error">{errors.phone_number.message}</p>
            )}
          </div>

          {/* whatsapp */}
          <div>
            <label className="label dark:text-gray-300">
              Whatsapp Number *
            </label>
            <input
              {...register("whatsapp_number", {
                required: "Whatsapp number is required",
                pattern: {
                  value: /^01[0-9]{9}$/,
                  message: "Give a valid Bangladeshi mobile number (11 digits)",
                },
              })}
              placeholder="Whatsapp Number"
              className="input input-bordered w-full dark:bg-gray-800 dark:text-gray-100"
            />
            {errors.whatsapp_number && (
              <p className="text-error">{errors.whatsapp_number.message}</p>
            )}
          </div>
          {/* Present Adress */}
          <div>
            <label className="label dark:text-gray-300">
              Present Address *
            </label>
            <div className="flex gap-2">
              <input
                {...register("present_area", { required: true })}
                placeholder="Area"
                className="input input-bordered w-full dark:bg-gray-800 dark:text-gray-100"
              />
              <input
                {...register("present_thana", { required: true })}
                placeholder="Thana"
                className="input input-bordered w-full dark:bg-gray-800 dark:text-gray-100"
              />
              <input
                {...register("present_zilla", { required: true })}
                placeholder="Zilla"
                className="input input-bordered w-full dark:bg-gray-800 dark:text-gray-100"
              />
            </div>
          </div>
          {/* Permanent Adress */}
          <div>
            <label className="label dark:text-gray-300">
              Permanent Address *
            </label>
            <div className="flex gap-2">
              <input
                {...register("permanent_area", { required: true })}
                placeholder="Area"
                className="input input-bordered w-full dark:bg-gray-800 dark:text-gray-100"
              />
              <input
                {...register("permanent_thana", { required: true })}
                placeholder="Thana"
                className="input input-bordered w-full dark:bg-gray-800 dark:text-gray-100"
              />
              <input
                {...register("permanent_zilla", { required: true })}
                placeholder="Zilla"
                className="input input-bordered w-full dark:bg-gray-800 dark:text-gray-100"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-bold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0"
            style={{
              backgroundImage: `linear-gradient(135deg, #5b7bb8 0%, #4a69a1 100%)`,
            }}
          >
            {loading ? (
              <>
                <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent mr-3" />
                প্রসেসিং...
              </>
            ) : (
              "রেজিস্ট্রেশন সম্পন্ন করুন"
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;
