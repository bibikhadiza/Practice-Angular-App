import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';


@NgModule({
  declarations: [
    AppComponent, WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* WHAT IS AN ANGULAR MODULE ? */

/* A class with a Ng,Module decorator
It's purpose:
    - Organize the pieces of the application
    - Arrange them in blocks
    - Extend our application with capabilities from external libraries
    - Provide a template resolution environment for resolving the directive and pipes in the components templates


How does an angular module organize our application?
    - an angular module declares each component, directive and pipe that it manages.
    - Every component, directive, and pipe we create belongs to an angular module
    - An angular module bootstraps our root application component, defining the component needed to display the first template.
    - Can import and export compoennts, directives, pipes and other modules making it easy import and use these modules
    - Imports other angular modules
    - can provide service prodivers using the angular injector makeing the pervices available to any class in the application

Envision the angular module as a box
    - inside this block we have many components
    - If these components need functionaity, the functionalities also need to be defined within this box
    - The gerneal idea is the module contains reference to all the pipes, libraries and modules the components need.
    This enables developers to be aware of which functionalies and libraries the common components
    will be using for their templates. Each components tempalte is resolved with only the capabilties provided by the components module.

Structure
    - The import array in an angular module allows us to import external modules which
    expose their component directives and pipes within the templates of the componenets
    that are declared in this module.

    - Exports array in the ngmodel decorator allows us to share an Angular modules components,
    directives and pipes with other modules. This is used so when we export components directives
    or pipe, the modules can be pulled in when another module imports this module. For example app
    module imports product module. We can also re-export third party modules such as httmp module, form module.
    you do not have to import the modules to export them. For example the sharedModule can export the FormsModule
    even if it didnt import the module first. Never export a service. Services added to the providers array of an
    angular module are resitered with the root application injector making them available for injection for any class in the application.

    - The providers array in the ngmodule allows us to register service providers for our application.
    The providers array allows us to register services at the module level. This is similar to
    the component decoratiore providers property that allows us to register services at the component level.
    Any service provider added to the providers array is registerd at the root of the application.
    If a service provider is added to the providers array in an angular module, the service provider is accessable
    to any component with applciation as it becomes tied to the root of the application. If you want to limit a
    service provider to a specific component, add the provider to the providers array in the module decorator.
    Don't add services to the providers array of a shared module. Instead consider building a CoreModule
    for services and importing it once in the AppModule. Routing guards service must be added to the providers
    array of the angular module. The router can use these services during the navigation process.

    - the declaration property is a collection components, directives and pipes we will relate and
    use in the components in this module. Every component, directive and ppe we create must belong
    to one and one one angular module. Only declare components, directive and pipes to this collection.
    Never redeclare a component, directive or pipes that belong to another module.
    All declared components, directive and piepes are privaate by default.
    They are only accessible to other components, directices and pipes declared in the same modules.
    An angular module provides the template resolution enviroment for it's component templates.
    A components directives and pipes are resolved within that module.
    When we use a directice in a components template, angular looks at the module for the defination of that directive.
    If the component declaring that directive is not avilable in the same angular module or import module, angular will throw an error.

    - The bootstrap prop is set to the Component which bootstraps the application

*/

