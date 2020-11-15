import http from "./http";


const API_URL = '/users';


export const createUser = async (cred) => {
    try {
        return await http.post(`${API_URL}`, cred)
    }catch (err){
        return err.response.data;
    }
};


export const getUserInfo = async () => {
    try {
        return await http.get('/me')
    }catch (err){
        return err.response;
    }
}

export const login = async (emailCred) => {
    try {
        return await http.post('/login', {...emailCred});
    }catch (err){
        return err.response;
    }
};

export const logout = async () => {
  try {
      return await http.post('/logout')
  }catch (err){
      return err.response;
  }
};