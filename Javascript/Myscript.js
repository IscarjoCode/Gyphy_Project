$(document).ready(function () {
    console.log('ready function...')
    var apikey = "YfQo69W7isZ6aYVWbEmOdEpqjnho48fR";

    // $('#btn').click(function() {alert ('please work'); });

    function getImg() {
        console.log('getImg function...')
        $("#ImgContainer").empty();
        var query = $('#search-input').val();
        var limit = $('#search-input-2').val();
        console.log("limit="+limit)

        $.get(`https://api.giphy.com/v1/gifs/search?api_key=YfQo69W7isZ6aYVWbEmOdEpqjnho48fR&q=${query}&limit=${limit}`, function (response) {
            // console.log('received data...')
            console.log(`https://api.giphy.com/v1/gifs/search?api_key=YfQo69W7isZ6aYVWbEmOdEpqjnho48fR&q=${query}&limit=${limit}`)
            // console.log(response.data[1].images.original.url)
            //Its Pulling Data put not going through the loop properaly
            // i = 0;
            // while (i < limit){
            //     $('#ImgContainer').html("<div><img src='" + response.data[i].images.original.url + "'></div>")
            //     i++
            // }

            
             for (i = 0; i < 30; i++) {
                console.log(response)
                $('#ImgContainer').append("<span class='wrapIt'><img src='" + response.data[i].images.original.url + "'style ='height:250px; width: 250px; '></span>")
            }

        })
    }
    $('#btn').click(function () {

        console.log('click function...')

        getImg();
    })


})