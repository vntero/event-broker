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