
# News

A simple news collection using NewsAPI.org

Note: You will need an API_KEY to run this app.

**Steps to run the App**

1. Clone the repository

2. Perform package install using `yarn install` or `npm install`

3. Create file `src\config\default.js` with provided NewsAPI.org `API_KEY` using below template and Save.

```
module.exports = {
    API_KEY : 'YOUR_API_KEY_GOES_HERE'
};
```

4. Do `yarn run start-dev` to start the app

For development

`yarn lint` will do a lint check

`yarn mocha` will do a test using mocha and chai

You can also do `yarn test` which will do a lint and mocha test.

