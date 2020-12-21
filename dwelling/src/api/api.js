import axios from "axios";


const instance = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    headers: {
        'Content-Type': 'application/json',
    }
});

export async function getDwellings() {
    // await delay(500);
    return (await instance.get('/dwelling')).data;
}

export async function getDwellingById(id) {
    // await delay(500);
    return (await instance.get(`/dwelling/${id}`)).data;
}

export async function getFilteredDwellings(price, area, floors) {
    // await delay(500);
    return (await instance.get(`/dwelling/filter?price=${price}&area=${area}&floors=${floors}`)).data;
}

export async function loginUser(email, password) {
    // await delay(3000);
    return (await instance.post(`/user/login`, {email: email, password: password})).data;
}

export async function registerUser(username, email, password) {
    // await delay(3000);
    return (await instance.post(`/user/register`, {username: username, email: email, password: password})).data;
}

export async function didUserLogin(loggedInValue) {
    // await delay(500);
    return (await instance.post(`/user/check_logged_in`, {loggedInValue: loggedInValue})).data;
}


async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
