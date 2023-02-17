const manager = require('../lib/manager');

const subject = new manager('David', 42, 'davidmannex@gmail.com',87);

test('TestName', () => {
    expect(subject.getName()).toEqual('David');
});
test('gets Manager ID', () => {
    expect(subject.getId()).toEqual(42);
});
test('gets Manager email', () => {
    expect(subject.getEmail()).toEqual('davidmannex@gmail.com');
});
test('gets role of Manager', () => {
    expect(subject.getRole()).toEqual("Manager");
}); 
test('gets Office of Manager', () => {
    expect(subject.getOfficeNumber()).toEqual(87);
}); 