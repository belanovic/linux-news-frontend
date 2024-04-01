import HOST_BACKEND from './hostBackend.js';

export async function getFrontpageNews() {
    try {
        const response = await fetch(`${HOST_BACKEND}/frontpageArticlesFE`);
        const newsFrontpage = await response.json();
        return newsFrontpage
    }
    catch (err) {
        console.log(err)
    }
}

export async function getArticle(id) {
    try {
        const response = await fetch(`${HOST_BACKEND}/oneArticleFE/${id}`);
        const responseBody = await response.json();
        if(responseBody.error) {
            alert(responseBody.error.message);
            return null
        }
        if(responseBody.articleFound) {
            return responseBody.articleFound;
        }
    }
    catch(error) {
        alert(error.message);
        return null;
    }
}

export async function getNewsByCategory(category) {
    try {
        const response = await fetch(`${HOST_BACKEND}/category/${category}`);
        const responseBody = await response.json();
        return newsByCategory
    }
    catch (error) {
        console.log(error.message)
        return null
    }

    try {
        const response = await fetch(`${HOST_BACKEND}/${pageNum.isLast == true? 'lastPage' : 'allArticles'}`, options);
        checkStatus(response);
        const responseBody = await response.json();
        if(responseBody.error) {
            alert(responseBody.error.message);
            return null
        }
        return responseBody.articlesMsg
    }
    catch (error) {
        alert(error.message)
        return null
    }

}