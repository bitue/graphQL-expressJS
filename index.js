const express = require('express');

const app = express();

const { graphqlHTTP } = require('express-graphql');
const { schema } = require('./graphql/schema');

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        graphiql: true
    })
);

app.listen(5000, () => {
    console.log('server running at ', 5000);
});
