
const expect = require('chai').expect
const name = 'React Quickly'
const url = ['http://reactquickly.co', 'https://www.manning.com/books/react-quickly']


// define the test suite. first argument is a string of the object that we are testing
describe('name and url', function() {
  // test case. First argument is the expected behaviour
  it('must match the values', function(done){
    // invoke expect() with the object we want to test like name or url
    // use chained methods to check for type and value
    // expect actually calls your functions and tests your variables, then compares actual to expected value
    expect(name).to.be.a('string')
    expect(name).to.equal('React Quickly')
    expect(url).to.have.length(2)
    // can use deep.property to check for values of the nested elements. i.e. checking for 2nd element in the url array
    expect(url).to.have.deep.property('[1]', 'https://www.manning.com/books/react-quickly')
      .with.length(43)
    //done argument to tell mocha the test is over
    done()
  })
})
