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
                                            'data-target="#controllers-links-module-AuthenticationModule-1e05a52f792de62658c7f88e1aa9ef7a7e191305ef5b71ce2b0bebe446559041311c0e8d027f124a212b549c2b4cba564f3323f8880d85b05a55487336397c0a"' : 'data-target="#xs-controllers-links-module-AuthenticationModule-1e05a52f792de62658c7f88e1aa9ef7a7e191305ef5b71ce2b0bebe446559041311c0e8d027f124a212b549c2b4cba564f3323f8880d85b05a55487336397c0a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthenticationModule-1e05a52f792de62658c7f88e1aa9ef7a7e191305ef5b71ce2b0bebe446559041311c0e8d027f124a212b549c2b4cba564f3323f8880d85b05a55487336397c0a"' :
                                            'id="xs-controllers-links-module-AuthenticationModule-1e05a52f792de62658c7f88e1aa9ef7a7e191305ef5b71ce2b0bebe446559041311c0e8d027f124a212b549c2b4cba564f3323f8880d85b05a55487336397c0a"' }>
                                            <li class="link">
                                                <a href="controllers/AuthenticationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthenticationModule-1e05a52f792de62658c7f88e1aa9ef7a7e191305ef5b71ce2b0bebe446559041311c0e8d027f124a212b549c2b4cba564f3323f8880d85b05a55487336397c0a"' : 'data-target="#xs-injectables-links-module-AuthenticationModule-1e05a52f792de62658c7f88e1aa9ef7a7e191305ef5b71ce2b0bebe446559041311c0e8d027f124a212b549c2b4cba564f3323f8880d85b05a55487336397c0a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthenticationModule-1e05a52f792de62658c7f88e1aa9ef7a7e191305ef5b71ce2b0bebe446559041311c0e8d027f124a212b549c2b4cba564f3323f8880d85b05a55487336397c0a"' :
                                        'id="xs-injectables-links-module-AuthenticationModule-1e05a52f792de62658c7f88e1aa9ef7a7e191305ef5b71ce2b0bebe446559041311c0e8d027f124a212b549c2b4cba564f3323f8880d85b05a55487336397c0a"' }>
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
                                            'data-target="#controllers-links-module-MovieModule-6e65234ebc37e5e667990a89d7e4bdbb0dd3603152619e392f00de5f9a430529565632cb436163e4f481a1980ffb967e48a4baaa17dc58e2d70046d6beb9dd83"' : 'data-target="#xs-controllers-links-module-MovieModule-6e65234ebc37e5e667990a89d7e4bdbb0dd3603152619e392f00de5f9a430529565632cb436163e4f481a1980ffb967e48a4baaa17dc58e2d70046d6beb9dd83"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MovieModule-6e65234ebc37e5e667990a89d7e4bdbb0dd3603152619e392f00de5f9a430529565632cb436163e4f481a1980ffb967e48a4baaa17dc58e2d70046d6beb9dd83"' :
                                            'id="xs-controllers-links-module-MovieModule-6e65234ebc37e5e667990a89d7e4bdbb0dd3603152619e392f00de5f9a430529565632cb436163e4f481a1980ffb967e48a4baaa17dc58e2d70046d6beb9dd83"' }>
                                            <li class="link">
                                                <a href="controllers/MovieController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovieController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MovieModule-6e65234ebc37e5e667990a89d7e4bdbb0dd3603152619e392f00de5f9a430529565632cb436163e4f481a1980ffb967e48a4baaa17dc58e2d70046d6beb9dd83"' : 'data-target="#xs-injectables-links-module-MovieModule-6e65234ebc37e5e667990a89d7e4bdbb0dd3603152619e392f00de5f9a430529565632cb436163e4f481a1980ffb967e48a4baaa17dc58e2d70046d6beb9dd83"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MovieModule-6e65234ebc37e5e667990a89d7e4bdbb0dd3603152619e392f00de5f9a430529565632cb436163e4f481a1980ffb967e48a4baaa17dc58e2d70046d6beb9dd83"' :
                                        'id="xs-injectables-links-module-MovieModule-6e65234ebc37e5e667990a89d7e4bdbb0dd3603152619e392f00de5f9a430529565632cb436163e4f481a1980ffb967e48a4baaa17dc58e2d70046d6beb9dd83"' }>
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
                                            'data-target="#controllers-links-module-UsersModule-65830b685f941217ce816b61b654a9d59a7fee27686961079b15e47a2f24ed6ae8fb5102eb39c79a7ed19beff7d8b93943278beb4c8d53262a4fd9b65562a316"' : 'data-target="#xs-controllers-links-module-UsersModule-65830b685f941217ce816b61b654a9d59a7fee27686961079b15e47a2f24ed6ae8fb5102eb39c79a7ed19beff7d8b93943278beb4c8d53262a4fd9b65562a316"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-65830b685f941217ce816b61b654a9d59a7fee27686961079b15e47a2f24ed6ae8fb5102eb39c79a7ed19beff7d8b93943278beb4c8d53262a4fd9b65562a316"' :
                                            'id="xs-controllers-links-module-UsersModule-65830b685f941217ce816b61b654a9d59a7fee27686961079b15e47a2f24ed6ae8fb5102eb39c79a7ed19beff7d8b93943278beb4c8d53262a4fd9b65562a316"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-65830b685f941217ce816b61b654a9d59a7fee27686961079b15e47a2f24ed6ae8fb5102eb39c79a7ed19beff7d8b93943278beb4c8d53262a4fd9b65562a316"' : 'data-target="#xs-injectables-links-module-UsersModule-65830b685f941217ce816b61b654a9d59a7fee27686961079b15e47a2f24ed6ae8fb5102eb39c79a7ed19beff7d8b93943278beb4c8d53262a4fd9b65562a316"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-65830b685f941217ce816b61b654a9d59a7fee27686961079b15e47a2f24ed6ae8fb5102eb39c79a7ed19beff7d8b93943278beb4c8d53262a4fd9b65562a316"' :
                                        'id="xs-injectables-links-module-UsersModule-65830b685f941217ce816b61b654a9d59a7fee27686961079b15e47a2f24ed6ae8fb5102eb39c79a7ed19beff7d8b93943278beb4c8d53262a4fd9b65562a316"' }>
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
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthenticationGuard.html" data-type="entity-link" >JwtAuthenticationGuard</a>
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
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
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