let count = 0;

document.getElementById("decrease").onclick = function(){
    count -= 1;
    document.getElementById("countlabel").innerHTML = count;
}

document.getElementById("reset").onclick = function(){
    count = 0;
    document.getElementById("countlabel").innerHTML = count; // Fixed line
}

document.getElementById("increase").onclick = function(){
    count += 1;
    document.getElementById("countlabel").innerHTML = count;
}