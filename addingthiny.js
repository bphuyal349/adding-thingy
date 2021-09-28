var count = 0;
var sum = 0;

function presed(x)
{
  count = count + 1;
    sum = sum + x;
      print();
}


function print()
{
  document.getElementById("output").innerHTML =  "you pressed the buttons: " + count + " times." + "<br>" + "sum: " + sum;
}

function clearIt()
{
  document.getElementById("output").innerHTML = "";
}
