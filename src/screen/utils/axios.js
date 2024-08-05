import axios from 'axios';

// Hàm GET
async function getData(url, uri) {
  try {
    const response = await axios.get(`${url}${uri}`);
    return response.data;
  } catch (error) {
    console.error('GET Error:', error);
    throw error;
  }
}

// Hàm POST
async function postData(url, uri, data) {
  try {
    const response = await axios.post(`${url}${uri}`, data);
    return response.data;
  } catch (error) {
    console.error('POST Error:', error);
    throw error;
  }
}

// Hàm PUT
async function putData(url, uri, data) {
  try {
    const response = await axios.put(`${url}${uri}`, data);
    return response.data;
  } catch (error) {
    console.error('PUT Error:', error);
    throw error;
  }
}

// Hàm DELETE
async function deleteData(url, uri) {
  try {
    const response = await axios.delete(`${url}${uri}`);
    return response.data;
  } catch (error) {
    console.error('DELETE Error:', error);
    throw error;
  }
}

// Hàm PATCH
async function patchData(url, uri, data) {
  try {
    const response = await axios.patch(`${url}${uri}`, data);
    return response.data;
  } catch (error) {
    console.error('PATCH Error:', error);
    throw error;
  }
}

export {
  getData , postData, putData, deleteData, patchData
}