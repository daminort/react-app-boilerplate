# react-app-boilerplate
A boilerplate for faster creating React applications

This boilerplate is quite workable template. It allows to:
- login user (used fake user data via `faker`)
- logout
- render header, main content and footer

There is no any UI library such as [Material UI](https://material-ui.com/),
[Ant Design](https://ant.design/) or anything else. This is intentional:
feel free to choose any your like.

## Used packages

### Routing
- [react-router-dom](https://reacttraining.com/react-router/)
- [connected-react-router](https://github.com/supasate/connected-react-router#readme)

### State management and side-effects
- [redux](https://redux.js.org/)
- [react-redux](https://react-redux.js.org/)
- [redux-saga](https://redux-saga.js.org)
- [reselect](https://github.com/reduxjs/reselect#readme)
- [seamless-immutable](https://github.com/rtfeldman/seamless-immutable)

### Styling
- [clsx](https://github.com/lukeed/clsx#readme)
- [styled-components](https://www.styled-components.com)

### Handling forms
- [formik](https://jaredpalmer.com/formik/)
- [yup](https://github.com/jquense/yup)

### Custom Hooks
- [react-use](https://streamich.github.io/react-use)

### Utils
- [axios](https://github.com/axios/axios)
- [faker](https://github.com/Marak/Faker.js#readme)
- [lodash](https://lodash.com)
- [mitt](https://github.com/developit/mitt)
- [uuid](https://github.com/kelektiv/node-uuid#readme)

### Not used, but preferable
- [date-fns](https://date-fns.org/)

## Cloning and updating

To clone
```shell script
$ git clone https://github.com/daminort/react-app-boilerplate.git
```

To check updates for used packages
```shell script
$ cd <project-root>
$ npm run check-updates # will run: npx npm-check-updates
```

To update used packages
```shell script
$ cd <project-root>
$ npm run update # will run: npx npm-check-updates -u
```

> Note that `npm run update` updates `package.json` only,
> so you will need to install new versions manually after that:
> ```shell script
> $ npm install
> ```

## Available scripts (apart from standard ones and updating scripts)

```shell script
$ npm run lint # start linter for `src` folder
$ npm run lint-fix # start linter with fixes for `src` folder
```

## Using with `Docker` and `Docker-compose`

You can run project in `Docker` container in development mode:

```shell script
$ docker-compose up --build
$ # or
$ docker-compose up
```

## Project structure

![Project strucrure](ProjectStructure.png)
