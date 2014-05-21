this["JST"] = this["JST"] || {};

this["JST"]["./WebAppSample/Scripts/src/templates/inputAddress.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\r\n    <div class=\"form-group col-xs-3\">\r\n        <label for=\"street\">Street name:</label>\r\n        <input class=\"form-control\" id=\"street\" placeholder=\"Rua Augusta\">\r\n    </div>\r\n    <div class=\"form-group col-xs-1\">\r\n        <label for=\"number\">Number:</label>\r\n        <input class=\"form-control\" id=\"number\" placeholder=\"1000\">\r\n    </div>\r\n    <div class=\"form-group col-xs-1\">\r\n        <label for=\"state\">State:</label>\r\n        <input class=\"form-control\" id=\"state\" placeholder=\"SP\">\r\n    </div>\r\n    <div class=\"form-group col-xs-2\">\r\n        <label for=\"city\">City:</label>\r\n        <input class=\"form-control\" id=\"city\" placeholder=\"São Paulo\">\r\n    </div>\r\n    <div class=\"form-group col-xs-1\">\r\n        <label for=\"city\">&nbsp;</label>\r\n        <button type=\"submit\" class=\"btn btn-default\">Search</button>\r\n    </div>\r\n</div>\r\n";
  });