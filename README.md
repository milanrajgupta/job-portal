# JobPortal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## We have install angular material

ng add @angular/material

## We have install mdb bootstrap

npm install mdb-angular-ui-kit

## We have install Bootstrap

step 1: npm i bootstrap

step 2: After installing this package go to the angular.json file and change the style and script.

"styles": [
"src/styles.scss",
"./node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
"node_modules/chart.js/dist/chart.js",
"./node_modules/bootstrap/dist/js/bootstrap.js"
]

## Routing Process

Step 1: Our app routing module.ts re-direct the main module

like this:
{
path: 'main',
loadChildren: () =>
import('./modules/main-dashboard/main.module').then(
(m) => m.MainModule
),
},

Step 2: Our main routing module.ts re-direct to the common module

like this:
{
path: 'common',
loadChildren: () =>
import('../common/common.module').then(
(m) => m.CommonModuleModule
),
},

Step 3: Our main routing module.ts re-direct to the header module

like this:
{
path: 'header',
loadChildren: () =>
import('../header-module/header.module').then(
(m) => m.HeaderModule
),
},

Step 4: Our main routing module.ts re-direct to the profile module

like this:
{
path: 'profile',
loadChildren: () =>
import('../profile-module/profile.module').then(
(m) => m.ProfileModule
),
},
# job-portal
