describe("sample test suite", function() {

	beforeEach(function() {
	});
    it("not ok", function(){
    	expect(0).toBe(1);
    });
    
    it("add simple", function(){
    $.import("calc","calculator");
    var calc=$.calc.calculator;
    var sum=calc.addition(1,2);
    expect(sum).toBe(3);
    });
    
    it("Subtraction",function(){
    $.import("calc","calculator");
    var calc=$.calc.calculator;
    var sub=calc.subtraction(5,2);
    expect(sub).toBe(3);
    });
    
    it("Multiplication",function(){
    $.import("calc","calculator");
    var calc= $.calc.calculator;
    var mul=calc.multiplication(3,2);
    expect(mul).toBe(6)	;
    });

});