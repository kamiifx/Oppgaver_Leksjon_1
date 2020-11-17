import http from "./http";

const API_URL = '/polls';

export const list = async () => {
    try {
        return await http.get(`${API_URL}`);
    }catch (err){
        return err.response;
    }
};

export const get = async (id) => {
    try {
        return await http.get(`${API_URL}/${id}`)
    }catch (err){
        return err.response;
    }
};

export const create = async (data) => {
    try {
        return await http.post(`${API_URL}`,data)
    }catch (err){
        return err.response;
    }
};

export const vote1 = async (id) => {
    try{
        return await http.put(`${API_URL}/${id}`)
    }catch (err){
        return err.response
    }
}

export default {
    list,get,create,vote1
}