function getArticleGenerator(articles) {

    //capture elements
    const output = document.querySelector('#content');
    const copyArticles = articles.slice();
    //console.log(copyArticles);

    //helper function

    return function showNext() {

        if (copyArticles[0]) {
            const article = document.createElement('article');
            article.textContent = copyArticles.shift();
            output.appendChild(article);
        }

        return showNext;
    };
}
