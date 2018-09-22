function saveCountry(country){
	var connection= $.hdb.getConnection();
	var output= JSON.stringify(country);
	var callProc= connection.loadProcedure("SN_HDI_SNHDB_1","sn.snhdb::CreateCountry");
	var result=callProc(country.regionname, country.countryname);
	connection.commit();
	connection.close();
	if(result && result.EX_ERROR !=1){ return {body: result, $.net.http.BAD_REQUEST};}
	else {return {body:output, $.net.http.CREATED};}
}

var req= $.request.body.asString();  
var country= JSON.parse(req);

var output=saveCountry(country);

$.respose.contentType("application/json");
$.respose.setBody(output.body);
$.respose.status=output.status;