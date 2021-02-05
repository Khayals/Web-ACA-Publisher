import { API_BASE_URL, API_DRIVE, ACCESS_TOKEN } from '../constants';
import axios from 'axios';

const getRequest = async (options: any) => {
    const url = API_BASE_URL+options.url
    const data = options.data
    return await axios.get(url, {
        params: {
            data
        },
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        }
    })
}

const postRequest = async (options: any) => {
    const url = API_BASE_URL+options.url
    const data = options.data
    return await axios.post(url, {
        params: {
            data
        },
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        }
    })
}

const postRequstDrive = async (body: FormData) => {
    const url = API_DRIVE
    return await fetch(url, {
        method: "POST",
        body 
    })
}

export const useAuthService = () => {
    const login = () => {}
    const register = () => {}
    const logout = () => {}
}

//all book service in function here
export const useBookService = () => {
	//get
	const getAllBooks = () => {
		return getRequest({
            "url":"/book/get/all",
            "data": {},
        });
    }

	//update
	//delete
	//filter
	return { getAllBooks };
};

export const useDriveService = () => {
    const getUploadDrive = (formData: FormData) => {
        return postRequstDrive(formData)
    }
    return {getUploadDrive}
}