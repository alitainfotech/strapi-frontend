import { get, post, del, put } from "../AxiosConfig";

const URI = "/restaurants";

const listByParams = (url = "", params, config) => {
  const URL = `${URI}${url ? url : ""}?${params}`;
  return get(URL, config);
};

// Get a list of restaurants
const listRestaurant = (config) => {
  const URL = `${URI}`;
  return get(URL, config);
};

// Create a restaurant
const createRestaurant = (payload) => {
  const URL = `${URI}`;
  return post(URL, payload);
};

// Get a specific restaurant
const getRestaurantById = (id, config) => {
  const URL = `${URI}/${id}`;
  return get(URL, config);
};

// Delete a restaurant
const delRestaurantById = (id, config) => {
  const URL = `${URI}/${id}`;
  return del(URL, config);
};

// Update a restaurant
const updateRestaurantById = (id, config) => {
  const URL = `${URI}/${id}`;
  return put(URL, config);
};

const RestaurantService = {
  listByParams,
  listRestaurant,
  createRestaurant,
  getRestaurantById,
  delRestaurantById,
  updateRestaurantById,
};

export default RestaurantService;
