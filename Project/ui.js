const uiModule = (() => {


    const appendShows = (list) => {
        list.forEach(element => {
            const img = element.image;
            const title = element.name;
            let divShow = `<div class="col-md-4 col-show"><img src="${img}"><h5>${title}</h5></div>`;
            let mainRow = $("#main-row");
            mainRow.append(divShow);
        });
    };

    const appendSearchList = (listTen) => {
        listTen.forEach(element => {
            const movieName = element.name;
            console.log(movieName);


        });
    };

    return {
        appendShows,
        appendSearchList
    }
})();