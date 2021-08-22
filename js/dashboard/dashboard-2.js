(function($) {
    "use strict"


    var data = {
        labels: ['Positive', 'Negative', 'Neutral'],
        series: [{
                    value: 20,
                    className: "bg-positive"
                },
                {
                    value: 50,
                    className: "bg-negative"
                },
                {
                    value: 30,
                    className: "bg-neutral"
                }
            ]
            //        colors: ["#333", "#222", "#111"]
    };

    var options = {
        labelInterpolationFnc: function(value) {
            return value[0]
        }
    };

    var responsiveOptions = [
        ['screen and (min-width: 640px)', {
            chartPadding: 30,
            labelOffset: 100,
            labelDirection: 'explode',
            labelInterpolationFnc: function(value) {
                return value;
            }
        }],
        ['screen and (min-width: 1024px)', {
            labelOffset: 80,
            chartPadding: 20
        }]
    ];

    new Chartist.Pie('.ct-pie-chart', data, options, responsiveOptions);


    /*----------------------------------*/

    var data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
            [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
            [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4],
            [4, 6, 3, 9, 6, 5, 2, 8, 3, 4, 5, 4],
        ]
    };

    var options = {
        seriesBarDistance: 10
    };

    var responsiveOptions = [
        ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
                labelInterpolationFnc: function(value) {
                    return value[0];
                }
            }
        }]
    ];

    new Chartist.Bar('.ct-bar-chart', data, options, responsiveOptions);
    new Chartist.Bar('.ct-bar-chart-2', data, options, responsiveOptions);


    $('.year-calendar').pignoseCalendar({
        theme: 'blue' // light, dark, blue
    });






})(jQuery);


const wt2 = new PerfectScrollbar('.widget-todo2');