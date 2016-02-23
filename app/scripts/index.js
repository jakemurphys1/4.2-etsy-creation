var $ = require("jquery");
var handlebars = require('handlebars');

var source   = $("#NewItem-template").html();
var template = handlebars.compile(source);

var context = {image: "https:\/\/img1.etsystatic.com\/048\/0\/9997414\/il_75x75.674054119_sf0s.jpg",
title: "Groomsmen Gift \u2013 Personalized Whiskey Decanter \u2013 Engraved",
manufacturer: "Jim Beam",
price:"26.78",
currency_code:"USD",
};
$('.images').html( template(context));
