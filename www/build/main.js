webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/bin/Desktop/IonicProjects/walkthrough/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/bin/Desktop/IonicProjects/walkthrough/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/bin/Desktop/IonicProjects/walkthrough/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n	<ion-title>\n	  About Us!\n	</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<h1> This is a cross-platform development project for CS 1631. </h1>\n<p> This app was made by Bin Dong and Brandon Palonis. We\'re juniors here at Pitt. I have ran out of things to say so I will just attach a github url here to PART of the source code </p>\n	<a href="https://github.com/BinDong132/Milestone3">Github Link</a>\n	<br />\n	<p> You probably cant even see this because it is set to private. Ha. Joke is on you.\n</p>\n\n<p> Here is an image you can enjoy since whoever is reading this page is probably a CS major and had programmed in their life. </p>\n\n<p> When coding: </p>\n<img src="https://wyncode.co/wp-content/uploads/2014/08/171.jpg" alt="Meme">\n\n</ion-content>\n'/*ion-inline-end:"/Users/bin/Desktop/IonicProjects/walkthrough/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/bin/Desktop/IonicProjects/walkthrough/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n	<ion-title>\n	  Contact Us!\n	</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n	<ion-list-header>Follow us on Twitter</ion-list-header>\n	<ion-item>\n	  <ion-icon name="ionic" item-start></ion-icon>\n	  @BinnnnD\n	</ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/bin/Desktop/IonicProjects/walkthrough/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//Code 100 = Cancelled
//Code 333 = Success
//Code 500 = Get Request Failed
//Code 0 = Finish Executing
//Code 700 = iOS Cannot find file
//Code 301 = XML parsed completed
//Code 701 = Android cannot find file
var HomePage = /** @class */ (function () {
    function HomePage(platform, navCtrl, alerCtrl, http, file) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.alerCtrl = alerCtrl;
        this.http = http;
        this.file = file;
    }
    HomePage.prototype.doAlert = function (text) {
        var alert = this.alerCtrl.create({
            title: 'Result',
            message: text,
            buttons: ['Thanks!']
        });
        alert.present();
    };
    HomePage.prototype.doPrompt = function () {
        var _this = this;
        var prompt = this.alerCtrl.create({
            title: 'Translate',
            message: "Enter what you would like to translate!",
            inputs: [
                {
                    name: 'text',
                    placeholder: 'Translate'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        _this.errorCodeCheck(100); //Code 100 = Cancelled
                    }
                },
                {
                    text: 'Translate',
                    handler: function (data) {
                        var datatext = data.text.replace(" ", "%20");
                        _this.http.get('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=zh-CN&dt=t&q=' + datatext)
                            .map(function (res) { return res.json(); }).subscribe(function (data) {
                            var returnString = "";
                            for (var i = 0; i < data[0].length; i++) {
                                returnString += data[0][i][0];
                                if (i != data[0].length - 1) {
                                    returnString += " ";
                                }
                            }
                            _this.displayResult(returnString, 333);
                        }, function (err) {
                            _this.errorCodeCheck(500);
                        });
                        _this.errorCodeCheck(0);
                    }
                }
            ]
        });
        prompt.present();
    };
    HomePage.prototype.displayResult = function (returnString, errorCode) {
        document.getElementById("textfield").innerHTML = "Translated to: <br />" + returnString;
        document.getElementById("divblock").setAttribute("style", "display:block");
        document.getElementById("textfield").setAttribute("style", "border-style: double");
        this.errorCodeCheck(errorCode);
    };
    HomePage.prototype.doRead = function () {
        var _this = this;
        var prompt = this.alerCtrl.create({
            title: 'Load',
            message: "Enter the file name you would like to load",
            inputs: [
                {
                    name: 'text',
                    placeholder: 'File Name'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        _this.errorCodeCheck(100); //Code 100 = Cancelled
                    }
                },
                {
                    text: 'Load',
                    handler: function (data) {
                        if (_this.platform.is('ios')) {
                            _this.file.readAsText(_this.file.dataDirectory, data.text.toLowerCase()).then(function (data) {
                                var datatext = _this.parseXML(data, "Text").replace(/\s/g, "%20");
                                var fromtext = _this.parseXML(data, "From");
                                var totext = _this.parseXML(data, "To");
                                _this.http.get('https://translate.googleapis.com/translate_a/single?client=gtx&sl=' + fromtext + '&tl=' + totext + '&dt=t&q=' + datatext)
                                    .map(function (res) { return res.json(); }).subscribe(function (data) {
                                    var returnString = "";
                                    for (var i = 0; i < data[0].length; i++) {
                                        returnString += data[0][i][0];
                                        if (i != data[0].length - 1) {
                                            returnString += " ";
                                        }
                                    }
                                    _this.displayResult(returnString, 333);
                                }, function (err) {
                                    _this.errorCodeCheck(500);
                                });
                            }).catch(function (err) { return _this.errorCodeCheck(700); });
                        }
                        else if (_this.platform.is('android')) {
                            _this.file.readAsText(_this.file.externalCacheDirectory, data.text.toLowerCase()).then(function (data) {
                                var datatext = _this.parseXML(data, "Text").replace(/\s/g, "%20");
                                var fromtext = _this.parseXML(data, "From");
                                var totext = _this.parseXML(data, "To");
                                _this.http.get('https://translate.googleapis.com/translate_a/single?client=gtx&sl=' + fromtext + '&tl=' + totext + '&dt=t&q=' + datatext)
                                    .map(function (res) { return res.json(); }).subscribe(function (data) {
                                    var returnString = "";
                                    for (var i = 0; i < data[0].length; i++) {
                                        returnString += data[0][i][0];
                                        if (i != data[0].length - 1) {
                                            returnString += " ";
                                        }
                                    }
                                    _this.displayResult(returnString, 333);
                                }, function (err) {
                                    _this.errorCodeCheck(500);
                                });
                            }).catch(function (err) { return _this.errorCodeCheck(701); });
                        }
                        else {
                            document.getElementById("textfield").innerHTML = "You are not using iOS or Android";
                            document.getElementById("divblock").setAttribute("style", "display:block");
                            document.getElementById("textfield").setAttribute("style", "border-style: double");
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    HomePage.prototype.parseXML = function (text, lookFor) {
        var parseText = text;
        var newString = parseText.substring(parseText.lastIndexOf("<" + lookFor + ">") + ("<" + lookFor + ">").length, parseText.lastIndexOf("</" + lookFor + ">"));
        console.log("New string is: " + newString);
        this.errorCodeCheck(301);
        return newString;
    };
    HomePage.prototype.errorCodeCheck = function (code) {
        if (code == 100) {
            console.log("Error Code 100");
        }
        else if (code == 333) {
            console.log("Success");
        }
        else if (code == 500) {
            console.log("Get Request Failed");
        }
        else if (code == 0) {
            console.log("Function finish executing");
        }
        else if (code == 700) {
            document.getElementById("textfield").innerHTML = "File cannot be Found. Please put your XML SCRIPT in <br />" + this.file.dataDirectory;
            document.getElementById("divblock").setAttribute("style", "display:block");
            document.getElementById("textfield").setAttribute("style", "border-style: double");
            console.log("Cannot find file");
        }
        else if (code == 301) {
            console.log("XML parsed");
        }
        else if (code == 701) {
            document.getElementById("textfield").innerHTML = "File cannot be Found. Please put your XML SCRIPT in <br />" + this.file.externalCacheDirectory;
            document.getElementById("divblock").setAttribute("style", "display:block");
            document.getElementById("textfield").setAttribute("style", "border-style: double");
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/bin/Desktop/IonicProjects/walkthrough/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n	<ion-title>Translator</ion-title>\n  </ion-navbar>\n  <meta http-equiv="Content-Security-Policy" content="default-src *; style-src \'self\' \'unsafe-inline\'; script-src \'self\' \'unsafe-inline\' \'unsafe-eval\'">\n</ion-header>\n\n<ion-content padding>\n	<h1> Welcome to a Chinese Translator App!</h1>\n	<p> This app will translate sentences to Chinese from English. </p>\n	 <button ion-button block color="dark" (click)="doPrompt()">Press to translate to Chinese</button>\n	 <button ion-button block color="dark" (click)="doRead()">Press to Load a Script</button>\n	 <div id = "divblock" style ="display:none">\n	<p id="textfield"></p>\n	</div>\n<p> Even cats are excited to use this app! </p>\n<img src="https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif" alt="Code">\n</ion-content>\n'/*ion-inline-end:"/Users/bin/Desktop/IonicProjects/walkthrough/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/bin/Desktop/IonicProjects/walkthrough/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/bin/Desktop/IonicProjects/walkthrough/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map