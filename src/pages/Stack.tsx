import { useParams } from "react-router-dom";

const Stack = () => {
  const { id } = useParams();
  return <div>Stack {id}</div>;
};

export default Stack;
