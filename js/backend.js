


$('#switch-hitters2').sheetrock({
  url: mySpreadsheet,
  query: "select E,B,J order by J desc",
  //query: "select A",
  //fetchSize: 10
});


/*
// Load an entire worksheet.
$('#statistics').sheetrock({
  url: mySpreadsheet
});

*/



sheetrock({
  url: mySpreadsheet,
  query: "select E,B,J order by J desc",
  fetchSize: 10,
  callback: function (error, options, response) {
    console.log(error, options, response);
  }
});
