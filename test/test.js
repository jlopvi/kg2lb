const expect = require('chai').expect
const kg2lb = require('..').kg2lb;
const lb2kg = require('..').lb2kg;


describe('#kg2lb', function() {
  it('Pasar de kg a lb', function () {
    const peso = kg2lb(1)
    expect(peso).to.equal('2.20lb')
  })
  it('Pasar de lb a kg', function() {
    const peso = lb2kg(1)
    expect(peso).to.equal("0.45kg")
  })
})
