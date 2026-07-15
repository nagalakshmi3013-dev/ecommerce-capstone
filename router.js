const routes = {
    "/": "Home",
    "/products": "Products",
    "/cart": "Cart"
};

function navigate(path){

    history.pushState({}, "", path);
    loadPage();

}

function loadPage(){

    const page = routes[location.pathname] || "404";

    document.getElementById("app").innerHTML =
    `<h1>${page}</h1>`;

}

window.addEventListener("popstate", loadPage);

loadPage();