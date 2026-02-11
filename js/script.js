window.onload = start;

function start(){
    fetch("json/articles.json").then((r) => {
        r.json().then(j => {
            j.articles.forEach(a => createArticleElement(a));
        });
    });
}

function createArticleElement(articleContent){
    const container = document.getElementById("articles-container");
    
    const newArticle = document.createElement("div");
    newArticle.setAttribute("class", "article");

    const title = document.createElement("h2");
    title.innerText = articleContent.title;
    container.appendChild(title);

    const byline = document.createElement("span");
    byline.innerText = articleContent.byline;
    container.appendChild(byline);

    const text = document.createElement("p");
    text.innerText = articleContent.text;
    container.appendChild(text);
    
    container.appendChild(newArticle);
}