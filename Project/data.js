const dataModule = (() => {

    const showsAll = {
        url: "http://api.tvmaze.com/shows",
        urlSearch: " http://api.tvmaze.com/search/shows?q="
    };

    class Show {
        constructor(id, name, image = "") {
            this.id = id;
            this.name = name;
            this.image = image;
        }
    }

    const createShows = (shows) => {
        let shows50 = [];
        shows.forEach((element, index) => {
            if (element.rating.average > 6) {
                if (index < 50) {
                    let newShow = new Show(element.id, element.name, element.image.medium);
                    shows50.push(newShow);
                }
            }
        });

        return shows50;
    };


    const searchShow = (showList) => {
        console.log(showList);
        return showList.map(({ show }, index) => {
            if (index < 10) {
                return new Show(show.id, show.name);
            }
        })
    };





    return {
        showsAll,
        createShows,
        searchShow
    }


})();