import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {

//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/anik-saha-2001").then((res) =>
//       res.json().then((data) => setData(data))
//     );
//   }, []);

    const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-red-900 p-4 text-3xl text-white rounded-xl ">
      Github followers:{data.followers}
      <img
        src={data.avatar_url}
        alt="Git Picture"
        className="rounded-full"
        width={300}
      />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/anik-saha-2001");
  return response.json();
};
