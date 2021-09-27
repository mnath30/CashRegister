var billAmount=document.querySelector("#billAmount");
var paidAmount=document.querySelector("#paidAmount");
var buttonCheck=document.querySelector("#buttonCheck");
var notes=[2000,500,100,20,10,5,1];
var result=document.querySelector("#result");
var change;


function calculateChange(paidAmount,billAmount){
    change=paidAmount-billAmount;
    var resultArray=[0,0,0,0,0,0,0];
    if (change===0){
        return (resultArray);
    }
    else{
        while(change>0){
            for (let i=0;i<notes.length;i++){
                if(notes[i]>change){
                    continue;
                }
                while(notes[i]<=change)
                {
                    change=change-notes[i];
                    resultArray[i]=resultArray[i]+1;
                }    

            }
        }
        return(resultArray);
    }
}

function printMessage(message){
    result.innerText=`${message}`;
}

function createRowData(heading,dataarray){
        var row=document.createElement("tr");
        var cellheader=document.createElement("th");
        var headerdata=document.createTextNode(heading);
        cellheader.appendChild(headerdata);
        row.appendChild(cellheader);

        for(j=0;j<dataarray.length;j++){
            var cell=document.createElement("td");
            var data=document.createTextNode(dataarray[j]);
            cell.appendChild(data);
            row.appendChild(cell);
        }
        return(row);
}  


function printReturnChange(paidAmount,billAmount){
    result.innerHTML="";
    var resultarray=calculateChange(paidAmount,billAmount);
    var header=document.createElement("div");
    var headertext=document.createTextNode("Return Change");
    header.appendChild(headertext);
    result.appendChild(header); 
    var table=document.createElement("table");   
    var tbody=document.createElement("tbody");
    var row1=createRowData("No. of Notes",resultarray);
    var row2=createRowData("Notes",notes);
    tbody.appendChild(row1);
    tbody.appendChild(row2);
    table.appendChild(tbody);
    result.appendChild(table);
    table.classList.add("table");

}

function calculate(){
    if (((paidAmount.value==="") || (billAmount.value==="")) || 
        ((paidAmount.value===undefined) || (billAmount.value===undefined)))
    {
        printMessage("Bill Amount and Cash Given cannot be empty");
    }
    else if ((paidAmount.value<=0) || (billAmount.value<=0)){

        printMessage("Bill amount or paid amount cannot be zero or less than zero");
    }
    else if (parseInt(paidAmount.value)<parseInt(billAmount.value)){

        printMessage("Paid amount cannot be less than bill amount");
    }
    else{

        printReturnChange(parseInt(paidAmount.value),parseInt(billAmount.value));
    }
    

}

buttonCheck.addEventListener("click",calculate)

