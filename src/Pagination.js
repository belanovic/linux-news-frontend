import React, { useContext, useEffect, useState } from 'react';
import PaginationButton from './Pagination-button';
import { context } from './newsContext';
import { getNewsByCategory } from './getNews';
import './style/layout/pagination.css';
import './style/typography/pagination.css';

export default function Pagination({articlesByCategory, setArticlesByCategory, pageNum, setPageNum, category}) {

    const {setShowSiteOverlay} = useContext(context);

    async function pageArticles(category, pageNum) {
        setShowSiteOverlay('flex');
        let newsMsg = await getNewsByCategory(category, pageNum);
        setShowSiteOverlay('none');
        if(newsMsg == null) {
            const promiseResolveA = await setArticlesByCategory([]);
            return null
        }
        const promiseResolveA = await setArticlesByCategory(newsMsg.newsByCategory);
        if(pageNum.isLast == true) return newsMsg.numOfPages
        return true
    }

    const increasePageNum = async () => {
        const retValue = await pageArticles(category, {number: pageNum.number + 1, isLast: false});
        if(retValue == null) return;
        setPageNum((prev) => {
            return {number: prev.number + 1, isLast: false}
        })
    }
    const decreasePageNum = async () => {
        const retValue = await pageArticles(category, {number: pageNum.number - 1, isLast: false});
        if(retValue == null) return;
        setPageNum((prev) => {
            if (prev.number == 1) return prev;
            return {number: prev.number - 1, isLast: false}
        })
    }

    const firstPageNum = async () => {
        const retValue = await pageArticles(category, {number:1, isLast: false});
        if(retValue == null) return;
        setPageNum({number: 1, isLast: false})
    }
    const lastPageNum = async () => {
        const numOfPages = await pageArticles(category, {number: pageNum.number, isLast: true});
        setPageNum({number: numOfPages, isLast: true});
    }


    useEffect(async () => {
        pageArticles(category, pageNum);
        /* newsByCategory.sort((a, b) => a.datePublished - b.datePublished); */
    }, [])

    return (
        <div className="pagination">
                {pageNum.number > 2?
                <PaginationButton 
                    sign= {<i className="fas fa-fast-backward"></i>}
                    clickHandler = {firstPageNum} 
                />
                :
                ''}
                
                {pageNum.number == 1?
                ''
                :
                <PaginationButton
                    sign= {<i className="fas fa-chevron-left"></i>}
                    pageNum={pageNum.number}
                    clickHandler={decreasePageNum}
                />}

                <PaginationButton sign = {pageNum.number} setPageNum={setPageNum}/>
         
                {articlesByCategory.length < 10?
                ''
                :
                <PaginationButton
                sign= {<i className="fas fa-chevron-right"></i>}
                pageNum={pageNum.number}
                clickHandler={increasePageNum}
                />}

                {articlesByCategory.length < 10?
                ''
                :
                <PaginationButton 
                    sign = {<i className="fas fa-fast-forward"></i>}
                    clickHandler = {lastPageNum}  
                />}
                
        </div>
    )
}