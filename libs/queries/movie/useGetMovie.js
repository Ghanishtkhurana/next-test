import { useQuery } from "@tanstack/react-query";

const useGetMovie = () => {
  const allMovies = useQuery({
    queryKey: ["movieAll"],
    queryFn: async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log("res",res)
      return res.data
    },
  });
  return allMovies
};

export default useGetMovie