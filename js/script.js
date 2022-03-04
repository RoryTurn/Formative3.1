
//  global variables------------------------------------------------------------------------
// const key = `1a8f15bb3f1fe7bf3038e4129d028472`;
const key = '1a703a9bba8059208c952443967c3e8a';

var query= "top-headlines?";
var nation= "country=nz";
var max = "max=6";
var language= "lang=en";

// country changer functions------------------------------------------------------------------------------

$('#countryMenu li a').click(function(){
   var x=  $(this).attr('rel'); // Get the ref attribute from the "a" element
    
    countryChanger(x);
});
function countryChanger(x){

    

    if  (x === "1"){
    
       nation = "country=nz";
       var web = "https://gnews.io/api/v4/" + query + "&" + nation + "&" + language + '&' + max + "/&token=" + key;
       console.log(nation); 
       console.log(web);
       document.getElementById("navCountry").innerHTML= "Country: New Zealand";
       document.getElementById("navTopic").innerHTML= "Topic: Top Headlines";
       
       ajaxFunc(nation, web);   
    

    }
 if (x  === "2"){
        
        nation = "country=au";
        var web = "https://gnews.io/api/v4/" + query + "&" + nation + "&" + language + '&' + max + "/&token=" + key;
        console.log(nation, web);
        document.getElementById("navCountry").innerHTML= "Country: Australia";
        document.getElementById("navTopic").innerHTML= "Topic: Top Headlines";
        
        ajaxFunc(nation, web);   
        }
if (x  === "3"){
        
        nation = "country=gb";
        var web = "https://gnews.io/api/v4/" + query + "&" + nation + "&" + language + '&' + max + "/&token=" + key;
        console.log(nation, web);
        document.getElementById("navCountry").innerHTML= "Country: United Kingdom";
        document.getElementById("navTopic").innerHTML= "Topic: Top Headlines";
        
        ajaxFunc(nation, web);   
        }
 if (x  === "4"){
        
        nation = "country=ca"
        var web = "https://gnews.io/api/v4/" + query + "&" + nation + "&" + language + '&' + max + "/&token=" + key;
        console.log(nation, web);
        document.getElementById("navCountry").innerHTML= "Country: Canada";
        document.getElementById("navTopic").innerHTML= "Topic: Top Headlines";
        
        ajaxFunc(nation, web);   

        }
 if (x === "5"){
      
        nation = "country=us";
        var web = "https://gnews.io/api/v4/" + query + "&" + nation + "&" + language + '&' + max + "/&token=" + key;      
        console.log(nation, web);
        document.getElementById("navCountry").innerHTML= "Country: United States";
        document.getElementById("navTopic").innerHTML= "Topic: Top Headlines";        
        ajaxFunc(nation, web);     

        }
        
        
};
// topic changer functions------------------------------------------------------------------
$('#categoryMenu li a').click(function(){
    var z=  $(this).attr('rel'); // Get the ref attribute from the "a" element
     console.log(z);
     categoryChanger(z);     
 });
 function categoryChanger(z){
     if  (z === "1"){
     console.log("One")
     var query= "top-headlines?";
     var web = "https://gnews.io/api/v4/" + query + "&" + nation + "&" + language + '&' + max + "/&token=" + key;
     document.getElementById("navTopic").innerHTML= "Topic: Top Headlines";
     ajaxFunc(query, web); 
     }
  if (z  === "2"){
         console.log("Two")
         var query= "search?q=technology";
         var web = "https://gnews.io/api/v4/" + query + "&" + nation + "&" + language + '&' + max + "/&token=" + key;
         document.getElementById("navTopic").innerHTML= "Topic: Technology News";
         ajaxFunc(query, web);          
         }
 if (z  === "3"){
         console.log("Three")
         query = "search?q=science";
         var web = "https://gnews.io/api/v4/" + query + "&" + nation + "&" + language + '&' + max + "/&token=" + key;
         document.getElementById("navTopic").innerHTML= "Topic: Science News";
         ajaxFunc(query, web);          
         }
  if (z  === "4"){
         console.log("Four")
         query = "search?q=entertainment";
         var web = "https://gnews.io/api/v4/" + query + "&" + nation + "&" + language + '&' + max + "/&token=" + key;
         document.getElementById("navTopic").innerHTML= "Topic: Entertainment News";
         ajaxFunc(query, web);         
         }
  if (z  === "5"){
         console.log("Five")
         query = "search?q=health";
         var web = "https://gnews.io/api/v4/" + query + "&" + nation + "&" + language + '&' + max + "/&token=" + key;
         document.getElementById("navTopic").innerHTML= "Topic: Health News";
         ajaxFunc(query, web);          
         }
 };


// ajax function (gets data from gnews.io and displays it)--------------------------------------------------------------------------
function ajaxFunc(nation, web){
$.ajax({
    type: "GET",
    url: web,    
    success:  function (data){
       //     emptier for main welcome message
     $('#cardContent').empty();   
// generates numbers for news cards
function cardLoop(){
       let i = 0;
       for(i = 0; i<data.articles.length; i++){
               
       generateCard(i);       
       }
};  
cardLoop();
// card generator-----------------------------------------------------------------------------

function generateCard(i){
      
       $('#cardContent').append(
           `
                   <div class="card">
                       <div class="img-container">
                       <img class="card-img-top" src="${data.articles[i].image}" alt="Card image cap">

                       </div>    
                       <div class="card-body">
                                   <div class="card-body-titlebox">
                                        <h5 class="card-title">${data.articles[i].title}</h5>
                                   </div>
                                   <div class="card-body-horizontalbox">
                                        <div class="card-body-textbox">
                                          <p class="card-text">${data.articles[i].source.name}</p>
                                          <p class="card-text">${data.articles[i].publishedAt}</p>
                                          <p id="meMe" rel=${i}></p>
                                        </div>
                                        <div class="card-body-buttonbox">
                                          <button type="button" value=${i} id="buttonbody" class="btn btn-primary" data-toggle="modal" data-target="#cardModal">
                                          Click for Details</button>
                                        </div>
                                   </div>

                       </div>
                   </div>  
           `
           
       );

       // modal generator---------------------------------------------------------------------------------

       $(".btn-primary").click(function(){
              let k =  $(this).attr('value');
              console.log(k);
       document.getElementById('modalTitle').innerHTML= `${data.articles[k].title}`;
       document.getElementById('modalSource').innerHTML= `${data.articles[k].source.name}`;

       $('#modalBody').empty().append(
              `
              <div class="body">
                     <div class="body_picbox">
                              <img class="body_picbox_image" id="modalImage" src="${data.articles[k].image}">
                     </div>
                     <div class="body_textbox">
                     <div class="body_textbox_titles">                     
                     <p class="body_textbox_titles_text" id="modalDate">${data.articles[k].publishedAt}</p>
       
                  
                     </div>
                     <div class="body_textbox_body">
                     <p class="body_textbox_body_text" id="modalDesc">${data.articles[k].description}</p>
                     </div>
       
                              
                     </div>
              </div>
       `
                     )
                            
               });    

              
       
              };


       }

});

};
// end of script-------------------------------------------------------------------------------------------------------



