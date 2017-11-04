//1,2,5,75,95,48,35,68,81
var data=[],head,cur,next,res,sum=0,y=0;
var data1=[];
var LineChart;
for(i=0;i<201;i++)
    data1.push(i);
function graph(data1,res,title)
{

    var chart = document.getElementById("LineChart").getContext("2d");
    if(LineChart!==undefined)
        LineChart.destroy();
    LineChart = new Chart(chart, {
        type: 'line',
        data: {
            labels: data1,
            datasets: [
                {
                    label: title,
                    fill: false,
                    borderColor: "rgba(75,192,192,0.9)",
                    lineTension: 0,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,75,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 15,
                    pointRadius: 10,
                    pointHitRadius: 10,
                    data: res

                }
            ]
        },
        options: {
            scales: {
                xAxes: [{
                    type: "linear",
                    position: "top",
                    fontSize: 72,
                    scaleLabel: {
                        display: true,
                        labelString: "Cylinder",

                    },
                    ticks: {fontSize: 12}
                }]
            },
            title: {
                display: true,
                text: title,
                fontSize: 100,
                fontColor: "#FF1493"
            }
        }

    });

}

function fcfs()
{
    var input=document.getElementById("ip1").value;
    var input2=document.getElementById("ip2").value;
    data=input.split(",");
    head=input2;
    cur=parseInt(head);
    res=[{x:cur,y:0}];
    for(var i=0;i<data.length;i++)
    {
        next=parseInt(data[i])
        sum+=Math.abs(next-cur);
        if(next-cur>50)
        {y+=5;}
        else if(next-cur>30)
        {y+=3;}
        else
        {y+=2;}
        var temp;
        temp = `{"x":${next},"y":${-y}}`;
        temp=JSON.parse(temp);
        res.push(temp);

        cur=next;
    }
    document.getElementById("op1").value=sum;
    var title="FCFS DISK SCHEDULING ALGORITHM";
    graph(data1,res,title);
}
function sstf()
{
    var input=document.getElementById("ip1").value;
    var input2=document.getElementById("ip2").value;
    var pos;
    data=input.split(",");
    cur=parseInt(input2);
    sum=0;
    y=0;
    res=[{x:cur,y:0}];
    while(data.length)
    {
        for(var i=0;i<data.length;i++)
        {
            if(i==0)
            {
                min=Math.abs(parseInt(data[i])-cur);
                pos=i;
            }
            else if(min>Math.abs(parseInt(data[i])-cur))
            {
                min=Math.abs(parseInt(data[i])-cur);
                pos=i;
            }
        }
        next=parseInt(data[pos]);
        sum+=Math.abs(next-cur);
        if(next-cur>50)
        {y+=5;}
        else if(next-cur>30)
        {y+=3;}
        else
        {y+=2;}
        var temp=`{"x":${next},"y":${-y}}`;
        temp=JSON.parse(temp);
        res.push(temp);
        data.splice(pos,1);
        cur=next;
    }
    var title="SSTF DISK SCHEDULING ALGORITHM";
    graph(data1,res,title);
    document.getElementById("op1").value=sum;
}

function scan()
{
    var input=document.getElementById("ip1").value;
    var input2=document.getElementById("ip2").value;
    data=input.split(",");
    var data2=[];
    cur=parseInt(input2);
    sum=0;
    y=0;
    res=[{x:cur,y:0}];
    var pos=[];
    for(var i=0;i<data.length;i++)
    {
        if(parseInt(data[i])<cur)
        {
            pos.push(i);
            data2.push(parseInt(data[i]));
        }
    }
    data2.sort(function(a, b){return a - b});
    data2.reverse();
    i=0;
    var x;
    var len=data2.length;
    while(len--)
    {
        next=data2[i];
        sum+=Math.abs(next-cur);
        if(next-cur>50)
        {y+=5;}
        else if(next-cur>30)
        {y+=3;}
        else
        {y+=2;}
        x=pos.pop();
        var temp=`{"x":${next},"y":${-y}}`;
        temp=JSON.parse(temp);
        res.push(temp);
        data.splice(x,1);
        i++;
    }
    res.push({x:0,y:-(++y)});

    while(data.length)
    {
        for(var i=0;i<data.length;i++)
        {
            if(i==0)
            {
                min=Math.abs(parseInt(data[i])-cur);
                pos=i;
            }
            else if(min>Math.abs(parseInt(data[i])-cur))
            {
                min=Math.abs(parseInt(data[i])-cur);
                pos=i;
            }
        }
        next=parseInt(data[pos]);
        sum+=Math.abs(next-cur);
        if(next-cur>50)
        {y+=5;}
        else if(next-cur>30)
        {y+=3;}
        else
        {y+=2;}
        var temp=`{"x":${next},"y":${-y}}`;
        temp=JSON.parse(temp);
        res.push(temp);
        data.splice(pos,1);
        cur=next;
    }
    var title="SCAN DISK SCHEDULING ALGORITHM";
    graph(data1,res,title);
    document.getElementById("op1").value=sum;

}
$(function () {
    $('#op1,#op2').val('0').siblings('label').addClass('active');
});


