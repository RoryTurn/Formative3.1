console.log('poo');
const key = '1a703a9bba8059208c952443967c3e8a';
var term = "top-headlines"
var max = "max=20";
var nation= "";
const web = "https://gnews.io/api/v4/" + term + "?" + nation + "?" + max + "&token=" + key;
const country= [];
// function countryChanger(){
// if (${countryMenu}.value === "1"){
// console.log("NZ")}
// if ($countryMenu.value === "2"){
//     console.log("GE")
//     }
// if ($countryMenu.value === "3"){
//     console.log("UK")
//     }
// if ($countryMenu.value === "4"){
//     console.log("JA")
//     }  
// if ($countryMenu.value === "5"){
//     console.log("US")
//     }  
// }
// countryChanger();
$('#countryMenu li a').click(function(){
   var x=  $(this).attr('rel'); // Get the ref attribute from the "a" element
    console.log(x);
    countryChanger(x);
});
function countryChanger(x){



    if  (x === "1"){
    console.log("NZ")

    }
 if (x  === "2"){
        console.log("GE")
        }
if (x  === "3"){
        console.log("UK")
        }
 if (x  === "4"){
        console.log("JA")
        }
 if (x === "5"){
        console.log("US")
        }
    
};

$('#categoryMenu li a').click(function(){
    var z=  $(this).attr('rel'); // Get the ref attribute from the "a" element
     console.log(z);
     countryChanger(z);
 });
 function countryChanger(z){
 
 
 
     if  (z === "1"){
     console.log("One")
 
     }
  if (z  === "2"){
         console.log("Two")
         }
 if (z  === "3"){
         console.log("Three")
         }
  if (z  === "4"){
         console.log("Four")
         }

     
 };


// $.ajax({
//     type: "GET",
//     url: web,    
//     success:  function (data){
//         console.log(data.articles[0]);
//         $(example).empty().append(
//             `
//             <h1>Artice One: ${data.articles[0].title}</h1>

//             <p>Text: ${data.articles[0].description}</p>
//             <p>Date: ${data.articles[0].publishedAt}</p>
//             <img src="${data.articles[0].image}">
//             <p>Origin: ${data.articles[0].source.name}</p>

//             <p>Web Address: ${data.articles[0].source.url}</p>
            
//             `

//         );

//     }

// });

