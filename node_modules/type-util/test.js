var should = require("should"),
util = require('./index.js');
describe("type-util unit tests",function(){
  it("type-util Should be created",function(){
	 util.isEmpty("is here").should.equal(false);
	 util.isArray("is here").should.equal(false);
	 util.isString("is here").should.equal(true);
	 util.isObject("is here").should.equal(false);
	 util.isFunction("is here").should.equal(false);
	 util.lengthOf({a:'a',b:'c',c:{d:'d'}}).should.equal(3);
	 util.find({a:'a',b:'c',c:{d:'d'}}, 'b').should.equal('c');
  });
});
