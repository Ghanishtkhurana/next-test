"use client";
import SelectWithIcons from "@/core/SelectWithIcons";
import useGetMovie from "@/libs/queries/movie/useGetMovie";
import { setCookie, getCookie } from "cookies-next";
import { useForm } from "react-hook-form";

// async function getUsers() {
//   const res = await axios.get("https://jsonplaceholder.typicode.com/users");
//   return res.data
// }

const Page = () => {
  const { register, handleSubmit } = useForm();
  // const {data,isLoading} = useGetMovie()
  // console.log("userData",data)

  const onSubmit = async (formData) => {
    console.log("formData", formData);
    if (formData.email === "email@gmail.com" && formData.password === "12345") {
      alert("login success");
      setCookie("cooky", "token123");
    } else {
      alert("User not found");
    }
  };
  const cokyname = getCookie("cooky") 
  console.log(cokyname)
  console.log(getCookie("cooky"))

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-purple-200 w-[350px] mt-32 justify-center items-center border-2 border-black flex flex-col pl-20 pr-20 gap-4"
      >
        <div className="flex flex-col gap-2">
          <input
            type="text"
            className="w-[200px]"
            placeholder="email"
            {...register("email")}
          />
          <input
            type="text"
            className="w-[200px]"
            placeholder="password"
            {...register("password")}
          />
          <button type="submit" className="w-[200px]">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
