import axios from "axios";
import authHeader from "../auth/auth-header";

const API_URL = "http://localhost:8080/";

export interface User {
    user_id: string;
    name: string;
    password?: string;
}

class UsersService {
    async getUsers() {
        return await axios.get(API_URL + "users", { headers: authHeader() });
    }
    async getUser(id: string) {
        return await axios.get(`${API_URL}users/${id}`, {
            headers: authHeader(),
        });
    }
    async updateUser(id: string, user: User) {
        return await axios.post(`${API_URL}users/${id}`, user, {
            headers: authHeader(),
        });
    }
}

export default new UsersService();
