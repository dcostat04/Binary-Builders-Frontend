import axios from "axios";

export const submitReferral = async () => {
    const response = await axios.post('http://127.0.0.1:8000/api/booking/',
        {
            "name": "kartik",
            "email": "random@gmail.com",
            "phone": "8434334353",
            "address": "Pune",
            "city": "kabul",
            "issue": "kljflsjf",
            "description": "dfsl fsdjlfd sdlfjsdl sdf",
            "citizenship_id": "234332423",
            "relation": "Friends"
        }
    );

    return response;
}