
sheetrock({
  url: mySpreadsheet,
  query: "select E,B,J order by J desc",
  callback: function (error, options, response) {
    console.log(error, options, response);
    display_spending(response.rows);

  }
});


function display_spending(data_object){
  var data = [{
    x:[],
    y:[],
    type: 'bar'
  }];
  var first_indexed = false;

  data_object.forEach(function(d){
    if (first_indexed){
      data[0].x.push(d['cellsArray'][1]);
      data[0].y.push( Number(d['cellsArray'][2] ));
    }else{
      first_indexed = true;
    }
  });

  Plotly.newPlot('barchart', data);
}
