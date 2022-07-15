const articleBaseURL = "https://raw.githubusercontent.com/FilipeChagasDev/apostila-online-estatistica-basica/main/articles/"
const articleListFileName = "list.json"

function getArticleURL(filename)
{
    return articleBaseURL + filename
}

function getArticlesListAsync(callback)
{
    httpGetAsync(articleBaseURL + articleListFileName, 
        function(text)
        {
            callback(eval(text));
        }
    );
}

function getMarkdownArticleBodyAsync(filename, callback)
{
    httpGetAsync(getArticleURL(filename), 
        function(markdownText)
        {
            let converter = new showdown.Converter();
            callback(converter.makeHtml(markdownText));
        }
    );
}

function getHTMLArticleBodyAsync(filename, callback)
{
    httpGetAsync(getArticleURL(filename), 
        function(htmlText)
        {
            callback(htmlText);
        }
    );
}