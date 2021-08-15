var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}
    
function add(a,b,c){
        a = parseInt(a, 10);
        b = parseInt(b, 10);
        c = parseInt(c, 10);

        res = a + b + c ;
        return res;
}

function Calculate_stats(json){
    neg = json.Total[0].negative;
    document.getElementById("negative").innerHTML = neg;
    pos = json.Total[0].positive
    document.getElementById("positive").innerHTML = pos;
    neu = json.Total[0].neutral
    document.getElementById("neutral").innerHTML = neu;
    total = add(pos,neg,neu);
    document.getElementById("total").innerHTML = total;
    return [neg,pos,neu,total];
}

function location_stats(number,percentages){
  stats = ["neg","pos","neu"]
  for(i=0;i<stats.length;i++){
      id = "loc_"+stats[i]+"_"+number;
      document.getElementById(id).innerHTML = percentages[i]+ "%";
      document.getElementById(id).style.width = (percentages[i] - 1) + "%";
      document.getElementById(id + "_table").innerHTML = percentages[i]+ "%";
  }


}
function process_tweet(id,json){
    tweet = json.Tweets[id-1].tweet
    document.getElementById("tweet_" + id).innerHTML = tweet;
    po = json.Tweets[id-1].polarity;
    document.getElementById("tr_"+id).style.color = "white";
    document.getElementById("tr_"+id).style.fontWeight = "bold"
    if(po == "negative"){
        document.getElementById("icon_"+id).className = "fa fa-thumbs-o-down w3-large";
        document.getElementById("tr_"+id).style.background = "#FF0000";
        id="tr_1"
    }else if(po == "positive"){
        document.getElementById("icon_"+id).className = "fa fa-thumbs-o-up w3-large";
        document.getElementById("tr_"+id).style.background = "#008000";
    }else{
        document.getElementById("icon_"+id).className = "fa fa-hand-paper-o w3-large";
        document.getElementById("tr_"+id).style.background = "#0000FF";
    }
    time = json.Tweets[0].time;
    document.getElementById("time_"+id).innerHTML = time;
    loc_tweet = json.Tweets[0].loc;
    document.getElementById("loc_tweet_"+id).innerHTML = loc_tweet;

}
function load_tweets(number_of_tweets,json){
    for(i = 1 ; i < number_of_tweets+1 ; i++){
      try {
        process_tweet(i,json)
      }
      catch(err) {
        console.log("error");
      }
    }

}
function Realtime() {
  var i = 0;
  // This block will be executed to get realtime impression.
  setInterval(function() {
    API = "";
    Link = API+"/stats/";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", Link, false ); // false for synchronous request
    xmlHttp.send( null );
    // Search_word = document.getElementById("Search_word").value;
    text = xmlHttp.responseText;
    json = JSON.parse(text);
    console.log(json);
    [neg,pos,neu,total] = Calculate_stats(json);
    
    pos_percent =  Math.round((pos/total)*100);
    neg_percent =  Math.round((neg/total)*100);
    neu_percent =  Math.round((neu/total)*100);
    location_stats(1,[neg_percent,pos_percent,neu_percent]);
    load_tweets(5,json);    
    pie_chart([neg,pos,neu]);
    
  }, 3000);
} // End

function search() {
    API = "";
    Search_word = document.getElementById("Search_word").value;
    Link = API+"/put/"+Search_word;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", Link, false ); // false for synchronous request
    xmlHttp.send( null );
    console.log(xmlHttp.responseText); 
    if(xmlHttp.responseText == 1){
        console.log("listening");
    }
    Realtime();

}
function pie_chart(results){
  var data = anychart.data.set([
    ['ايجابي', results[1]],
    ['متعادل',results[2]],
    ['سلبي', results[0]]
    ]);
var chart = anychart.pie(data);
chart.innerRadius('55%')
var palette = anychart.palettes.distinctColors();
document.getElementById("image_chart").innerHTML = "";
// set the colors according to the brands
palette.items([

  { color: "#008000" },
  { color: "#0000FF"},
  { color: "#FF0000" },
  { color: '#A0521B' }
]);

chart.palette(palette);
chart.legend(false);
chart.tooltip().format('النسبة المئوية: {%PercentValue}%');
chart.background().fill("#f1f1f1");
var label = anychart.standalones.label();

// configure the label settings
label
  .useHtml(true)
  .text(
    '<br/></br><span style="color:#444857; font-size: 100%;"><i>النتائج الكلية</i></span>'
  )
  .position('center')
  .anchor('center')
  .hAlign('center')
  .vAlign('middle');

chart.center().content(label);
chart.container('image_chart');
chart.draw();



}
  
    var map = anychart.map();
    var scale;
    function map_chart(data){
        document.getElementById("map").innerHTML = "";    
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
          { less: -100 },
          { from: -100, to: -10 },
          { from: -10, to: 0 },
          { from: 0, to: 10 },
          { from: 10, to: 100 },
          { greater: 100 }
          ]);
          scale.colors(["rgb(139,5,5)", "rgb(255,102,102)", "rgb(255,204,204)", "rgb(204,255,204)", "rgb(51,255,51)", "rgb(0,204,102)"]);
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
          map.container('map');
          // initiate chart drawing
          map.draw();
    }
    map_data = []
    map_data.push({ id: "EG", value: 10, title: "Egypt" })
    map_data.push({ id: "US", value: 100, title: "United States" })
    map_data.push({ id: "RU", value: 1000, title: "Russia" })
    map_data.push({ id: "FR", value: -10, title: "FRance" })
    map_data.push({ id: "SA", value: 0, title: "Saudi Arabia" })
    map_data.push({ id: "CN", value: -100, title: "China" })
    map_chart(map_data);
    
    anychart.onDocumentReady(function () {

    // create a data set
    var data = anychart.data.set([
    {x: "سلبى", value: 20,
       normal:{
           fill: "#FF0000",
           stroke: null,
           label: {enabled: true}
         },
       hovered:  {
           fill: "#FF0000",
           stroke: null,
           label: {enabled: true}
         },
       selected: {
           fill: "#FF0000",
           stroke: null,
           label: {enabled: true}
         }
      },
      {x: "متعادل", value: 50,
       normal:   {
           fill: "#0000FF",
           stroke: null,
           label: {enabled: true}
         },
       hovered:  {
           fill: "#0000FF",
           stroke: null,
           label: {enabled: true}
         },
       selected: {
           fill: "#0000FF",
           stroke: null,
           label: {enabled: true}
         }
      },
      {x: "ايجابى", value: 30,
       normal:   {
           fill: "#008080",
           stroke: null,
           label: {enabled: true}
         },
       hovered:  {
           fill: "#008080",
           stroke: null,
           label: {enabled: true}
         },
       selected: {
           fill: "#008080",
           stroke: null,
           label: {enabled: true}
         }
      }
    ]);
   
    // create a chart
    var chart = anychart.bar();

    // create a bar series and set the data
    var series = chart.bar(data);

    // set the chart title
    chart.title("النسبة لكل تصنيف");

    // set the titles of the axes
   // chart.xAxis().title("التصنيف");
    //chart.yAxis().title("النسبة");
    chart.padding(30);

    // set the container id
    chart.container("bar_chart");

    // initiate drawing the chart
    chart.draw();
});
anychart.onDocumentReady(function () {
    var data = anychart.data.set([
/*
["يناير", 200, 180,50],
    ["فبراير", 289, 290,100],
    ["مارس", 197, 370,70],
    ["ابريل", 210, 400,50],
    ["مايو", 220, 120,60],
    ["يونيو", 215, 214,30],
    ["يوليو", 209, 153,70],
    ["اغسطس", 357, 257,80],
    ["سبتمبر", 333, 183,30],
    ["اكتوبر", 218, 236,300],
    ["نوفمبر", 289, 147,80],
    ["ديسمبر", 266, 368,80]
        ]);*/
["Jan", 200, 180,50],
    ["Feb", 289, 290,100],
    ["Mar", 197, 370,70],
    ["Apr", 210, 400,50],
    ["May", 220, 120,60],
    ["Jun", 215, 214,30],
    ["Jul", 209, 153,70],
    ["Aug", 357, 257,80],
    ["Sep", 333, 183,30],
    ["Oct", 218, 236,300],
    ["Nov", 289, 147,80],
    ["Dec", 266, 368,80]
        ]);

   
    // map the data
    var seriesData_1 = data.mapAs({x: 0, value: 1});
    var seriesData_2 = data.mapAs({x: 0, value: 2});
    var seriesData_3 = data.mapAs({x: 0, value: 3});

    // create a chart
    var chart = anychart.column();

    // create the first series, set the data and name
    var series1 = chart.column(seriesData_1);

    // configure the visual settings of the first series
    series1.normal().fill("#008080", 0.8);
    series1.hovered().fill("#008080", 0.7);
    series1.selected().fill("#008080", 0.7);
    
   // create the first series, set the data and name
    var series2 = chart.column(seriesData_2);

    // configure the visual settings of the first series
    series2.normal().fill("#0000FF", 0.8);
    series2.hovered().fill("#0000FF", 0.7);
    series2.selected().fill("#0000FF", 0.7);
    


// create the first series, set the data and name
    var series3 = chart.column(seriesData_3);

    // configure the visual settings of the first series
    series3.normal().fill("#FF0000", 0.8);
    series3.hovered().fill("#FF0000", 0.7);
    series3.selected().fill("#FF0000", 0.7);
   
    
    // set the chart title
    chart.title("النسب فى شهور السنه");
    chart.padding(30);
    // set the padding between bars
    chart.barsPadding(0);

    // set the padding between bar groups
    chart.barGroupsPadding(1);
// adjusting axes labels
//  chart.yAxis().labels().rotation(-90);
 // chart.yAxis().labels().padding(0,5,0,5);

  chart.xAxis().labels().rotation(-90);
  //chart.xAxis().labels().padding(5,0,10,30);
  
    // set the container id
    chart.container("vertical_bar_chart");

    // initiate drawing the chart
    chart.draw();
});
