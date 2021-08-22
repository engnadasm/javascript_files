//change
//var total_data = [25,22,35]

var country_data = anychart.data.set([
    ['Canada', 79, 35, 45],
    ['Iraq', 60, 20, 60],
    ['Guinea', 66, 30, 50],
    ['Denmark', 46, 60, 90],
    ['Egypt', 35, 80, 60]
]);

var data_wordCloud = "Tyger, tyger, burning bright " +
"In the forests of the night, " +
"What immortal hand or eye " +
"Could frame thy fearful symmetry? " +
"In what distant deeps or skies " +
"Burnt the fire of thine eyes? " +
"On what wings dare he aspire? " +
"What the hand dare seize the fire? " +
"And what shoulder and what art " +
"Could twist the sinews of thy heart? " +
"And, when thy heart began to beat, " +
"What dread hand and what dread feet? " +
"What the hammer? what the chain? " +
"In what furnace was thy brain? " +
"What the anvil? what dread grasp " +
"Dare its deadly terrors clasp? " +
"When the stars threw down their spears, " +
"And watered heaven with their tears, " +
"Did He smile His work to see? " +
"Did He who made the lamb make thee? " +
"Tyger, tyger, burning bright " +
"In the forests of the night, " +
"What immortal hand or eye " +
"Dare frame thy fearful symmetry? ";

var map = anychart.map();
var scale;

map_data = []
map_data.push({ id: "EG", value: 10, title: "Egypt" })
map_data.push({ id: "US", value: 100, title: "United States" })
map_data.push({ id: "RU", value: 1000, title: "Russia" })
map_data.push({ id: "FR", value: -10, title: "FRance" })
map_data.push({ id: "SA", value: 0, title: "Saudi Arabia" })
map_data.push({ id: "CN", value: -100, title: "China" })


var month_data = anychart.data.set([
    ["Jan", 200, 180, 50],
    ["Feb", 289, 290, 100],
    ["Mar", 197, 370, 70],
    ["Apr", 210, 400, 50],
    ["May", 220, 120, 60],
    ["Jun", 215, 214, 30],
    ["Jul", 209, 153, 70],
    ["Aug", 357, 257, 80],
    ["Sep", 333, 183, 30],
    ["Oct", 218, 236, 300],
    ["Nov", 289, 147, 80],
    ["Dec", 266, 368, 80]
]);

var year_data = anychart.data.set([

    ["2020", 209, 153, 70],
    ["2021", 357, 257, 80],
    ["2022", 333, 183, 30],
    ["2023", 218, 236, 300],
    ["2024", 289, 147, 80],
    ["2024", 266, 368, 80]
]);

//month_charts.
spine_chart(month_data,"month_spine");
bar_chart(month_data, "month_chart");
column_chart(month_data, "month_vertical_bar_chart");
split_chart(month_data, "month_Stacked_Column_Chart");

//year_charts.
spine_chart(year_data,"year_spine");
bar_chart(year_data, "year_chart");
column_chart(year_data, "year_vertical_bar_chart");
split_chart(year_data, "year_Stacked_Column_Chart");


// countries_charts.
bar_chart(country_data, "country_chart");
column_chart(country_data, "country_vertical_bar_chart");
split_chart(country_data, "country_Stacked_Column_Chart");
spine_chart(country_data,"country_spine");

//different_charts
word_cloud(data_wordCloud,"word-cloud");
//change
//pie_chart(total_data,"image_chart");
map_chart(map_data,"map");

