import axios from "axios";


const instance = axios.create({
    baseURL: 'http://127.0.0.1:5000/dwelling',
    headers: {
        'Content-Type': 'application/json',
    }
});

export async function getDwellings() {
    // await delay(500);
    return (await instance.get()).data;
}

export async function getDwellingById(id) {
    // await delay(500);
    return (await instance.get(`${id}`)).data;
}

export async function getFilteredDwellings(price, area, floors) {
    // await delay(500);
    return (await instance.get(`/filter?price=${price}&area=${area}&floors=${floors}`)).data;
}


async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
