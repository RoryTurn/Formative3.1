console.log('poo');
const key = '1a703a9bba8059208c952443967c3e8a';
 
var query= "top-headlines?";
var term= "topic=breaking-news"
var nation= "country=nz";
var max = "max=20";
var language= "lang=en";



$('#countryMenu li a').click(function(){
   var x=  $(this).attr('rel'); // Get the ref attribute from the "a" element
    
    countryChanger(x);
});
function countryChanger(x){

    

    if  (x === "1"){
    
nation = "country=nz";
var web = "https://gnews.io/api/v4/" + query + nation + "?" + language + "?" + max + "&token=" + key;
console.log(nation); 
console.log(web);
ajaxFunc(nation, web);   
    

    }
 if (x  === "2"){
        
        nation = "country=de";
        var web = "https://gnews.io/api/v4/" + query + nation + "?" + language + "?" + max + "&token=" + key;
        console.log(nation, web);
        ajaxFunc(nation, web);   
        }
if (x  === "3"){
        
        nation = "country=gb";
        var web = "https://gnews.io/api/v4/" + query + nation + "?" + language + "?" + max + "&token=" + key;
        console.log(nation, web);
        ajaxFunc(nation, web);   
        }
 if (x  === "4"){
        
        nation = "country=jp"
        var web = "https://gnews.io/api/v4/" + query + nation + "?" + language + "?" + max + "&token=" + key;
        console.log(nation, web);
        ajaxFunc(nation, web);   

        }
 if (x === "5"){
      
        nation = "country=us";
        var web = "https://gnews.io/api/v4/" + query + nation + "?" + language + "?" + max + "&token=" + key;        
        console.log(nation, web);
        ajaxFunc(nation, web);   
        

        }
        
        
};

$('#categoryMenu li a').click(function(){
    var z=  $(this).attr('rel'); // Get the ref attribute from the "a" element
     console.log(z);
     categoryChanger(z);
     
 });
 function categoryChanger(z){
 
    
 
     if  (z === "1"){
     console.log("One")
     var query= "top-headlines?";
     var web = "https://gnews.io/api/v4/" + query + nation + "?" + language + "?" + max + "&token=" + key;
     ajaxFunc(query, web); 
     }
  if (z  === "2"){
         console.log("Two")
         var query= "search?q=technology&/";
         var web = "https://gnews.io/api/v4/" + query + nation + "?" + language + "?" + max + "&token=" + key;
         ajaxFunc(query, web);          
         }
 if (z  === "3"){
         console.log("Three")
         query = "search?q=science&/";
         var web = "https://gnews.io/api/v4/" + query + nation + "?" + language + "?" + max + "&token=" + key;
         ajaxFunc(query, web);          
         }
  if (z  === "4"){
         console.log("Four")
         query = "search?q=entertainment&/";
         var web = "https://gnews.io/api/v4/" + query + nation + "?" + language + "?" + max + "&token=" + key;
         ajaxFunc(query, web);         
         }
  if (z  === "5"){
         console.log("Five")
         query = "search?q=health&/";
         var web = "https://gnews.io/api/v4/" + query + nation + "?" + language + "?" + max + "&token=" + key;
         ajaxFunc(query, web);          
         }

     
 };


 function headerChangerCountry(){

 }
 function topicChangerCountry(){
        
}
function ajaxFunc(nation, web){
$.ajax({
    type: "GET",
    url: web,    
    success:  function (data){
        
        console.log(nation);
        console.log(query);
        console.log(web);
        console.log(data.articles[0].title);
        // $(example).empty().append(
        //     `
        //     <h1>Artice One: ${data.articles[0].title}</h1>

        //     <p>Text: ${data.articles[0].description}</p>
        //     <p>Date: ${data.articles[0].publishedAt}</p>
        //     <img src="${data.articles[0].image}">
        //     <p>Origin: ${data.articles[0].source.name}</p>

        //     <p>Web Address: ${data.articles[0].source.url}</p>
            
        //     `

        // );

    }

});

};