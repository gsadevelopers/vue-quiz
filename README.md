# Introduction

This repository contains quizzes that reflect actual problems a Vue.js developer may encounter.

## Question 1

In the "question1" folder is a npm package that bundles the Vue.js source files into a SPA.

The bundling is done using Rollup. The CSS for the app is placed in a separate, minified CSS file "dist/css/app.min.css".

### Setup

#### 1. Install dependencies

> npm install

#### 2. Bundle the SPA

> npm run build

#### 3. Start the demo server

> npm run start

### Problem

Visit the webpage in a browser. You will see a simple page with a header, and a menu on the left.

Near the bottom of the menu is a tab that can be clicked/tapped to toggle the menu.

Currently, the menu behaviour is as follows:

- On a desktop, the menu is always shown after a page refresh.
- On a mobile device (defined as screens with width <=812 pixels), the menu is always hidden.

The task is to modify the JavaScript code such that:

1. On a desktop, the state of the menu should be preserved on page refreshes i.e. if the menu is hidden, it should remain hidden after the page refreshes.
2. On a mobile device, the menu by default should always remain hidden even after a page refresh.

Notes:

- You should not change the code bundler.
- The modification should be in JavaScript (no Typescript).
