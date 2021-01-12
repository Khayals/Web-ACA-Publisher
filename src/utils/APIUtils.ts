import { API_BASE_URL, ACCESS_TOKEN } from '../constants';
import axios from "axios";

const request = (options: any) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    if (localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = { headers: headers };
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};

export function login(loginRequest: any) {
    return request({
        url: API_BASE_URL + "/api/v1/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function register(registerRequest: any) {
    return request({
        url: API_BASE_URL + "/api/v1/auth/register",
        method: 'POST',
        body: JSON.stringify(registerRequest)
    });
}


//all book service in function here
export const useBookService = () => {
    //get
    const getAllBooks = async () => await axios.get('https://staging-api-web-aca-publisher.herokuapp.com/api/v1/book/get/all');
    //update
    //delete
    //filter
    return { getAllBooks }
}
