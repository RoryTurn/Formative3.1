console.log('poo');
const key = '1a703a9bba8059208c952443967c3e8a';
var term = "top-headlines"
var max = "max=20";
var nation= "country=nz";
const web = "https://gnews.io/api/v4/" + term + "?" + nation + "?" + max + "&token=" + key;


$.ajax({
    type: "GET",
    url: web,    
    success:  function (data){
        console.log(data.articles[0]);
        $(example).empty().append(
            `
            <h1>Artice One: ${data.articles[0].title}</h1>

            <p>Text: ${data.articles[0].description}</p>
            <p>Date: ${data.articles[0].publishedAt}</p>
            <img src="${data.articles[0].image}">
            <p>Origin: ${data.articles[0].source.name}</p>

            <p>Web Address: ${data.articles[0].source.url}</p>
            
            `

        );

    }

});

