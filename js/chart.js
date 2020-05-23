$( document ).ready(function () {
    const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTL32TrgEY44hw_5W51-6-NXi-C3VcOjsy38WLtyw-DWP5Ib8auPMFc31yA7ykWkv9n4TXJVw82zdEv/pub?gid=0&single=true&output=csv"
    $.get(dataUrl, function( data ) {
        data = $.csv.toArrays(data);
        let dates = [];
        let newCases = [];
        let weekAverage = [];
        for (let i = 1; i < data.length-1; i++) {
            dates.push(data[i][0]);
            newCases.push(data[i][1]);
            weekAverage.push(data[i][2]);
        }
        let ctx = document.getElementById('spread-chart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                datasets: [{
                    label: data[0][1],
                    data: newCases,
                    backgroundColor: '#84bebe',
                }, {
                    label: data[0][2],
                    data: weekAverage,
                    type: 'line',
                    fill: false,
                    borderColor: '#c84d4d',
                    borderWidth: 4,
                    pointRadius: 0
                }],
                labels: dates.reverse()
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    });
})
