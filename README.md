# React Simple Auth App

Once the project has been cloned, navigate to the application directory and run the command `yarn` or `npm i` to install all dependencies. For example:

```bash
cd simple-auth-app/
yarn
```

At this point, you can test the correct execution of your application. If you are using Yarn, run the following command:

```bash
yarn run dev
```

## Dependencies used

* _axios_: Library for making HTTP requests.
* _eslint-plugin-react-hooks_: Helps catch errors and provides guidance when coding hooks.
* _redux_: State management library for the application.
* _sass_: Enables the use of SASS instead of plain CSS (if you install this extension, make sure to change your file extensions from `.css` to `.scss` and update the import paths in `App.tsx` and `main.tsx` accordingly).
* _bootstrap_: CSS framework.
* _react-hook-form_: Library for handling and validating forms.
* _react-router-dom_: Routing library for React.

## Directory Structure

In my projects, I usually follow this directory structure:

```
├── src/
    ├── assets/
    │   ├── images/
    │   ├── icons/
    │   ├── fonts/
    │   ├── ...
    ├── components/
    │   └── Component1.component.tsx
    ├── data/
    ├── hooks/
    ├── layout/
    ├── models/
    ├── pages/
    │   └── page1/
    │       ├── components/
    │       └── Page1.page.tsx
    ├── redux/
    │   ├── ...
    │   ├── store.tsx
    ├── routes/
    │   ├── routes.tsx
    ├── services/
    ├── utilities/
		...
    ├── App.scss
    ├── App.tsx
    ├── favicon.ico
    ├── index.scss
    └── main.tsx
...
```

1. The `assets` directory contains all multimedia resources such as images, fonts, and icons. It can also include files for application internationalization in an `i18n` subdirectory.
2. The `components` directory contains all global components of your application, such as custom alerts, loaders, or pagination components.
3. The `data` directory holds constants that can be used across your application, such as routes or enumerations.
4. The `hooks` directory contains custom hooks that abstract logic from your application.
5. The `layout` directory contains the main elements of your application, typically including four parts: Header, Sidebar, Footer, and Skeleton.
6. The `models` directory contains the models used in your application. Since we are using TypeScript, it is essential to maintain proper typing throughout the application.
7. The `pages` directory holds the pages of your application. I usually create a subdirectory for each set of related pages (e.g., a `users` directory would contain `UsersList.page.tsx`, `UsersCreate.page.tsx`, and `UserDetails.page.tsx`). Additionally, you can create a `components` subdirectory for shared components among these pages.
8. The `redux` directory contains the global state configuration for your application, which will be discussed later.
9. The `routes` directory contains a file defining the application routes.
10. The `services` directory holds the axios configuration for HTTP requests, where you can add interceptors to include headers or handle errors better.
11. Finally, the `utilities` directory is used for storing global utility functions, such as currency conversion or date formatting functions.

## Project Status

Currently, this project includes a simple (fake) login system using localStorage. It can be extended to use an authentication API.

## Stay in touch

- Website - [devnabibia](https://portfolio-devnabibia.vercel.app/)
- Medium - [devnabibia](https://medium.com/@devnabibia)
- Twitter - [devnabibia](https://x.com/devnabibia)
