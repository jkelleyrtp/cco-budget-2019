
sheetrock({
  url: mySpreadsheet,
  query: "select E,B,J order by J desc",
  callback: function (error, options, response) {
    console.log(error, options, response);
    data_object = response.rows;

    var data = [{
      labels:[],
      values:[],
      type: 'pie'
    }];
    var first_indexed = false;

    data_object.forEach(function(d){
      if (first_indexed){
        data[0].labels.push(d['cellsArray'][1]);
        data[0].values.push( Number(d['cellsArray'][2] ));
      }else{
        first_indexed = true;
      }
    });

    Plotly.newPlot('piechart', data);
  }
});
