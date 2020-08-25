const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
 const resultsEl = document.getElementById('ImgContainer');

searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const q = searchInput.value;
    search(q)

}) 

    function search(q) {

                
        // Variables to hold search parameters
        const apikey = "YfQo69W7isZ6aYVWbEmOdEpqjnho48fR";
        const path = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}`

            fetch(path).then(function(SearchResults) {
                return SearchResults.json()
            }).then(function(json) {
            //   console.log(json.data[0].images.fixed_width.url)
               
                let resultsHTML = "";
                    json.data.forEach(function(obj) {
                        console.log(obj)

                            const url = obj.images.fixed_width.url
                            const width = obj.images.fixed_width.width
                            const height = obj.images.fixed_width.height
                            const title = obj.title 
                            
                                resultsHTML += `<img 
                                src="${url}"
                                width="${width}"
                                height="${height}"
                                alt="${title}
                                >
                                `
                                console.log(resultsHTML)
                                 
                    })
                    

                    resultsEl.innerHTML = resultsHTML
            })
                       

    }

