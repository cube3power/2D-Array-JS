var tdarrayindex = function(x, y, method) {
  var methodoptions = ["interleave", "triangle", "primefactor", "cantorpair"];
  if (!method || method === "interleave") {
    var xstring = x.toString();
    var ystring = y.toString();
    if (xstring.length > ystring.length) {
      var zeroarray = Array(xstring.length - ystring.length + 1).join("0");
      ystring = zeroarray + ystring;
    } else if (ystring.length > xstring.length) {
      var zeroarray = Array(ystring.length - xstring.length + 1).join("0");
      xstring = zeroarray + xstring;
    }

    var l = xstring.length;
    var finalstring = '';

    for (var i = 0; i < l; i++) {
      finalstring += xstring[i] + ystring[i];
    }
    
    return Number(finalstring);
  } else if (method === "triangle") {
		var number = ((x + y - 1) ^ 2 + x + y - 1) / 2 + y;
    return number;
  } else if (method === "primefactor") {
  	return (2^y)(3^x);
  } else if (method === "cantorpair") {
  	return ((x + y)(x + y + 1) / 2) + y;
  } else {
  	console.warn(method + " is not a valid method");
  }
};
