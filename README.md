# GraphQL Federation - Code First

A simple example of GraphQL Federation using Code First approach.

## Execution

Make sure to start the two sub-graph applications first, then the gateway. Otherwise the gateway won't be able to fetch schemas from the sub-graphs.

```sh
cd users-application && npm start
```

```sh
cd posts-application && npm start
```

```sh
cd gateway && npm start
```

## Access the graph

You can reach the gateway under `http://localhost:3002/graphql`

## Query a combined graph

```gql
query getUserWithPosts($userId: ID!) {
  getUser(id: $userId) {
    id
    name
    posts {
      authorId
      id
      title
    }
  }
}
```
