import HOST_BACKEND from './hostBackend.js';

export default async function getFrontpageNews() {
    try {
        const response = await fetch(`http://${HOST_BACKEND}:4000/frontpageArticles`);
        const newsFrontpage = await response.json();
        return newsFrontpage
    }
    catch (err) {
        console.log(err)
    }
}