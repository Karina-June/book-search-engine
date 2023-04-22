const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');


const resolvers = {
    Query: {
        users: async () => {
            return await User.find({}).populate('books');
        },
        books: async () => {
            if (context.user) {
                return await Book.find({}).populate('username');
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    }
};

module.exports = resolvers;