const { GraphQLServer } = require("graphql-yoga");

const algos = [
  {
    difficulty: "Easy",
    source: "LeetCode",
    type: "BST"
  },
  {
    difficulty: "Medium",
    source: "LeetCode",
    type: "String Manipulation"
  },
  {
    difficulty: "Hard",
    source: "HackerRank",
    type: "System Design"
  }
];

const resolvers = {
  Query: {
    algos: (parent, args, context) => {
      return algos;
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers
});

server.start(() => console.log("The server is now started!"));
