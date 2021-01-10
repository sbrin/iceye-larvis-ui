import axios from "axios";
import authHeader from "../auth/auth-header";

const API_URL = "http://localhost:8000/";

class AcqusitionsService {
    async getAcquisitions() {
        return await axios
            .get(`${API_URL}acquisitions`, {
                headers: authHeader(),
            })
            .then(response => response.data);
    }
}

export default new AcqusitionsService();
