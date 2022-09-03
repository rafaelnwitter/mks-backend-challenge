'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">movies-api documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthenticationModule.html\" data-type=\"entity-link\" >AuthenticationModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-AuthenticationModule-302c6fc488c59da90d5559ddd742e40c1a24c8068d6bd2cd936df22fd71dc5dbe78e2ec29f3c3a01002d48666c6d12e18834813032626130ff1587e83ab39795"' : 'data-target="#xs-controllers-links-module-AuthenticationModule-302c6fc488c59da90d5559ddd742e40c1a24c8068d6bd2cd936df22fd71dc5dbe78e2ec29f3c3a01002d48666c6d12e18834813032626130ff1587e83ab39795"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AuthenticationModule-302c6fc488c59da90d5559ddd742e40c1a24c8068d6bd2cd936df22fd71dc5dbe78e2ec29f3c3a01002d48666c6d12e18834813032626130ff1587e83ab39795"' : 'id="xs-controllers-links-module-AuthenticationModule-302c6fc488c59da90d5559ddd742e40c1a24c8068d6bd2cd936df22fd71dc5dbe78e2ec29f3c3a01002d48666c6d12e18834813032626130ff1587e83ab39795"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AuthenticationController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthenticationController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-AuthenticationModule-302c6fc488c59da90d5559ddd742e40c1a24c8068d6bd2cd936df22fd71dc5dbe78e2ec29f3c3a01002d48666c6d12e18834813032626130ff1587e83ab39795"' : 'data-target="#xs-injectables-links-module-AuthenticationModule-302c6fc488c59da90d5559ddd742e40c1a24c8068d6bd2cd936df22fd71dc5dbe78e2ec29f3c3a01002d48666c6d12e18834813032626130ff1587e83ab39795"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AuthenticationModule-302c6fc488c59da90d5559ddd742e40c1a24c8068d6bd2cd936df22fd71dc5dbe78e2ec29f3c3a01002d48666c6d12e18834813032626130ff1587e83ab39795"' : 'id="xs-injectables-links-module-AuthenticationModule-302c6fc488c59da90d5559ddd742e40c1a24c8068d6bd2cd936df22fd71dc5dbe78e2ec29f3c3a01002d48666c6d12e18834813032626130ff1587e83ab39795"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AuthenticationService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthenticationService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/JwtStrategy.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >JwtStrategy</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/LocalStrategy.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LocalStrategy</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DatabaseModule.html\" data-type=\"entity-link\" >DatabaseModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/MovieModule.html\" data-type=\"entity-link\" >MovieModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-MovieModule-17a463bed23b5f64e4a7092c2121e1eed4635a7fc854eebada9a5bf8491b1af71869ff5f6585914e4c2efa1064f28ff25dcc8514795bcba75e717808c8b714db"' : 'data-target="#xs-controllers-links-module-MovieModule-17a463bed23b5f64e4a7092c2121e1eed4635a7fc854eebada9a5bf8491b1af71869ff5f6585914e4c2efa1064f28ff25dcc8514795bcba75e717808c8b714db"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-MovieModule-17a463bed23b5f64e4a7092c2121e1eed4635a7fc854eebada9a5bf8491b1af71869ff5f6585914e4c2efa1064f28ff25dcc8514795bcba75e717808c8b714db"' : 'id="xs-controllers-links-module-MovieModule-17a463bed23b5f64e4a7092c2121e1eed4635a7fc854eebada9a5bf8491b1af71869ff5f6585914e4c2efa1064f28ff25dcc8514795bcba75e717808c8b714db"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/MovieController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MovieController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-MovieModule-17a463bed23b5f64e4a7092c2121e1eed4635a7fc854eebada9a5bf8491b1af71869ff5f6585914e4c2efa1064f28ff25dcc8514795bcba75e717808c8b714db"' : 'data-target="#xs-injectables-links-module-MovieModule-17a463bed23b5f64e4a7092c2121e1eed4635a7fc854eebada9a5bf8491b1af71869ff5f6585914e4c2efa1064f28ff25dcc8514795bcba75e717808c8b714db"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-MovieModule-17a463bed23b5f64e4a7092c2121e1eed4635a7fc854eebada9a5bf8491b1af71869ff5f6585914e4c2efa1064f28ff25dcc8514795bcba75e717808c8b714db"' : 'id="xs-injectables-links-module-MovieModule-17a463bed23b5f64e4a7092c2121e1eed4635a7fc854eebada9a5bf8491b1af71869ff5f6585914e4c2efa1064f28ff25dcc8514795bcba75e717808c8b714db"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/MovieService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MovieService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UsersModule.html\" data-type=\"entity-link\" >UsersModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-UsersModule-dd141dd65ce992a79c11c56e56a670f4d40c083ada757391b84094c8a80e04e3cded824bab9709dba64f214f1dc6847dd35dba58303939e64138b48f493e1ca5"' : 'data-target="#xs-controllers-links-module-UsersModule-dd141dd65ce992a79c11c56e56a670f4d40c083ada757391b84094c8a80e04e3cded824bab9709dba64f214f1dc6847dd35dba58303939e64138b48f493e1ca5"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-UsersModule-dd141dd65ce992a79c11c56e56a670f4d40c083ada757391b84094c8a80e04e3cded824bab9709dba64f214f1dc6847dd35dba58303939e64138b48f493e1ca5"' : 'id="xs-controllers-links-module-UsersModule-dd141dd65ce992a79c11c56e56a670f4d40c083ada757391b84094c8a80e04e3cded824bab9709dba64f214f1dc6847dd35dba58303939e64138b48f493e1ca5"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/UsersController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UsersController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-UsersModule-dd141dd65ce992a79c11c56e56a670f4d40c083ada757391b84094c8a80e04e3cded824bab9709dba64f214f1dc6847dd35dba58303939e64138b48f493e1ca5"' : 'data-target="#xs-injectables-links-module-UsersModule-dd141dd65ce992a79c11c56e56a670f4d40c083ada757391b84094c8a80e04e3cded824bab9709dba64f214f1dc6847dd35dba58303939e64138b48f493e1ca5"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-UsersModule-dd141dd65ce992a79c11c56e56a670f4d40c083ada757391b84094c8a80e04e3cded824bab9709dba64f214f1dc6847dd35dba58303939e64138b48f493e1ca5"' : 'id="xs-injectables-links-module-UsersModule-dd141dd65ce992a79c11c56e56a670f4d40c083ada757391b84094c8a80e04e3cded824bab9709dba64f214f1dc6847dd35dba58303939e64138b48f493e1ca5"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/UsersService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UsersService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#entities-links"' : 'data-target="#xs-entities-links"', ">\n                                <span class=\"icon ion-ios-apps\"></span>\n                                <span>Entities</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"entities/Movie.html\" data-type=\"entity-link\" >Movie</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/User.html\" data-type=\"entity-link\" >User</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/CreateMovieDto.html\" data-type=\"entity-link\" >CreateMovieDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateUserDto.html\" data-type=\"entity-link\" >CreateUserDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/LogInDto.html\" data-type=\"entity-link\" >LogInDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/RegisterDto.html\" data-type=\"entity-link\" >RegisterDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateMovieDto.html\" data-type=\"entity-link\" >UpdateMovieDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UpdateUserDto.html\" data-type=\"entity-link\" >UpdateUserDto</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/JwtAuthenticationGuard.html\" data-type=\"entity-link\" >JwtAuthenticationGuard</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/JwtRefreshGuard.html\" data-type=\"entity-link\" >JwtRefreshGuard</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/JwtRefreshTokenStrategy.html\" data-type=\"entity-link\" >JwtRefreshTokenStrategy</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/LocalAuthenticationGuard.html\" data-type=\"entity-link\" >LocalAuthenticationGuard</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/RequestWithUser.html\" data-type=\"entity-link\" >RequestWithUser</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/TokenPayload.html\" data-type=\"entity-link\" >TokenPayload</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/enumerations.html\" data-type=\"entity-link\">Enums</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));