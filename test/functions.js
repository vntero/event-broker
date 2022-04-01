const functions = {
    sum: (a, b) => a + b,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = {firstName: 'Hugo', lastName: 'Antero'}
        return user
    }
}

module.exports = functions;