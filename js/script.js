console.log('poo');
const key = `1a8f15bb3f1fe7bf3038e4129d028472`;
// const key = '1a703a9bba8059208c952443967c3e8a';
 
var query= "top-headlines?";
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
       var web = "https://gnews.io/api/v4/" + query + "&" + nation + "&" + language + "/" + max + "&token=" + key;
       console.log(nation); 
       console.log(web);
       document.getElementById("navCountry").innerHTML= "Country: New Zealand";
       
       ajaxFunc(nation, web);   
    

    }
 if (x  === "2"){
        
        nation = "country=de";
        var web = "https://gnews.io/api/v4/" + query + "&" + nation + "&" + language + "/" + max + "&token=" + key;
        console.log(nation, web);
        document.getElementById("navCountry").innerHTML= "Country: Germany";
        
        ajaxFunc(nation, web);   
        }
if (x  === "3"){
        
        nation = "country=gb";
        var web = "https://gnews.io/api/v4/" + query + "&" + nation + "&" + language + "/" + max + "&token=" + key;
        console.log(nation, web);
        document.getElementById("navCountry").innerHTML= "Country: United Kingdom";
        
        ajaxFunc(nation, web);   
        }
 if (x  === "4"){
        
        nation = "country=jp"
        var web = "https://gnews.io/api/v4/" + query + "&" + nation + "&" + language + "/" + max + "&token=" + key;
        console.log(nation, web);
        document.getElementById("navCountry").innerHTML= "Country: Japan";
        
        ajaxFunc(nation, web);   

        }
 if (x === "5"){
      
        nation = "country=us";
        var web = "https://gnews.io/api/v4/" + query + "&" + nation + "&" + language + "/" + max + "&token=" + key;       
        console.log(nation, web);
        document.getElementById("navCountry").innerHTML= "Country: United States";
        
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
     document.getElementById("navTopic").innerHTML= "Topic: Top Headlines";
     ajaxFunc(query, web); 
     }
  if (z  === "2"){
         console.log("Two")
         var query= "search?q=technology";
         var web = "https://gnews.io/api/v4/" + query + "&" +  nation + "?" + language + "?" + max + "&token=" + key;
         document.getElementById("navTopic").innerHTML= "Topic: Technology News";
         ajaxFunc(query, web);          
         }
 if (z  === "3"){
         console.log("Three")
         query = "search?q=science";
         var web = "https://gnews.io/api/v4/" + query + "&" +  nation + "?" + language + "?" + max + "&token=" + key;
         document.getElementById("navTopic").innerHTML= "Topic: Science News";
         ajaxFunc(query, web);          
         }
  if (z  === "4"){
         console.log("Four")
         query = "search?q=entertainment";
         var web = "https://gnews.io/api/v4/" + query + "&" +  nation + "?" + language + "?" + max + "&token=" + key;
         document.getElementById("navTopic").innerHTML= "Topic: Entertainment News";
         ajaxFunc(query, web);         
         }
  if (z  === "5"){
         console.log("Five")
         query = "search?q=health";
         var web = "https://gnews.io/api/v4/" + query + "&" + nation + "&" + language + "/" + max + "&token=" + key;
         document.getElementById("navTopic").innerHTML= "Topic: Health News";
         ajaxFunc(query, web);          
         }

     
 };



function ajaxFunc(nation, web){
$.ajax({
    type: "GET",
    url: web,    
    success:  function (data){
     $('#cardContent').empty();   
        console.log(nation);
        console.log(query);
        console.log(web);
        console.log(data.articles.length);
function cardLoop(){
       let i = 0;
       for(i = 0; i<data.articles.length; i++){
              
       generateCard(i);
       modalFill(i);
       }
       
};  
cardLoop();
function generateCard(i){

       $('#cardContent').append(
           `
                   <div class="card card--style" style="width: 18rem;">
                       <div class="img-container">
                       <img class="card-img-top" src="${data.articles[i].image}" alt="Card image cap">
                       </div>    
                       <div class="card-body">
                                        <h5 class="card-title">${data.articles[i].title}</h5>
                                        <p class="card-text">${data.articles[i].source.name}</p>
                                        <p class="card-text">Danger Level: ${data.articles[i].publishedAt}</p>
                                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                                        Click for Details</button>
                       </div>
                   </div>  
           `
           
       );
       
   
   };
        
function modalFill(i){
       var y = i;
       document.getElementById("modalTitle").innerHTML= `${data.articles[y].title}`;
       document.getElementById("modalSource").innerHTML= `${data.articles[y].source.name}`;
       document.getElementById("modalURL").href = `${data.articles[y].url}`;
     
       $('#modalBody').empty().append(
              `
              <div class="body">
                     <div class="body_picbox">
                              <img class="body_picbox_image" id="modalImage" src="${data.articles[y].image}">
                     </div>
                     <div class="body_textbox">
                     <div class="body_textbox_titles">
                     <p class="body_textbox_titles_text" id="modalCountry"></p>
                     <p class="body_textbox_titles_text" id="modalDate">${data.articles[y].publishedAt}</p>
       
                  
                     </div>
                     <div class="body_textbox_body">
                     <p class="body_textbox_body_text" id="modalDesc">${data.articles[y].description}</p>
                     </div>
       
                              
                     </div>
              </div>
       `
       )};
     

    }

});

};

// function link(){
//        document.getElementById("modalURL").href = "http://www.google.com";
// };
// link();

