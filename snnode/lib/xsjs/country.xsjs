function saveCountry(country)
{
	var connection = $.hdb.getConnection();
	var output=JSON.stringify(country);
	var procCall=connection.loadProcedure("SN_HDI_SNHDB_1","sn.snhdb::CreateCountry");
	var result=procCall(country.regionname, country.countryname);
	connection.commit();
	connection.close();
	if(result && result.EX_ERROR !=1){ return result.EX_ERROR;}
	else {return output;}
}

var country={
 regionname:  $.request.parameters.get("region"),
 countryname: $.request.parameters.get("name")
};

var output=saveCountry(country);
$.response.contentType="application/json";
$.response.setBody(output);