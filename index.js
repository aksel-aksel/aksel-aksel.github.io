var total = 0;



for (var i = 0; i < 6; i++) {
    var ids2 = ['2.5kg', '5kg', '10kg', '20kg', '30kg', '50kg'];
    document.getElementById(ids2[i]).addEventListener('click', function(e){
        if (this.className == "activeweight") {
            this.className = "weightdiv";
            total -= parseFloat(this.innerText);
        } else {
            this.className = "activeweight";
            total += parseFloat(this.innerText);
        }

        update()
    })
}

function update() {
    var ids = ['60', '75', '85', '92.5'];
    var txt = ['5 reps: ', '3 reps: ', '1 rep: ', '1 rep: '];
    for (var i = 0; i < 4; i++) {
        var n = total/100*parseFloat(ids[i]);
        document.getElementById(ids[i]).innerText = txt[i]+(Math.floor(n*100)/100)+' kg';
    };
}

