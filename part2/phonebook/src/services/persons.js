import axios from "axios";
const baseUrl = "/api/persons";

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}


const getAll = () => {
  return axios.get(baseUrl);
};

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject);
};

const deleted = id => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default { getAll, create, update, deleted, setToken };
