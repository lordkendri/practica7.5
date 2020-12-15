document.querySelector('#llenar').addEventListener('click', llenargrafico);
function llenargrafico(){
    let col2020 = parseInt (document.getElementById("col2020").value);
    let cub2020 = parseInt (document.getElementById("cub2020").value);
    let p2020 = parseInt (document.getElementById("p2020").value);
    let ch2020 = parseInt (document.getElementById("ch2020").value);
    let mex2020 = parseInt (document.getElementById("mex2020").value);
    let pe2020 = parseInt (document.getElementById("pe2020").value);
    let ur2020 = parseInt (document.getElementById("ur2020").value);
    let rd2020 = parseInt (document.getElementById("rd2020").value);

    if(col2020 == ""){
        col2020 = 0;
    }
    if(p2020 ==""){
        p2020 = 0;
    }
    if(ch2020 ==""){
        ch2020 = 0;
    }
    if(mex2020 ==""){
        mex2020 = 0;
    }
    if(pe2020 ==""){
        pe2020 = 0;
    }
    if(ur2020 ==""){
        ur2020 = 0;
    }
    if(rd2020 ==""){
        rd2020 = 0;
    }
    let col2016 = parseInt (document.getElementById("col2016").value);
    let cub2016 = parseInt (document.getElementById("cub2016").value);
    let p2016 = parseInt (document.getElementById("p2016").value);
    let ch2016 = parseInt (document.getElementById("ch2016").value);
    let mex2016 = parseInt (document.getElementById("mex2016").value);
    let pe2016 = parseInt (document.getElementById("pe2016").value);
    let ur2016 = parseInt (document.getElementById("ur2016").value);
    let rd2016 = parseInt (document.getElementById("rd2016").value);
    if(col2016 == ""){
        col2016 = 0;
    }
    if(p2016 ==""){
        p2016 = 0;
    }
    if(ch2016 ==""){
        ch2016 = 0;
    }
    if(mex2016 ==""){
        mex2016 = 0;
    }
    if(pe2016 ==""){
        pe2016 = 0;
    }
    if(ur2016 ==""){
        ur2016 = 0;
    }
    if(rd2016 ==""){
        rd2016 = 0;
}
    let col2012 = parseInt (document.getElementById("col2012").value);
    let cub2012 = parseInt (document.getElementById("cub2012").value);
    let p2012 = parseInt (document.getElementById("p2012").value);
    let ch2012 = parseInt (document.getElementById("ch2012").value);
    let mex2012 = parseInt (document.getElementById("mex2012").value);
    let pe2012 = parseInt (document.getElementById("pe2012").value);
    let ur2012 = parseInt (document.getElementById("ur2012").value);
    let rd2012 = parseInt (document.getElementById("rd2012").value);
    if(col2012 == ""){
        col2012 = 0;
    }
    if(p2012 ==""){
        p2012 = 0;
    }
    if(ch2012 ==""){
        ch2012 = 0;
    }
    if(mex2012 ==""){
        mex2012 = 0;
    }
    if(pe2012 ==""){
        pe2012 = 0;
    }
    if(ur2012 ==""){
        ur2012 = 0;
    }
    if(rd2012 ==""){
        rd2012 = 0;
}
    let col2008 = parseInt (document.getElementById("col2008").value);
    let cub2008 = parseInt (document.getElementById("cub2008").value);
    let p2008 = parseInt (document.getElementById("p2008").value);
    let ch2008 = parseInt (document.getElementById("ch2008").value);
    let mex2008 = parseInt (document.getElementById("mex2008").value);
    let pe2008 = parseInt (document.getElementById("pe2008").value);
    let ur2008 = parseInt (document.getElementById("ur2008").value);
    let rd2008 = parseInt (document.getElementById("rd2008").value);
    if(col2008 == ""){
        col2008 = 0;
    }
    if(p2008 ==""){
        p2008 = 0;
    }
    if(ch2008 ==""){
        ch2008 = 0;
    }
    if(mex2008 ==""){
        mex2008 = 0;
    }
    if(pe2008 ==""){
        pe2008 = 0;
    }
    if(ur2008 ==""){
        ur2008 = 0;
    }
    if(rd2008 ==""){
        rd2008 = 0;
}
    let col2004 = parseInt (document.getElementById("col2004").value);
    let cub2004 = parseInt (document.getElementById("cub2004").value);
    let p2004 = parseInt (document.getElementById("p2004").value);
    let ch2004 = parseInt (document.getElementById("ch2004").value);
    let mex2004 = parseInt (document.getElementById("mex2004").value);
    let pe2004 = parseInt (document.getElementById("pe2004").value);
    let ur2004 = parseInt (document.getElementById("ur2004").value);
    let rd2004 = parseInt (document.getElementById("rd2004").value);
    if(col2004 == ""){
        col2004 = 0;
    }
    if(p2004 ==""){
        p2004 = 0;
    }
    if(ch2004 ==""){
        ch2004 = 0;
    }
    if(mex2004 ==""){
        mex2004 = 0;
    }
    if(pe2004 ==""){
        pe2004 = 0;
    }
    if(ur2004 ==""){
        ur2004 = 0;
    }
    if(rd2004 ==""){
        rd2004 = 0;
}
    var dataform = {
        2020: [
            ['Colombia', col2020],
            ['Cuba', cub2020],
            ['Panama', p2020],
            ['Chile', ch2020],
            ['Mexico', mex2020],
            ['Peru', pe2020],
            ['Uruguay', ur2020],
            ['Republica Dominicana', rd2020]
        ],
        2016: [
            ['Colombia', col2016],
            ['Cuba', cub2016],
            ['Panama', p2016],
            ['Chile', ch2016],
            ['Mexico', mex2016],
            ['Peru', pe2016],
            ['Uruguay', ur2016],
            ['Republica Dominicana', rd2016]
        ],
        2012: [
            ['Colombia', col2012],
            ['Cuba', cub2012],
            ['Panama', p2012],
            ['Chile', ch2012],
            ['Mexico', mex2012],
            ['Peru', pe2012],
            ['Uruguay', ur2012],
            ['Republica Dominicana', rd2012]
        ],
        2008: [
            ['Colombia', col2008],
            ['Cuba', cub2008],
            ['Panama', pe2008],
            ['Chile', ch2008],
            ['Mexico', mex2008],
            ['Peru', pe2008],
            ['Uruguay', ur2008],
            ['Republica Dominicana', rd2008]
        ],
        2004: [
            ['Colombia', col2004],
            ['Cuba', cub2004],
            ['Panama', p2004],
            ['Chile', ch2004],
            ['Mexico', mex2004],
            ['Peru', pe2004],
            ['Uruguay', ur2004],
            ['Republica Dominicana', rd2004]
        ]
    };
    console.log(dataform);

var dataPrev = {
    2020: [
        ['Colombia', 0],
        ['Cuba', 0],
        ['Panama', 0],
        ['Chile', 11],
        ['Mexico', 24],
        ['Peru', 38],
        ['Uruguay', 29],
        ['Republica Dominicana', 46]
    ],
    2016: [
        ['Colombia', 13],
        ['Cuba', 0],
        ['Panama', 0],
        ['Chile', 0],
        ['Mexico', 22],
        ['Peru', 51],
        ['Uruguay', 19],
        ['Republica Dominicana', 36]
    ],
    2012: [
        ['Colombia', 0],
        ['Cuba', 0],
        ['Panama', 0],
        ['Chile', 13],
        ['Mexico', 27],
        ['Peru', 32],
        ['Uruguay', 9],
        ['Republica Dominicana', 37]
    ],
    2008: [
        ['Colombia', 0],
        ['Cuba', 5],
        ['Panama', 16],
        ['Chile', 0],
        ['Mexico', 32],
        ['Peru', 28],
        ['Uruguay', 0],
        ['Republica Dominicana', 36]
    ],
    2004: [
        ['Colombia', 0],
        ['Cuba', 0],
        ['Panama', 9],
        ['Chile', 20],
        ['Mexico', 26],
        ['Peru', 16],
        ['Uruguay', 0],
        ['Republica Dominicana', 44]
    ]
};

var data = {
    2020: [
        ['Colombia', 0],
        ['Cuba', 0],
        ['Panama', 0],
        ['Chile', 17],
        ['Mexico', 19],
        ['Peru', 26],
        ['Uruguay', 27],
        ['Republica Dominicana', 46]
    ],
    2016: [
        ['Colombia', 13],
        ['Cuba', 0],
        ['Panama', 0],
        ['Chile', 0],
        ['Mexico', 24],
        ['Peru', 38],
        ['Uruguay', 29],
        ['Republica Dominicana', 46]
    ],
    2012: [
        ['Colombia', 0],
        ['Cuba', 0],
        ['Panama', 0],
        ['Chile', 16],
        ['Mexico', 22],
        ['Peru', 51],
        ['Uruguay', 19],
        ['Republica Dominicana', 36]
    ],
    2008: [
        ['Colombia', 0],
        ['Cuba', 16],
        ['Panama', 17],
        ['Chile', 0],
        ['Mexico', 27],
        ['Peru', 32],
        ['Uruguay', 0],
        ['Republica Dominicana', 37]
    ],
    2004: [
        ['Colombia', 0],
        ['Cuba', 0],
        ['Panama', 16],
        ['Chile', 13],
        ['Mexico', 32],
        ['Peru', 28],
        ['Uruguay', 0],
        ['Republica Dominicana', 36]
    ]
};

var countries = [{
    name: 'Colombia',
    flag: 'colombia',
    color: 'rgb(255, 127, 39)'
}, {
    name: 'Cuba',
    flag: 'cuba',
    color: 'rgb(201, 36, 39)'
}, {
    name: 'Panama',
    flag: 'panama',
    color: 'rgb(128, 0, 255)'
}, {
    name: 'Chile',
    flag: 'chile',
    color: 'rgb(0, 0, 0)'
}, {
    name: 'Mexico',
    flag: 'mexico',
    color: 'rgb(34, 177, 76)'
}, {
    name: 'Peru',
    flag: 'peru',
    color: 'rgb(255, 217, 68)'
}, {
    name: 'Uruguay',
    flag: 'uruguay',
    color: 'rgb(0, 82, 180)'
}, {
    name: 'Republica Dominicana',
    flag: 'RD',
    color: 'rgb(215, 0, 38)'
}];


function getData(dataform) {
    return dataform.map(function (country, i) {
        return {
            name: country[0],
            y: country[1],
            color: countries[i].color
        };
    });
}

var chart = Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Estadisticas de Paises X'
    },
    subtitle: {
        text: 'Comparacion de estadisticas X'
    },
    plotOptions: {
        series: {
            grouping: false,
            borderWidth: 0
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        shared: true,
        headerFormat: '<span style="font-size: 15px">{point.point.name}</span><br/>',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} Comparacion</b><br/>'
    },
    xAxis: {
        type: 'category',
        max: 4,
        labels: {
            useHTML: true,
            animate: true,
            formatter: function () {
                var value = this.value,
                    output;

                countries.forEach(function (country) {
                    if (country.name === value) {
                        output = country.flag;
                    }
                });

                return '<span><img src="iconos/' + output + '.svg" style="width: 40px; height: 40px;"/><br></span>';
            }
        }
    },
    yAxis: [{
        title: {
            text: 'Campo X'
        },
        showFirstLabel: false
    }],
    series: [{
        color: 'rgb(158, 159, 163)',
        pointPlacement: -0.2,
        linkedTo: 'main',
        //data: dataPrev[2020].slice(),
        name: '2016'
    }, {
        name: '2020',
        id: 'main',
        dataSorting: {
            enabled: true,
            matchByName: true
        },
        dataLabels: [{
            enabled: true,
            inside: true,
            style: {
                fontSize: '16px'
            }
        }],
        data: getData(dataform[2020]).slice()
    }],
    exporting: {
        allowHTML: true
    }
});

var years = [2020, 2016, 2012, 2008, 2004];

years.forEach(function (year) {
    var btn = document.getElementById(year);

    btn.addEventListener('click', function () {

        document.querySelectorAll('.buttons button.active').forEach(function (active) {
            active.className = '';
        });
        btn.className = 'active';

        chart.update({
            title: {
                text: 'Estadistica de Paises X ' + year + ' Top X'
            },
            subtitle: {
                text: 'Comparacion de estadisticas X ' + (year - 4)
            },
            series: [{
                name: year - 4,
                //data: dataPrev[year].slice()
            }, {
                name: year,
                data: getData(dataform[year]).slice()
            }]
        }, true, false, {
            duration: 800
        });
    });
});
}