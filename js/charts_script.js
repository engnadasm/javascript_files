
var negative_color = "#E63946";
var neutral_color = "#1D3557";
var positive_color = "#457b9d";
var total_color = "#a8dafc";



// create data set on our data
function split_chart(dataSet, space) {
    // map data for the first series, take x from the zero column and value from the first column of data set
    var seriesData_1 = dataSet.mapAs({ 'x': 0, 'value': 1 });

    // map data for the second series, take x from the zero column and value from the second column of data set
    var seriesData_2 = dataSet.mapAs({ 'x': 0, 'value': 2 });

    // map data for the third series, take x from the zero column and value from the third column of data set
    var seriesData_3 = dataSet.mapAs({ 'x': 0, 'value': 3 });

    // create bar chart
    var chart = anychart.column();

    // turn on chart animation
    chart.animation(true);

    // set container id for the chart
    chart.container(space);
    chart.padding([10, 40, 5, 20]);

    // set scale minimum
    chart.yScale().minimum(0);

    // force chart to stack values by Y scale.
    chart.yScale().stackMode('value');

    chart.yAxis().labels().format(function () {
        return this.value.toLocaleString();
    });

    // helper function to setup label settings for all series
    var setupSeriesLabels = function (series, name) {
        series.name(name);
        series.stroke('3 #fff 1');
        series.hovered().stroke('3 #fff 1');
    };

    // temp variable to store series instance
    var series;

    // create first series with mapped data
    series = chart.column(seriesData_1);
    setupSeriesLabels(series, 'Positive');
    series.normal().fill(positive_color, 0.8);

    // create second series with mapped data
    series = chart.column(seriesData_2);
    setupSeriesLabels(series, 'Neutral');
    series.normal().fill(neutral_color, 0.8);

    // create third series with mapped data
    series = chart.column(seriesData_3);
    setupSeriesLabels(series, 'Negative');
    series.normal().fill(negative_color, 0.8);


    // turn on legend
    chart.legend().enabled(true).fontSize(13).padding([0, 0, 20, 0]);
    chart.interactivity().hoverMode('by-x');
    chart.tooltip().displayMode('union');
    // initiate chart drawing
    chart.draw();
};


function spine_chart(dataSet, space) {
    // create a chart
    chart = anychart.line();

    // map data for the first series, take x from the zero column and value from the first column of data set
    var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });

    // map data for the second series, take x from the zero column and value from the second column of data set
    var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });

    // map data for the third series, take x from the zero column and value from the third column of data set
    var thirdSeriesData = dataSet.mapAs({ x: 0, value: 3 });

    
    // create a spline series and set the data
    var series = chart.spline(firstSeriesData);
    var series2 = chart.spline(secondSeriesData);
    var series3 = chart.spline(thirdSeriesData);
    series.stroke(negative_color, 2);
    series2.stroke(positive_color, 2);
    series3.stroke(neutral_color, 2);

    // set the container id
    chart.container(space);

    // initiate drawing the chart
    chart.draw();
};

function word_cloud(data,space) {
    // create a chart
    chart = anychart.tagCloud();

    // configure angles
    chart.angles([0]);

    // set the parsing mode
    chart.data(data, { mode: "by-word" });

    // set the container id
    chart.container(space);

    // initiate drawing the chart
    chart.draw();
}

function map_chart(data,space) {
    document.getElementById(space).innerHTML = "";
    map
        .title()
        .enabled(true)
        .useHtml(true)
        .padding([10, 0, 10, 0])
        .text(
            'Interactive Map <br/>' +
            '<span  style="color:#929292; font-size: 12px;">(Positive, Negative, Neutral)</span>'
        );

    map.geoData('anychart.maps.world');
    map.interactivity().selectionMode('none');
    map.padding(0);

    var dataSet = anychart.data.set(data);
    var densityData = dataSet.mapAs({ value: 'density' });
    var series = map.choropleth(densityData);

    series.labels(false);

    scale = anychart.scales.ordinalColor([
        { less: -1 },
        { from: -1, to: 1 },
        { greater: 1 }
    ]);
    scale.colors([negative_color, neutral_color, positive_color]);
    var colorRange = map.colorRange();
    colorRange.enabled(true).padding([0, 0, 20, 0]);
    colorRange
        .ticks()
        .enabled(true)
        .stroke('3 #ffffff')
        .position('center')
        .length(7);
    colorRange.colorLineSize(5);
    colorRange.marker().size(7);
    colorRange
        .labels()
        .fontSize(11)
        .padding(3, 0, 0, 0)
        .format(function () {
            var range = this.colorRange;
            var name;
            if (isFinite(range.start + range.end)) {
                name = "";
            } else if (isFinite(range.start)) {
                name = "Positive";
            } else {
                name = 'Negative';
            }
            return name;
        });

    series.colorScale(scale);

    // create zoom controls
    var zoomController = anychart.ui.zoom();
    zoomController.render(map);
    // set container id for the chart
    map.container(space);
    // initiate chart drawing
    map.draw();
}

function column_chart(data, place) {
    // map the data
    var seriesData_1 = data.mapAs({ x: 0, value: 1 });
    var seriesData_2 = data.mapAs({ x: 0, value: 2 });
    var seriesData_3 = data.mapAs({ x: 0, value: 3 });

    // create a chart
    var chart = anychart.column();

    // create the first series, set the data and name
    var series1 = chart.column(seriesData_1);

    // configure the visual settings of the first series
    series1.normal().fill(negative_color, 0.8);
    series1.hovered().fill(negative_color, 0.7);
    series1.selected().fill(negative_color, 0.7);


    // create the first series, set the data and name
    var series2 = chart.column(seriesData_2);

    // configure the visual settings of the first series
    series2.normal().fill(neutral_color, 0.8);
    series2.hovered().fill(neutral_color, 0.7);
    series2.selected().fill(neutral_color, 0.7);


    // create the first series, set the data and name
    var series3 = chart.column(seriesData_3);

    // configure the visual settings of the first series
    series3.normal().fill(positive_color, 0.8);
    series3.hovered().fill(positive_color, 0.7);
    series3.selected().fill(positive_color, 0.7);
    series3.stroke('1 ' + positive_color);

    // set the chart title
    //chart.title("النسب فى شهور السنه");
    chart.padding(20);
    // set the padding between bars
    chart.barsPadding(0);

    // set the padding between bar groups
    chart.barGroupsPadding(1);
    // adjusting axes labels
    //  chart.yAxis().labels().rotation(-90);
    chart.yAxis().labels().padding(0, 0, 0, 30);
    chart.xAxis().labels().padding(0, 0, 0, 30);

    //chart.xAxis().labels().rotation(-90);
    //chart.xAxis().orientation("bottom");
    //chart.yAxis().orientation("right");
    //chart.xScale().inverted(true);
    //chart.xAxis().labels().padding(0,0,0,0);

    // set the container id
    chart.container(place);

    // initiate drawing the chart
    chart.draw();
}

function pie_chart(results,space) {
    var data = anychart.data.set([
        ['ايجابي', results[1]],
        ['متعادل', results[2]],
        ['سلبي', results[0]]
    ]);
    var chart = anychart.pie(data);


    // set legend title text settings
    chart
        .legend()
        // set legend position and items layout
        .position('center-bottom')
        .itemsLayout('horizontal')
        .align('center');
    var palette = anychart.palettes.distinctColors();
    document.getElementById("image_chart").innerHTML = "";
    // set the colors according to the brands
    palette.items([

        { color: positive_color },
        { color: neutral_color },
        { color: negative_color },
    ]);

    chart.palette(palette);
    chart.legend(false);
    chart.tooltip().format('النسبة المئوية: {%PercentValue}%');
    chart.background().fill("white");
    var label = anychart.standalones.label();

    // configure the label settings

    chart.center().content(label);
    chart.container(space);
    chart.draw();
    console.log("hit");
}

function bar_chart(dataSet, space) {
    // create data set on our data

    // map data for the first series, take x from the zero column and value from the first column of data set
    var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });

    // map data for the second series, take x from the zero column and value from the second column of data set
    var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });

    // map data for the third series, take x from the zero column and value from the third column of data set
    var thirdSeriesData = dataSet.mapAs({ x: 0, value: 3 });

    // map data for the fourth series, take x from the zero column and value from the fourth column of data set
    var fourthSeriesData = dataSet.mapAs({ x: 0, value: 4 });

    // create bar chart
    var chart = anychart.bar();

    // turn on chart animation
    chart.animation(true);

    //chart.padding([10, 40, 5, 20]);


    // helper function to setup settings for series
    var setupSeries = function (series, name) {
        series.name(name);
        series.hovered().labels(false);


        series
            .tooltip()
            .position('right')
            .anchor('left-center')
            .offsetX(5)
            .offsetY(0)
            .titleFormat('{%X}')
    };

    // temp variable to store series instance
    var series;

    
    // create second series with mapped data
    series = chart.bar(secondSeriesData);
    setupSeries(series, 'Negative');
    series.fill(negative_color)
    series.stroke(1, negative_color);

    // create third series with mapped data
    series = chart.bar(thirdSeriesData);
    setupSeries(series, 'Neutral');
    series.fill(neutral_color);
    series.stroke(1, neutral_color);

    // create first series with mapped data
    series = chart.bar(firstSeriesData);
    setupSeries(series, 'Positive');
    series.fill(positive_color)
    series.stroke(1, positive_color);

    // turn on legend

    chart.interactivity().hoverMode('single');
    chart.tooltip().positionMode('point');
    // set the padding between bar groups
    chart.barGroupsPadding(2);
    // set container id for the chart
    chart.container(space);
    console.log(dataSet);
    // initiate chart drawing
    chart.draw();
}; 