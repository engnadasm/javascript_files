    // Get the Sidebar
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
    
function numinput(a,b,c){
        a = parseInt(a, 10);
        b = parseInt(b, 10);
        c = parseInt(c, 10);

        res = a + b + c ;
        return res;
}
    
function counter() {
  var i = 0;
  // This block will be executed 100 times.
  setInterval(function() {
    API = "";
    Link = API+"/stats/";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", Link, false ); // false for synchronous request
    xmlHttp.send( null );
    Search_word = document.getElementById("Search_word").value;
    //var chart_image = new File("/Charts/pieChart_"+Search_word+".png");
    //const fs = require("fs");

    //const path = "./Charts/pieChart_"+Search_word+".png";
    // var image = new Image();
    // var url_image = "./Charts/pieChart_"+Search_word+".png";
    
    // image.src = url_image;
    // if (image.width != 0) {
    //     console.log("enter if");
    //     document.getElementById('image_chart').style.visibility = 'visible';
    //     document.getElementById('img').src = "./Charts/pieChart_"+ Search_word + ".png";
    //     document.getElementById('img').style = "width:100%";
    // }else{
    //     console.log("enter else");
    //     document.getElementById('image_chart').style.visibility = 'hidden';
    // }
    text = xmlHttp.responseText;
    json = JSON.parse(text);
    console.log(json);
    
    neg = json.Total[0].negative;
    document.getElementById("negative").innerHTML = neg;
    pos = json.Total[0].positive
    document.getElementById("positive").innerHTML = pos;
    neu = json.Total[0].neutral
    document.getElementById("neutral").innerHTML = neu;
    total = numinput(pos,neg,neu);
    document.getElementById("total").innerHTML = total;
    
    pos_percent =  Math.round((pos/total)*100);
    neg_percent =  Math.round((neg/total)*100);
    neu_percent =  Math.round((neu/total)*100);

    document.getElementById("loc_neg_1").innerHTML = neg_percent+ "%";
    document.getElementById("loc_pos_1").innerHTML = pos_percent+ "%";
    document.getElementById("loc_neu_1").innerHTML = neu_percent+ "%";
    
    document.getElementById("loc_neg_1").style.width = (neg_percent - 1) + "%";
    document.getElementById("loc_pos_1").style.width = (pos_percent - 1) + "%";
    document.getElementById("loc_neu_1").style.width = (neu_percent - 1) + "%";
    
    document.getElementById("loc_1_neg").innerHTML = neg_percent+ "%";
    document.getElementById("loc_1_pos").innerHTML = pos_percent+ "%";
    document.getElementById("loc_1_neu").innerHTML = neu_percent+ "%";
    
    tweet_1 = json.Tweets[0].tweet_0
    document.getElementById("tweet_1").innerHTML = tweet_1;
    po_1 = json.Tweets[0].polarity_0;
    //document.getElementById("po_1").innerHTML = po_1;
    if(po_1 == "negative"){
        document.getElementById("icon_1").className = "fa fa-thumbs-o-down w3-red w3-large";
    }else if(po_1 == "positive"){
        document.getElementById("icon_1").className = "fa fa-thumbs-o-up w3-teal w3-large";
    }else{
        document.getElementById("icon_1").className = "fa w3-large fa-hand-paper-o w3-blue";
    }
    time_1 = json.Tweets[0].time_0;
    document.getElementById("time_1").innerHTML = time_1;
    loc_tweet_1 = json.Tweets[0].loc_0;
    document.getElementById("loc_tweet_1").innerHTML = loc_tweet_1;

    tweet_2 = json.Tweets[1].tweet_1
    document.getElementById("tweet_2").innerHTML = tweet_2;
    po_2 = json.Tweets[1].polarity_1;
    //document.getElementById("po_2").innerHTML = po_2;
    if(po_2 == "negative"){
        document.getElementById("icon_2").className = "fa fa-thumbs-o-down w3-red w3-large";
    }else if(po_2 == "positive"){
        document.getElementById("icon_2").className = "fa fa-thumbs-o-up w3-teal w3-large";
    }else{
        document.getElementById("icon_2").className = "fa w3-large fa-hand-paper-o w3-blue";
    }
    time_2 = json.Tweets[1].time_1;
    document.getElementById("time_2").innerHTML = time_2;
    loc_tweet_2 = json.Tweets[1].loc_1;
    document.getElementById("loc_tweet_2").innerHTML = loc_tweet_2;
    
    tweet_3 = json.Tweets[2].tweet_2
    document.getElementById("tweet_3").innerHTML = tweet_3;
    po_3 = json.Tweets[2].polarity_2;
    //document.getElementById("po_3").innerHTML = po_3;
    if(po_3 == "negative"){
        document.getElementById("icon_3").className = "fa fa-thumbs-o-down w3-red w3-large";
    }else if(po_3 == "positive"){
        document.getElementById("icon_3").className = "fa fa-thumbs-o-up w3-teal w3-large";
    }else{
        document.getElementById("icon_3").className = "fa w3-large fa-hand-paper-o w3-blue";
    }
    time_3 = json.Tweets[2].time_2;
    document.getElementById("time_3").innerHTML = time_3;
    loc_tweet_3 = json.Tweets[2].loc_2;
    document.getElementById("loc_tweet_3").innerHTML = loc_tweet_3;
    
    tweet_4 = json.Tweets[3].tweet_3
    document.getElementById("tweet_4").innerHTML = tweet_4;
    po_4 = json.Tweets[3].polarity_3;
    //document.getElementById("po_4").innerHTML = po_4;
    if(po_4 == "negative"){
        document.getElementById("icon_4").className = "fa fa-thumbs-o-down w3-red w3-large";
    }else if(po_4 == "positive"){
        document.getElementById("icon_4").className = "fa fa-thumbs-o-up w3-teal w3-large";
    }else{
        document.getElementById("icon_4").className = "fa w3-large fa-hand-paper-o w3-blue";
    }
    time_4 = json.Tweets[3].time_3;
    document.getElementById("time_4").innerHTML = time_4;
    loc_tweet_4 = json.Tweets[3].loc_3;
    document.getElementById("loc_tweet_4").innerHTML = loc_tweet_4;
    
    tweet_5 = json.Tweets[4].tweet_4
    document.getElementById("tweet_5").innerHTML = tweet_5;
    po_5 = json.Tweets[4].polarity_4;
    //document.getElementById("po_5").innerHTML = po_5;
    if(po_5 == "negative"){
        document.getElementById("icon_5").className = "fa fa-thumbs-o-down w3-red w3-large";
    }else if(po_5 == "positive"){
        document.getElementById("icon_5").className = "fa fa-thumbs-o-up w3-teal w3-large";
    }else{
        document.getElementById("icon_5").className = "fa w3-large fa-hand-paper-o w3-blue";
    }
    time_5 = json.Tweets[4].time_4;
    document.getElementById("time_5").innerHTML = time_5;
    loc_tweet_5 = json.Tweets[4].loc_4;
    document.getElementById("loc_tweet_5").innerHTML = loc_tweet_5;
    var data = anychart.data.set([
    ['ايجابي', pos],
    ['متعادل',neu],
    ['سلبي', neg]
    ]);
    pie_chart(data);
    
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
    counter();

}
function pie_chart(data){

var chart = anychart.pie(data);
chart.innerRadius('55%')
var palette = anychart.palettes.distinctColors();
document.getElementById("image_chart").innerHTML = "";
// set the colors according to the brands
palette.items([
  { color: '#1BA737' },
  { color: '#F3E514' },
  { color: '#A7331B' },
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
