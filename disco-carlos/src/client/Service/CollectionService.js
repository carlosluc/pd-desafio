import axios from "axios";

const axious_client = axios.create({
  baseURL: "http://localhost:4000",
  responseType: "json"
});

const createCollection = async props => {
  const res = await axious_client.post("/collection", props);

  return res.data;
};

const fetchAllCollection = async () => {
  const res = await axious_client.get("/collection");

  return res.data;
};

const fetchAllDiscsFromCollection = async props => {
  const res = await axious_client.get("/collection/" + props.id);

  return res.data;
};

export default {
  fetchAllCollection,
  createCollection,
  fetchAllDiscsFromCollection
};
