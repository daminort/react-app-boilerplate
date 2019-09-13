# react-app-boilerplate
A boilerplate for faster creating React applications

This boilerplate is quite workable template. It allow to:
- login user (used fake user data via `faker`)
- logout
- render header, main content and footer

There is no any UI library such as [Material UI](https://material-ui.com/),
[Ant Design](https://ant.design/) or anything else. This is intentional:
feel free to choose any your like.

## Used packages

### Routing
- [react-router](https://www.npmjs.com/package/react-router)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [react-router-redux](https://www.npmjs.com/package/react-router-redux)

### State management and side-effects
- [redux](https://www.npmjs.com/package/redux)
- [react-redux](https://www.npmjs.com/package/react-redux)
- [redux-saga](https://www.npmjs.com/package/redux-saga)
- [reselect](https://www.npmjs.com/package/reselect)
- [seamless-immutable](https://www.npmjs.com/package/seamless-immutable)

### Styling
- [classnames](https://www.npmjs.com/package/classnames)
- [styled-components](https://www.npmjs.com/package/styled-components)

### Handling forms
- [formik](https://www.npmjs.com/package/formik)
- [yup](https://www.npmjs.com/package/yup)

### Custom Hooks
- [react-use](https://www.npmjs.com/package/react-use)

### Utils
- [axios](https://www.npmjs.com/package/axios)
- [faker](https://www.npmjs.com/package/faker)
- [lodash](https://www.npmjs.com/package/lodash)
- [uuid](https://www.npmjs.com/package/uuid)

### Not used, but preferable
- [date-fns](https://www.npmjs.com/package/date-fns)

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
