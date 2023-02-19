const intern = require('../lib/intern');

const subject = new intern('David', 42, 'davidmannex@gmail.com',"Wesleyan");

test('TestName', () => {
    expect(subject.getName()).toEqual('David');
});
test('gets Intern ID', () => {
    expect(subject.getId()).toEqual(42);
});
test('gets Intern email', () => {
    expect(subject.getEmail()).toEqual('davidmannex@gmail.com');
});
test('gets role of Intern', () => {
    expect(subject.getRole()).toEqual("Intern");
}); 
test('gets School of Intern', () => {
    expect(subject.getSchool()).toEqual("Wesleyan");
}); 