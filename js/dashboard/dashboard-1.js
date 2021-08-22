(function($) {
    "use strict";



    // // Morris bar chart
    // Morris.Bar({
    //     element: 'morris-bar-chart',
    //     data: [{
    //         y: '2015',
    //         a: 100,
    //         b: 100,
    //         c: 90
    //     }, {
    //         y: '2016',
    //         a: 100,
    //         b: 100,
    //         c: 90
    //     }, {
    //         y: '2017',
    //         a: 100,
    //         b: 100,
    //         c: 90
    //     }, {
    //         y: '2018',
    //         a: 100,
    //         b: 100,
    //         c: 90
    //     }, {
    //         y: '2019',
    //         a: 100,
    //         b: 100,
    //         c: 90
    //     }, {
    //         y: '2020',
    //         a: 100,
    //         b: 100,
    //         c: 90
    //     }, {
    //         y: '2021',
    //         a: 100,
    //         b: 100,
    //         c: 90
    //     }],
    //     xkey: 'y',
    //     ykeys: ['a', 'b', 'c'],
    //     labels: ['Positive', 'Negative', 'Neutral'],
    //     barColors: ['#343957', '#5873FE', '#5783FE'],
    //     hideHover: 'auto',
    //     gridLineColor: '#eef0f2',
    //     resize: true
    // });

    $('#info-circle-card').circleProgress({
        value: 0.70,
        size: 100,
        fill: {
            gradient: ["#a389d5"]
        }
    });

    $('.testimonial-widget-one .owl-carousel').owlCarousel({
        singleItem: true,
        loop: true,
        autoplay: false,
        //        rtl: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('#vmap13').vectorMap({
        map: 'usa_en',
        backgroundColor: 'transparent',
        borderColor: 'rgb(88, 115, 254)',
        borderOpacity: 0.25,
        borderWidth: 1,
        color: 'rgb(88, 115, 254)',
        enableZoom: true,
        hoverColor: 'rgba(88, 115, 254)',
        hoverOpacity: null,
        normalizeFunction: 'linear',
        scaleColors: ['#b6d6ff', '#005ace'],
        selectedColor: 'rgba(88, 115, 254, 0.9)',
        selectedRegions: null,
        showTooltip: true,
        // onRegionClick: function(element, code, region) {
        //     var message = 'You clicked "' +
        //         region +
        //         '" which has the code: ' +
        //         code.toUpperCase();

        //     alert(message);
        // }
    });

    var nk = document.getElementById("sold-product");
    // nk.height = 50
    // new Chart(nk, {
    //     type: 'pie',
    //     data: {
    //         defaultFontFamily: 'Poppins',
    //         datasets: [{
    //             data: [55, 25, 20],
    //             borderWidth: 0,
    //             backgroundColor: [
    //                 "rgba(89, 59, 219, .9)",
    //                 "rgba(89, 59, 219, .7)",
    //                 "rgba(89, 59, 219, .5)"
    //             ],
    //             hoverBackgroundColor: [
    //                 "rgba(89, 59, 219, .9)",
    //                 "rgba(89, 59, 219, .7)",
    //                 "rgba(89, 59, 219, .5)"
    //             ]

    //         }],
    //         labels: ['Positive', 'Negative', 'Neutral']

    //     },
    //     options: {
    //         responsive: true,
    //         legend: false,
    //         maintainAspectRatio: false
    //     }
    // });

    /* change
    Morris.Donut({
        element: 'morris_donught',
        data: [{
            label: "\xa0 \xa0 Positive \xa0 \xa0",
            value: 12,

        }, {
            label: "\xa0 \xa0 Negative \xa0 \xa0",
            value: 30
        }, {
            label: "\xa0 \xa0 Neutral \xa0 \xa0",
            value: 20
        }],
        resize: true,
        colors: ['#457b9d', '#E63946', '#1D3557']
    });
    */
//line chart
    // Morris.Area({
    //     element: 'line_chart_2',
    //     data: [{
    //             period: '2015',
    //             positive: 0,
    //             neutral: 0,
    //             negative: 0
    //         }, {
    //             period: '2016',
    //             positive: 90,
    //             neutral: 60,
    //             negative: 25
    //         }, {
    //             period: '2017',
    //             positive: 40,
    //             neutral: 80,
    //             negative: 35
    //         }, {
    //             period: '2018',
    //             positive: 30,
    //             neutral: 47,
    //             negative: 17
    //         }, {
    //             period: '2019',
    //             positive: 150,
    //             neutral: 40,
    //             negative: 120
    //         }, {
    //             period: '2020',
    //             positive: 25,
    //             neutral: 80,
    //             negative: 40
    //         }, {
    //             period: '2021',
    //             positive: 10,
    //             neutral: 10,
    //             negative: 10
    //         }


    //     ],
    //     xkey: 'period',
    //     ykeys: ['positive', 'negative', 'neutral'],
    //     labels: ['Positive', 'Negative', 'Neutral'],
    //     pointSize: 3,
    //     fillOpacity: 0,
    //     pointStrokeColors: ['#DCDCDC', '#34C73B', '#0000FF'],
    //     behaveLikeLine: true,
    //     gridLineColor: 'transparent',
    //     lineWidth: 3,
    //     hideHover: 'auto',
    //     lineColors: ['rgb(192, 10, 39)', 'rgb(0, 171, 197)', '#75B432'],
    //     resize: true

    // });
//bar chart stalked

    Morris.Bar.prototype.fillForSeries = function(i) {
        var color;
        return "0-#f00-#f00:20-#f00";
    };

    // Morris.Bar({
    //     element: 'morris_bar_2',
    //     data: [
    //       { y: '2014', a: 75,  b: 65, c: 75 },
    //       { y: '2015', a: 50,  b: 40, c: 45 },
    //       { y: '2016', a: 75,  b: 65, c: 85 },
    //       { y: '2017', a: 79,  b: 35, c: 45 },
    //       { y: '2018', a: 60,  b: 20, c: 60 },
    //       { y: '2019', a: 66,  b: 30, c: 50 },
    //       { y: '2020', a: 46,  b: 60, c: 90 },
    //       { y: '2021', a: 35,  b: 80, c: 60 },
    //     ],
    //     xkey: 'y',
    //     ykeys: ['a', 'b', 'c'],
    //     labels: ['Positive', 'Negative', 'Neutral'],
    //     barColors: ['rgb(0, 0, 128)', 'rgb(0, 171, 197)', '#75B432'], 
    //     stacked: true,
    //     gridTextSize: 11,
    //     hideHover: 'auto',
    //     resize: true
    // });
//bar chart stalked

    Morris.Bar.prototype.fillForSeries = function(i) {
        var color;
        return "0-#f00-#f00:20-#f00";
    };

    // Morris.Bar({
    //     element: 'morris_bar_3',
    //     data: [
    //       { y: 'Canada', a: 79,  b: 35, c: 45 },
    //       { y: 'Iraq', a: 60,  b: 20, c: 60 },
    //       { y: 'Guinea', a: 66,  b: 30, c: 50 },
    //       { y: 'Denmark', a: 46,  b: 60, c: 90 },
    //       { y: 'Egypt', a: 35,  b: 80, c: 60 },
    //     ],
    //     xkey: 'y',
    //     ykeys: ['a', 'b', 'c'],
    //     labels: ['Positive', 'Negative', 'Neutral'],
    //     barColors: ['rgb(0, 0, 128)', 'rgb(0, 171, 197)', '#75B432'], 
    //     stacked: true,
    //     gridTextSize: 11,
    //     hideHover: 'auto',
    //     resize: true
    // });

})(jQuery);

(function($) {
    "use strict";

    var data = [],
        totalPoints = 300;

    function getRandomData() {

        if (data.length > 0)
            data = data.slice(1);

        // Do a random walk

        while (data.length < totalPoints) {

            var prev = data.length > 0 ? data[data.length - 1] : 50,
                y = prev + Math.random() * 10 - 5;

            if (y < 0) {
                y = 0;
            } else if (y > 100) {
                y = 100;
            }

            data.push(y);
        }

        // Zip the generated y values with the x values

        var res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]])
        }

        return res;
    }

    // Set up the control widget

    var updateInterval = 30;
    $("#updateInterval").val(updateInterval).change(function() {
        var v = $(this).val();
        if (v && !isNaN(+v)) {
            updateInterval = +v;
            if (updateInterval < 1) {
                updateInterval = 1;
            } else if (updateInterval > 3000) {
                updateInterval = 3000;
            }
            $(this).val("" + updateInterval);
        }
    });

    var plot = $.plot("#cpu-load", [getRandomData()], {
        series: {
            shadowSize: 0 // Drawing is faster without shadows
        },
        yaxis: {
            min: 0,
            max: 100
        },
        xaxis: {
            show: false
        },
        colors: ["#007BFF"],
        grid: {
            color: "transparent",
            hoverable: true,
            borderWidth: 0,
            backgroundColor: 'transparent'
        },
        tooltip: true,
        tooltipOpts: {
            content: "Y: %y",
            defaultTheme: false
        }


    });

    function update() {

        plot.setData([getRandomData()]);

        // Since the axes don't change, we don't need to call plot.setupGrid()

        plot.draw();
        setTimeout(update, updateInterval);
    }

    update();


})(jQuery);


const wt = new PerfectScrollbar('.widget-todo');
const wtl = new PerfectScrollbar('.widget-timeline');