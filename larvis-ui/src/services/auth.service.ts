import axios from "axios";

const API_URL = "http://localhost:8000/";

class AuthService {
    async getToken(user_id: string, password: string) {
        return await axios
            .post(`${API_URL}token`, { user_id, password })
            .then(response => response.data);
    }
}

export default new AuthService();
