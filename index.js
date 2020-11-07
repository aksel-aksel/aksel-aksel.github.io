var input1 = document.getElementById('input1');
var btn1 = document.querySelector('button');

var div = document.getElementById('answerdiv');


btn1.addEventListener('click', function(e) {
    createThem();
    console.log(1)
});

function createThem() {
    var rep = [5, 3, 1, 1];
    var prosent = [60, 75, 85, 92.5];

    for (var i = 0; i < 4; i++) {
        var h = document.createElement('h3');
        h.className = "answer";
        if (rep[i] > 1) {
            h.innerText = rep[i] + " reps, " + (input1.value * prosent[i] / 100) + "kg"   
        } else {
            h.innerText = rep[i] + " rep, " + (input1.value * prosent[i] / 100) + "kg"   
        }
        div.appendChild(h)
    }
}