import graphql, { GraphQLSchema } from "graphql";

const { GraphQLObjectType, GraphQLString } = graphql;

const books = [
    {id: "123", name:"Jhon doe", genre:"English"}
]

export const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString, },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});
export const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            type: BookType,
            args: {id: { type: GraphQLString}},
            resolve(parent, args){
                // Code to get from DB;
                console.log(args.id)
                const bookFromDB = books.filter(book => book.id === args.id)[0];
                console.log(bookFromDB);
                return bookFromDB;
            }
        }
    }
})
export default new GraphQLSchema({
    query: RootQuery,
})