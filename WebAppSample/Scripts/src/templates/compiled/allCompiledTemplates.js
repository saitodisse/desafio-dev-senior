this["JST"] = this["JST"] || {};

this["JST"]["./WebAppSample/Scripts/src/templates/inputAddress.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\r\n    <div class=\"form-group col-xs-3\">\r\n        <label for=\"street\">Street name:</label>\r\n        <input class=\"form-control\" id=\"street\" placeholder=\"Rua Augusta\" value=\"Augusta\">\r\n    </div>\r\n    <div class=\"form-group col-xs-1\">\r\n        <label for=\"houseNumber\">Number:</label>\r\n        <input class=\"form-control\" id=\"houseNumber\" placeholder=\"1000\" value=\"1000\">\r\n    </div>\r\n    <div class=\"form-group col-xs-1\">\r\n        <label for=\"state\">State:</label>\r\n        <input class=\"form-control\" id=\"state\" placeholder=\"SP\" value=\"SP\">\r\n    </div>\r\n    <div class=\"form-group col-xs-2\">\r\n        <label for=\"cityName\">City:</label>\r\n        <input class=\"form-control\" id=\"cityName\" placeholder=\"São Paulo\" value=\"São Paulo\">\r\n    </div>\r\n    <div class=\"form-group col-xs-1\">\r\n        <label for=\"city\">&nbsp;</label>\r\n        <button id=\"btnSearchAddress\" class=\"btn btn-primary\">Search</button>\r\n    </div>\r\n</div>\r\n";
  });

this["JST"]["./WebAppSample/Scripts/src/templates/inputVehicleInfoItemView.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\r\n    <div class=\"form-group col-xs-2\">\r\n        <label for=\"gasPrice\">Fuel Price ($$):</label>\r\n        <input class=\"form-control\" id=\"gasPrice\" placeholder=\"1.92\" value=\"1.92\">\r\n    </div>\r\n    <div class=\"form-group col-xs-3\">\r\n        <label for=\"carFuelConsumption\">Avg. Consumption (km/l):</label>\r\n        <input class=\"form-control\" id=\"carFuelConsumption\" placeholder=\"10\" value=\"10\">\r\n    </div>\r\n\r\n    <div class=\"form-group col-xs-3\">\r\n        <label for=\"routeType\">Route Type:</label>\r\n\r\n        <!-- Single button -->\r\n        <div class=\"btn-group\">\r\n            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r\n                Select Route Type <span class=\"caret\"></span>\r\n            </button>\r\n            <ul class=\"dropdown-menu\" role=\"menu\">\r\n                <li><a id=\"fastestRoute\" href=\"#\">Fastest Route</a></li>\r\n                <li><a id=\"avoidTrafic\" href=\"#\">Avoid Trafic</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group col-xs-1\">\r\n        <label>&nbsp;</label>\r\n        <button id=\"btnCalcRoute\" class=\"btn btn-success\">Get Route</button>\r\n    </div>\r\n</div>\r\n";
  });

this["JST"]["./WebAppSample/Scripts/src/templates/routeResultItemView.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h3>Km total</h3>\r\n<p>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.routeTotals)),stack1 == null || stack1 === false ? stack1 : stack1.totalDistance)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\r\n<h3>Cost total</h3>\r\n<p>";
  if (helper = helpers.totalFuelCost) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalFuelCost); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\r\n";
  return buffer;
  });

this["JST"]["./WebAppSample/Scripts/src/templates/searchAddressResultCompositeView.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <h4>Search result</h4>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th>\r\n                        street\r\n                    </th>\r\n                    <th>\r\n                        houseNumber\r\n                    </th>\r\n                    <th>\r\n                        district\r\n                    </th>\r\n                    <th>\r\n                        city\r\n                    </th>\r\n                    <th>\r\n                        state\r\n                    </th>\r\n                    <th>\r\n                        zip\r\n                    </th>\r\n                    <th>\r\n                        Long\r\n                    </th>\r\n                    <th>\r\n                        Lat\r\n                    </th>\r\n                </tr>\r\n            </thead>\r\n            <tbody></tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n";
  });

this["JST"]["./WebAppSample/Scripts/src/templates/searchAddressResultItemView.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<td>\r\n    <a class=\"addressLink\" id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\">";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.address)),stack1 == null || stack1 === false ? stack1 : stack1.street)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\r\n</td>\r\n<td>\r\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.address)),stack1 == null || stack1 === false ? stack1 : stack1.houseNumber)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n</td>\r\n<td>\r\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.address)),stack1 == null || stack1 === false ? stack1 : stack1.district)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n</td>\r\n<td>\r\n    "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.address)),stack1 == null || stack1 === false ? stack1 : stack1.city)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n</td>\r\n<td>\r\n    "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.address)),stack1 == null || stack1 === false ? stack1 : stack1.city)),stack1 == null || stack1 === false ? stack1 : stack1.state)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n</td>\r\n<td>\r\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.address)),stack1 == null || stack1 === false ? stack1 : stack1.zip)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n</td>\r\n<td>\r\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.point)),stack1 == null || stack1 === false ? stack1 : stack1.x)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n</td>\r\n<td>\r\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.point)),stack1 == null || stack1 === false ? stack1 : stack1.y)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n</td>\r\n";
  return buffer;
  });

this["JST"]["./WebAppSample/Scripts/src/templates/selectedAddressesCompositeView.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <h4>Selected Addresses</h4>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n                <tr>\r\n                    <th>\r\n                        street\r\n                    </th>\r\n                    <th>\r\n                        houseNumber\r\n                    </th>\r\n                    <th>\r\n                        district\r\n                    </th>\r\n                    <th>\r\n                        city\r\n                    </th>\r\n                    <th>\r\n                        state\r\n                    </th>\r\n                    <th>\r\n                        zip\r\n                    </th>\r\n                    <th>\r\n                        Long\r\n                    </th>\r\n                    <th>\r\n                        Lat\r\n                    </th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n";
  });

this["JST"]["./WebAppSample/Scripts/src/templates/selectedAddressesItemView.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<td>\r\n    <a class=\"addressLink\" id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\">";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.address)),stack1 == null || stack1 === false ? stack1 : stack1.street)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\r\n</td>\r\n<td>\r\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.address)),stack1 == null || stack1 === false ? stack1 : stack1.houseNumber)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n</td>\r\n<td>\r\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.address)),stack1 == null || stack1 === false ? stack1 : stack1.district)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n</td>\r\n<td>\r\n    "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.address)),stack1 == null || stack1 === false ? stack1 : stack1.city)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n</td>\r\n<td>\r\n    "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.address)),stack1 == null || stack1 === false ? stack1 : stack1.city)),stack1 == null || stack1 === false ? stack1 : stack1.state)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n</td>\r\n<td>\r\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.address)),stack1 == null || stack1 === false ? stack1 : stack1.zip)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n</td>\r\n<td>\r\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.point)),stack1 == null || stack1 === false ? stack1 : stack1.x)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n</td>\r\n<td>\r\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.point)),stack1 == null || stack1 === false ? stack1 : stack1.y)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n</td>\r\n";
  return buffer;
  });