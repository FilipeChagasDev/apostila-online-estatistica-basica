/*!
* Start Bootstrap - Simple Sidebar v6.0.5 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', 
    function(event)
    {
        // Toggle the side navigation
        const sidebarToggle = document.body.querySelector('#sidebarToggle');
        if (sidebarToggle) {
            // Uncomment Below to persist sidebar toggle between refreshes
            if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
                document.body.classList.toggle('sb-sidenav-toggled');
            }

            sidebarToggle.addEventListener('click', event => {
                event.preventDefault();
                document.body.classList.toggle('sb-sidenav-toggled');
                localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
            });
        }

        getAndAddArticles();

        if(getURLParam("article") === null)
        {
            showDefaultArticle();
        }
        else
        {
            let articleFileName = getURLParam("article");
            console.log(articleFileName);
        }
    }
);

function showDefaultArticle()
{
    getDefaultArticle(
        function(object)
        {
            //showArticle(object["title"], object["filename"]);
        }
    );
}

function getDefaultArticle(callback)
{
    getArticlesListAsync(
        function(list)
        {
            callback(list[0]);
        }
    );
}

function getAndAddArticles()
{
    getArticlesListAsync( //function from articles.js
        function(list)
        {
            list.forEach(
                //One object {"title":"Title", "filename":"filename.md"} for each article.
                function(object, index)
                {
                    addArticle(object["title"], object["filename"]);
                }
            );
        }
    );
}

function addArticle(title, filename)
{
    //Add article to the sidebar

    let el = document.createElement("a");
    el.setAttribute("class", "list-group-item list-group-item-action list-group-item-light p-3");
    el.setAttribute("href", "index.html?article="+filename);
    el.text = title

    document.getElementById("list").appendChild(el);
}

function getURLParam(param)
{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}


