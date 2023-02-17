const engineer = require('../lib/engineer');

const subject = new engineer('David', 42, 'davidmannex@gmail.com',"davidmannex");

test('TestName', () => {
    expect(subject.getName()).toEqual('David');
});
test('gets Engineer ID', () => {
    expect(subject.getId()).toEqual(42);
});
test('gets Engineer email', () => {
    expect(subject.getEmail()).toEqual('davidmannex@gmail.com');
});
test('gets role of Engineer', () => {
    expect(subject.getRole()).toEqual("Engineer");
}); 
test('gets github of Engineer', () => {
    expect(subject.getGithub()).toEqual("davidmannex");
}); 