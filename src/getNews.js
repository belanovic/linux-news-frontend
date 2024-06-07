import HOST_BACKEND from './hostBackend.js';

export async function getFrontpageNews() {
    try {
        const response = await fetch(`${HOST_BACKEND}/frontpageArticlesFE`);
        const responseBody = await response.json();

        if(responseBody.error) {
            return null
        }
        if(responseBody.frontpageArticles) {
            return responseBody.frontpageArticles;
        }
        return null
    }
    catch(error) {
        return null;
    }
}

export async function getArticle(id) {
    try {
        const response = await fetch(`${HOST_BACKEND}/oneArticleFE/${id}`);
        const responseBody = await response.json();
        if(responseBody.error) {
            return null
        }
        if(responseBody.articleFound) {
            return responseBody.articleFound;
        }
        return null
    }
    catch(error) {
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
        if(responseBody.error) {
            return null
        }
        if(responseBody.newsMsg) {
            return responseBody.newsMsg
        }
        return null
    }
    catch (error) {
        return null
    }

}

export async function getLatestNews(count) {

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            count: count
        })

    }

    try {
        const response = await fetch(`${HOST_BACKEND}/getLatestNews`, options);
        const responseBody = await response.json();

        if(responseBody.error) {
            return null
        }
        if(responseBody.latestNews) {
            return responseBody.latestNews;
        }
    }
    catch(error) {
        return null;
    }
}


export async function getSettings() {

    const options = { 
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    }

    try {
        const response = await fetch(`${HOST_BACKEND}/getSettings`, options);
        const responseBody = await response.json();
        if(responseBody.error) {
            return null;
        }
        if(responseBody.settingsMsg) {
            return responseBody.settingsMsg;
        }
        return null
    }
    catch (error) {
        return null;
    }
}
