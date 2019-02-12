$(document).ready(onReady)

function onReady() {

    //Global variable for data
    let data;

    //Global boolean variable to sort stars count 
    let sort = true;

    //Global variable cache result of jQuery selection
    const $list = $('#list');

    //fetch data from GitHub
    async function getData() {
        let response = await fetch('https://github-trending-api.now.sh/repositories');
        let data = await response.json();
        return data;
    }

    //Displaying results on page- repo name, description, and stars count, 
    getData()
        .then(response => {
            data = response;
            $list.empty();
            data.forEach(listElement)
                .catch((error) => {
                    console.log('error with getting data', error);
                });
        });

    //Toggle star counts from descending/ascending 
    $('.sorting').on('click', function () {
        $list.empty();

        if (sort === true) {
            //Rotate caret symbol down
            $('.up').css({
                transform: 'rotate(180deg)'
            });

            data.sort(function (a, b) {
                return b.stars - a.stars;
            }).forEach(listElement)

            sort = false
        } else {
            //Rotate caret symbol up
            $('.up').css({
                transform: 'rotate(0deg)'
            });

            data.sort(function (a, b) {
                return a.stars - b.stars;
            }).forEach(listElement);

            sort = true;
        }
    });

    //Display result
    function listElement(element) {
        $list.append(`<tr>
        <td>${element.name}</td>
        <td>${element.description}</td>
        <td>${element.stars}</td>
        </tr>`);
    }
}