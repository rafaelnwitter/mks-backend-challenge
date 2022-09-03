'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">movies-api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationModule.html" data-type="entity-link" >AuthenticationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthenticationModule-302c6fc488c59da90d5559ddd742e40c1a24c8068d6bd2cd936df22fd71dc5dbe78e2ec29f3c3a01002d48666c6d12e18834813032626130ff1587e83ab39795"' : 'data-target="#xs-controllers-links-module-AuthenticationModule-302c6fc488c59da90d5559ddd742e40c1a24c8068d6bd2cd936df22fd71dc5dbe78e2ec29f3c3a01002d48666c6d12e18834813032626130ff1587e83ab39795"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthenticationModule-302c6fc488c59da90d5559ddd742e40c1a24c8068d6bd2cd936df22fd71dc5dbe78e2ec29f3c3a01002d48666c6d12e18834813032626130ff1587e83ab39795"' :
                                            'id="xs-controllers-links-module-AuthenticationModule-302c6fc488c59da90d5559ddd742e40c1a24c8068d6bd2cd936df22fd71dc5dbe78e2ec29f3c3a01002d48666c6d12e18834813032626130ff1587e83ab39795"' }>
                                            <li class="link">
                                                <a href="controllers/AuthenticationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthenticationModule-302c6fc488c59da90d5559ddd742e40c1a24c8068d6bd2cd936df22fd71dc5dbe78e2ec29f3c3a01002d48666c6d12e18834813032626130ff1587e83ab39795"' : 'data-target="#xs-injectables-links-module-AuthenticationModule-302c6fc488c59da90d5559ddd742e40c1a24c8068d6bd2cd936df22fd71dc5dbe78e2ec29f3c3a01002d48666c6d12e18834813032626130ff1587e83ab39795"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthenticationModule-302c6fc488c59da90d5559ddd742e40c1a24c8068d6bd2cd936df22fd71dc5dbe78e2ec29f3c3a01002d48666c6d12e18834813032626130ff1587e83ab39795"' :
                                        'id="xs-injectables-links-module-AuthenticationModule-302c6fc488c59da90d5559ddd742e40c1a24c8068d6bd2cd936df22fd71dc5dbe78e2ec29f3c3a01002d48666c6d12e18834813032626130ff1587e83ab39795"' }>
                                        <li class="link">
                                            <a href="injectables/AuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MovieModule.html" data-type="entity-link" >MovieModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-MovieModule-17a463bed23b5f64e4a7092c2121e1eed4635a7fc854eebada9a5bf8491b1af71869ff5f6585914e4c2efa1064f28ff25dcc8514795bcba75e717808c8b714db"' : 'data-target="#xs-controllers-links-module-MovieModule-17a463bed23b5f64e4a7092c2121e1eed4635a7fc854eebada9a5bf8491b1af71869ff5f6585914e4c2efa1064f28ff25dcc8514795bcba75e717808c8b714db"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MovieModule-17a463bed23b5f64e4a7092c2121e1eed4635a7fc854eebada9a5bf8491b1af71869ff5f6585914e4c2efa1064f28ff25dcc8514795bcba75e717808c8b714db"' :
                                            'id="xs-controllers-links-module-MovieModule-17a463bed23b5f64e4a7092c2121e1eed4635a7fc854eebada9a5bf8491b1af71869ff5f6585914e4c2efa1064f28ff25dcc8514795bcba75e717808c8b714db"' }>
                                            <li class="link">
                                                <a href="controllers/MovieController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovieController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MovieModule-17a463bed23b5f64e4a7092c2121e1eed4635a7fc854eebada9a5bf8491b1af71869ff5f6585914e4c2efa1064f28ff25dcc8514795bcba75e717808c8b714db"' : 'data-target="#xs-injectables-links-module-MovieModule-17a463bed23b5f64e4a7092c2121e1eed4635a7fc854eebada9a5bf8491b1af71869ff5f6585914e4c2efa1064f28ff25dcc8514795bcba75e717808c8b714db"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MovieModule-17a463bed23b5f64e4a7092c2121e1eed4635a7fc854eebada9a5bf8491b1af71869ff5f6585914e4c2efa1064f28ff25dcc8514795bcba75e717808c8b714db"' :
                                        'id="xs-injectables-links-module-MovieModule-17a463bed23b5f64e4a7092c2121e1eed4635a7fc854eebada9a5bf8491b1af71869ff5f6585914e4c2efa1064f28ff25dcc8514795bcba75e717808c8b714db"' }>
                                        <li class="link">
                                            <a href="injectables/MovieService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovieService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-dd141dd65ce992a79c11c56e56a670f4d40c083ada757391b84094c8a80e04e3cded824bab9709dba64f214f1dc6847dd35dba58303939e64138b48f493e1ca5"' : 'data-target="#xs-controllers-links-module-UsersModule-dd141dd65ce992a79c11c56e56a670f4d40c083ada757391b84094c8a80e04e3cded824bab9709dba64f214f1dc6847dd35dba58303939e64138b48f493e1ca5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-dd141dd65ce992a79c11c56e56a670f4d40c083ada757391b84094c8a80e04e3cded824bab9709dba64f214f1dc6847dd35dba58303939e64138b48f493e1ca5"' :
                                            'id="xs-controllers-links-module-UsersModule-dd141dd65ce992a79c11c56e56a670f4d40c083ada757391b84094c8a80e04e3cded824bab9709dba64f214f1dc6847dd35dba58303939e64138b48f493e1ca5"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-dd141dd65ce992a79c11c56e56a670f4d40c083ada757391b84094c8a80e04e3cded824bab9709dba64f214f1dc6847dd35dba58303939e64138b48f493e1ca5"' : 'data-target="#xs-injectables-links-module-UsersModule-dd141dd65ce992a79c11c56e56a670f4d40c083ada757391b84094c8a80e04e3cded824bab9709dba64f214f1dc6847dd35dba58303939e64138b48f493e1ca5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-dd141dd65ce992a79c11c56e56a670f4d40c083ada757391b84094c8a80e04e3cded824bab9709dba64f214f1dc6847dd35dba58303939e64138b48f493e1ca5"' :
                                        'id="xs-injectables-links-module-UsersModule-dd141dd65ce992a79c11c56e56a670f4d40c083ada757391b84094c8a80e04e3cded824bab9709dba64f214f1dc6847dd35dba58303939e64138b48f493e1ca5"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Movie.html" data-type="entity-link" >Movie</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateMovieDto.html" data-type="entity-link" >CreateMovieDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LogInDto.html" data-type="entity-link" >LogInDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateMovieDto.html" data-type="entity-link" >UpdateMovieDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthenticationGuard.html" data-type="entity-link" >JwtAuthenticationGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtRefreshGuard.html" data-type="entity-link" >JwtRefreshGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtRefreshTokenStrategy.html" data-type="entity-link" >JwtRefreshTokenStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthenticationGuard.html" data-type="entity-link" >LocalAuthenticationGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/RequestWithUser.html" data-type="entity-link" >RequestWithUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TokenPayload.html" data-type="entity-link" >TokenPayload</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});