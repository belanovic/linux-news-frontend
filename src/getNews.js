import HOST_BACKEND from './hostBackend.js';

export async function getFrontpageNews() {
    try {
        const response = await fetch(`${HOST_BACKEND}/frontpageArticles`);
        const newsFrontpage = await response.json();
        return newsFrontpage
    }
    catch (err) {
        console.log(err)
    }
}
export async function getArticle(id) {
    try {
        const response = await fetch(`${HOST_BACKEND}/oneArticle/${id}`);
        const oneArticle = await response.json();
        return oneArticle
    }
    catch(err) {
        console.log(err);
    }
}