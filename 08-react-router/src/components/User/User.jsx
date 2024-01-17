import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <h1 className="text-2xl bg-orange-700 text-white p-4 m-4 rounded-xl text-center ">
      User: {userid}{" "}
    </h1>
  );
};

export default User;
