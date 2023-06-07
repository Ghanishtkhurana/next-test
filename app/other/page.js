"use client"
import useGetMovie from '@/libs/queries/movie/useGetMovie';

// async function getUsers() {
//   const res = await axios.get("https://jsonplaceholder.typicode.com/users");
//   return res.data
// }

const Page = () => {
  const {data,isLoading} = useGetMovie()
  console.log("userData",data)

  return (
    <div>
      ohter
    </div>
  )
}

export default Page
