Front-End Starter :runner:
==========================

Boilerplate code to quickly start a front-end web project using [Vite](https://github.com/vitejs/vite) & [Vue 3](https://github.com/vuejs/vue-next).

### Features

 * Includes [Vue Router](https://github.com/vuejs/vue-router) for multiple pages and URL routing
 * Includes [ESLint](https://eslint.org/) linting configuration for code consistency
 * Includes [SASS](https://sass-lang.com/) as CSS pre-processor

Requirements
------------

 * Node 12+

Installation
------------

1. Clone: `git clone https://github.com/foxxyz/front-end-starter.git`
2. Install dependencies: `npm install`
3. Test it works: `npm run dev`

Usage
-----

Once you're up and running, make sure to update the following items:

### Customize

1. Update package name and description in `package.json`
2. Update author and repository info in `package.json`
3. Update project title in `src/index.html`
4. Change favicons (`src/favicon.ico`, `src/favicon-32x32.png` and `src/favicon-16x16.png`)
5. Update git remote using `git remote set-url origin <git-repo-url>`
6. Run `npm install` again to update `package-lock.json`
7. Start building in `src/home.vue`

### Suggested Project Structure

 * `src/components`: Sub-page and smaller level components
 * `src/fonts`: Font assets
 * `src/images`: Image assets
 * `src/pages`: Components for each main page
 * `src/services`: Reusable services, such as API or data management modules

### Helpers

 * Lint your project: `npm run lint`

Deployment
----------

1. Compile: `npm run build`
2. Upload contents of `public` to a directory accessible by your web server.

License
-------

MIT

