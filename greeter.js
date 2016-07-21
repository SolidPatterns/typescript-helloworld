"use strict";
var Greeter = (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        return this.greetCore(this.greeting);
    };
    Greeter.prototype.greetWithMessage = function (message) {
        return this.greetCore(message);
    };
    Greeter.prototype.greetCore = function (message) {
        return "<h1>" + message + "</h1>";
    };
    return Greeter;
}());

var ProductService = (function () {
    function ProductService() {
        this.apiUri = "https://sifu-dev.project-sunfish.com:443/products/pnir/";
    }
    ProductService.prototype.getProduct = function (country, language, skip, take) {
        var uri = this.apiUri + country + "/" + language + "/" + skip + "/" + take;
        var data = $.get(uri, this.getProductSuccessCallback);
        return data.responseJSON;
    };
    ProductService.prototype.getProductSuccessCallback = function (data) {
        return data;
    };
    return ProductService;
}());
var greeter = new Greeter("Hello, world!");
var productService = new ProductService();
var productJson = productService.getProduct("de", "de", 0, 1);
var products = JSON.parse(productJson);
var product = products[0];
document.body.innerHTML = product.productName;
//# sourceMappingURL=greeter.js.map