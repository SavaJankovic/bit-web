var ctrlModule = ((data, ui) => {

    $(function () {
        let url = data.showsAll.url;

        let request = $.ajax({
            url: url,
            method: "GET"
        });

        request.done(function (response) {

            let list50 = data.createShows(response);
            ui.appendShows(list50);

        });
        request.fail(function () {
            alert(`Your request failed!`)
        });

    });

    const searchInput = $("input");
    let urlSearch = data.showsAll.urlSearch;

    searchInput.on("keyup", event => {
        let searchVal = searchInput.val();

        if (searchInput.val().length < 3) {
            return;
        }
        
        let type = `${urlSearch}${searchVal}`;

        let requestSearch = $.get(type).done(response => {
            let list = data.searchShow(response);
            ui.appendSearchList(list);

        });



    });







})(dataModule, uiModule);