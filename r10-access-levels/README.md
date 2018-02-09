# r10-access-levels

## WTF

Demo of incompatibility of `access-levels` with `create-react-app`

## Steps to reproduce

1. `create-react-app newprj`
2. `cd newprj`
3. `yarn add access-levels`
4. Modify `src\App.js` add `import 'access-levels'`
5. `yarn build`

```
yarn build
yarn run v1.3.2
$ react-scripts build
Creating an optimized production build...
Failed to compile.

Failed to minify the code from this file:

        ./node_modules/access-levels/src/index.js:8

Read more here: http://bit.ly/2tRViJ9
```
