google.load('visualization', '1.0', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var data1 = new google.visualization.DataTable();
  data1.addColumn('string', 'Opinion');
  data1.addColumn('number', 'Slices');
  data1.addRows([
    ['Euh...', 98],
    ['Au secours !', 421],
    ['Mais comment êtes-vous entré chez moi ?', 134],
  ]);

  // Set chart options
  var options1 = {'title':'Avez-vous ressenti une recrudescence des violations de domicile ?',
    'width':'100%',
    'height':'400'};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart-div'));
  chart.draw(data1, options1);

  var data2 = new google.visualization.DataTable();
  data2.addColumn('string', 'Opinion');
  data2.addColumn('number', 'Slices');
  data2.addRows([
    ['Oui', 624],
    ['Non', 258],
    ['NSPP', 72],
  ]);

  // Set chart options
  var options2 = {'title':'Qu\'en pensez-vous ?',
    'width':'100%',
    'height':'400'};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart-div2'));
  chart.draw(data2, options2);

  var data3 = new google.visualization.DataTable();
  data3.addColumn('string', 'Opinion');
  data3.addColumn('number', 'Slices');
  data3.addRows([
    ['Européenne ou africaine ?', 548],
    ['Je ne sais p...Aaaaah !', 475],
  ]);

  // Set chart options
  var options3 = {'title':'A quelle vitesse vole une hirondelle portant une noix de coco ?',
    'width':'100%',
    'height':'400'};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart-div3'));
  chart.draw(data3, options3);

  var data4 = new google.visualization.DataTable();
  data4.addColumn('string', 'Opinion');
  data4.addColumn('number', 'Slices');
  data4.addRows([
    ['Les quoi ?', 953],
    ['Pardon, je vous entends très mal avec ce chapeau en aluminium', 84],
    ['C\'est une caméra cachée ? Il est où Marcel Béliveau ?', 49],
  ]);

  // Set chart options
  var options4 = {'title':'Les chemtrails : mythe ou réalité ?',
    'width':'100%',
    'height':'400'};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart-div4'));
  chart.draw(data4, options4);

  var data5 = new google.visualization.DataTable();
  data5.addColumn('string', 'Opinion');
  data5.addColumn('number', 'Slices');
  data5.addRows([
    ['ALL GLORY TO THE HYPNOTOAD', 1259674],
  ]);

  // Set chart options
  var options5 = {'title':'Quelle est votre religion ?',
    'width':'100%',
    'height':'400'};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart-div5'));
  chart.draw(data5, options5);

  var data6 = new google.visualization.DataTable();
  data6.addColumn('string', 'Opinion');
  data6.addColumn('number', 'Slices');
  data6.addRows([
    ['Alors c\'est simple, tout droit, à droite, à gauche, à gauche, encore tout droit, à droite, et c\'est bon', 96],
    ['Désolé je connais pas bien le quartier', 243],
    ['NSPP', 312],
  ]);

  // Set chart options
  var options6 = {'title':'Pardon, je cherche la rue Robert, vous pouvez m\'indiquer le chemin ?',
    'width':'100%',
    'height':'400'};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart-div6'));
  chart.draw(data6, options6);
}