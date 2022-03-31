const sum = require('./sum')
test(
    'Simple addition operation. Add A and B', 
    () => {
    expect(sum(2, 2)).toBe(4)
    }
)