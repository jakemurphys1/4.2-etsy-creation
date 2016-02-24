var $ = require("jquery");
var handlebars = require('handlebars');
var cursearch="goat";

$("#searchbutton").click(function(){
  console.log("works")
  cursearch=document.getElementById("Searchform").value
  $(".images").empty();
loadeverything();
})



function loadeverything(){


///get array of api information for Etsy
var url = "https://api.etsy.com/v2/listings/active.js?api_key=45imu7si4vir3gwya7ps20ne&keywords=" + cursearch +"&includes=Images,Shop";
function fetchJSONP(url, callback) {
    var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    var script = document.createElement('script');
    window[callbackName] = function(data) {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
    };

    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
}
var totalarray=""
function logData(data){
totalarray=data.results;
getinfo(totalarray)
}
fetchJSONP(url,logData);

function getinfo(array){

  array.forEach(function(value, index, thisarray){
    if(index<thisarray.length){
      var context = {image: thisarray[index].Images[0].url_fullxfull,
      title: thisarray[index].title,
      manufacturer: thisarray[index].Shop.shop_name,
      price: thisarray[index].price,
      currency_code:thisarray[index].currency_code,
      categories:thisarray[index].category_path,
      };
      console.log(context.categories)
      $('.images').append(template(context));
    }

  })
}
}//end of loadeverything

loadeverything();

var source   = $("#NewItem-template").html();
var template = handlebars.compile(source);
