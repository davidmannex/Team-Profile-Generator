const employee = require('../lib/employee');

const subject = new employee('David', 42, 'davidmannex@gmail.com');

test('TestName', () => {
    expect(subject.getName()).toEqual('David');
});
test('gets employee ID', () => {
    expect(subject.getId()).toEqual(42);
});
test('gets employee email', () => {
    expect(subject.getEmail()).toEqual('davidmannex@gmail.com');
});
test('gets role of employee', () => {
    expect(subject.getRole()).toEqual("Employee");
}); 