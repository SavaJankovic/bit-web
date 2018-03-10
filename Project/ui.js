const uiModule = (() => {


    const appendShows = (list) => {
        list.forEach(element => {
            const img = element.image;
            const title = element.name;
            const id = element.id;
            let divShow = `<div class="col-md-4 col-show"><img src="${img}" data-show-id="${id}" class="singleShow"><h5>${title}</h5></div>`;
            let mainRow = $("#main-row");
            mainRow.append(divShow);
        });
    };

    const appendSearchList = (listTen) => {
        const $newList = $('<ul class="drop-down-li">')

        listTen.forEach(element => {
            const movieName = element.name;
            const id = element.id;

            let liSearch = `<li data-show-id="${id}" >${movieName}</li>`;
            $newList.append(liSearch);
        });

        $(".drop-down-li").replaceWith($newList);
    };

    return {
        appendShows,
        appendSearchList
    }
})();