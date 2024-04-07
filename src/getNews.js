import HOST_BACKEND from './hostBackend.js';

export async function getFrontpageNews() {
    try {
        const response = await fetch(`${HOST_BACKEND}/frontpageArticlesFE`);
        const responseBody = await response.json();

        if(responseBody.error) {
            alert(responseBody.error.message);
            return null
        }
        if(responseBody.frontpageArticles) {
            return responseBody.frontpageArticles;
        }
    }
    catch(error) {
        alert(error.message);
        return null;
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

export async function getNewsByCategory(category, pageNum) {

    const options = { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            category: category,
            pageNum: pageNum
        })
    }

    try {
        const response = await fetch(`${HOST_BACKEND}/${pageNum.isLast == true? 'lastPageFE' : 'category'}`, options);
        const responseBody = await response.json();
        console.log(responseBody)
        if(responseBody.error) {
            alert(responseBody.error.message)
            return null
        }
        if(responseBody.newsMsg) {
            return responseBody.newsMsg
        }
    }
    catch (error) {
        alert(error.message)
        return null
    }

    /* try {
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
    } */

}