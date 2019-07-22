import axios from "axios";

const axious_client = axios.create({
  baseURL: "http://localhost:4000",
  responseType: "json"
});

const createDisc = async props => {
  const res = await axious_client.post("/disc", props);

  return res.data;
};

const updateDisc = async props => {
  const res = await axious_client.post("/disc/" + props.id, props);

  return res.data;
};

const deleteDisc = async props => {
  const res = await axious_client.delete("/disc/" + props.id);

  return res.data;
};

export default { createDisc, updateDisc, deleteDisc };
