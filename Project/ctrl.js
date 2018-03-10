var ctrlModule = ((data, ui) => {

    $(function () {
        let url = data.showsAll.url;

        let request = $.ajax({
            url: url,
            method: "GET"
        });

        request.done(function (response) {
            console.log(response);

            let list50 = data.createShows(response);
            ui.appendShows(list50);

        });
        request.fail(function () {
            alert(`Your request failed!`)
        });

    })

    const searchInput = $("input");
    let searchVal = searchInput.val();
    let urlSearch = data.showsAll.urlSearch;

    searchInput.on("keyup", event => {

        if (searchInput.val().length < 3) {
            return;
        }

        console.log(`${}`)
        // console.log(searchInput.val());
    });







})(dataModule, uiModule);