export default function authHeader() {
    const token = localStorage.getItem("LRVS_TOKEN");

    if (token) {
        return { Authorization: "Bearer " + token };
    } else {
        return {};
    }
}
