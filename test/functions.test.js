const functions = require('./functions');
test(
    'Simple addition operation. Add A and B', 
    () => {
    expect(functions.sum(2, 2)).toBe(4)
    }
);

test(
    'Adds 2 + 2 NOT to equal 5',
    () => {
        expect(functions.sum(2, 2)).not.toBe(5)
    }
);

test (
    'Should be Null',
    () => {
        expect(functions.isNull()).toBeNull()
    }
)

test (
    'Should be falsy',
    () => {
        expect(functions.checkValue(undefined)).toBeFalsy()
    }
)

test (
    'User should be Hugo Antero object',
    () => {
        expect(functions.createUser()).toEqual({firstName: 'Hugo', lastName: 'Antero'})
    }
)

test (
    'Should be under 1600',
    () => {
        const load1 = 800
        const load2 = 600
        expect(load1 + load2).toBeLessThan(1600)
    }
)

test (
    'The is no I in Team',
    () => {
        expect('Team').not.toMatch(/I/i)
    }
)

test (
    'Admin should be in usernames',
    () => {
        usernames = ['john', 'karen', 'admin']
        expect(usernames).toContain('admin')
    }
)

//working with async data

//promises
test (
    'User fecthed name should be Leanne Graham',
    () => {
        expect.assertions(1)
        return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham')
        })
    }
)

//async await
test (
    'User fecthed name should be Leanne Graham',
    async () => {
        expect.assertions(1)
        const data = await functions.fetchUser()
        expect(data.name).toEqual('Leanner Graham')        
    }
)

///////FOR FUTURE REFERENCE
// //FIRST we require the unit we want to test
// const publish = require('./src/consume')

// //SECOND we write the test
// //the first argument of the test method is a DESCRIPTION string
// //the second one is the TEST itself, an anonymous function where we will write what we expect
// test (
//     "Here we will test if we are able to SEND our messages to the exchange",
//     () => {
//         expect().toBe()
//     }
// )

// //FIRST we require the unit we want to test
// const consume = require('./src/consume')

// //SECOND we write the test
// //the first argument of the test method is a DESCRIPTION string
// //the second one is the TEST itself, an anonymous function where we will write what we expect
// test (
//     "Let's check if we are retrieving the messages sent to us",
//     () => {
//         expect().toBe()
//     }
// )