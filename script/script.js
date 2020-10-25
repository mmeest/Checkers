/* var whitePiece = "⬤" */
var whitePiece = "⚪"
var blackPiece = "⚫"
var whitePieces = ['12', '14', '16', '18', '21', '23', '25', '27', '32', '34', '36', '38']
var blackPieces = ['61', '63', '65', '67', '72', '74', '76', '78', '81', '83', '85', '87']
var turn = "white"
var step = 0
var startID = ""

function gameSetup(){
    for(i=0; i<whitePieces.length; i++){
        document.getElementById(whitePieces[i]).innerHTML = whitePiece
        document.getElementById(whitePieces[i]).style.color = "white"
    }
    for(j=0; j<blackPieces.length; j++){
        document.getElementById(blackPieces[j]).innerHTML = blackPiece
    }
}

function move(ID){
    console.log("hello")
    console.log((parseInt(ID.charAt(0)) - 1).toString() + (parseInt(ID.charAt(1)) - 1).toString())
    console.log((parseInt(ID.charAt(0)) - 1).toString())
    console.log((parseInt(ID.charAt(1)) + 1).toString())
    console.log((parseInt(ID.charAt(0)) - 1).toString() + (parseInt(ID.charAt(1)) + 1).toString())
    console.log("hello")
    
                
    if(turn == "white"){
        if(whitePieces.includes(ID) && step == 0){
            startID = ID
            document.getElementById(ID).style.backgroundColor = "rgb(70, 216, 216)"
            step = 1
        }else if(whitePieces.includes(ID) && step != 0){
            document.getElementById(startID).style.backgroundColor = "rgb(63, 129, 129)"
            document.getElementById(ID).style.backgroundColor = "rgb(70, 216, 216)"
            startID = ID
        }else if(document.getElementById(ID).textContent == "" && 
                parseInt(ID.charAt(0)) == parseInt(startID.charAt(0)) + 1 &&
                parseInt(ID.charAt(1)) == parseInt(startID.charAt(1)) + 1 ||
                document.getElementById(ID).textContent == "" && 
                parseInt(ID.charAt(0)) == parseInt(startID.charAt(0)) + 1 && 
                parseInt(ID.charAt(1)) == parseInt(startID.charAt(1)) - 1 ){
                    document.getElementById(ID).innerHTML = whitePiece
                    document.getElementById(startID).innerHTML = ""
                    document.getElementById(startID).style.backgroundColor = "rgb(63, 129, 129)"
                    whitePieces.splice(whitePieces.indexOf(startID), 1)
                    whitePieces.push(ID)
                    console.log(whitePieces)
                    turn = "black"
                    document.getElementById("textNode").innerHTML = "Black Move"
        }else if(document.getElementById(ID).textContent == "" && 
                document.getElementById((parseInt(ID.charAt(0)) - 1).toString() + (parseInt(ID.charAt(1)) - 1).toString()).textContent == "⚫" &&
                parseInt(ID.charAt(0)) == parseInt(startID.charAt(0)) + 2 &&
                parseInt(ID.charAt(1)) == parseInt(startID.charAt(1)) + 2){
                    document.getElementById(ID).innerHTML = whitePiece
                    document.getElementById(startID).innerHTML = ""
                    document.getElementById(startID).style.backgroundColor = "rgb(63, 129, 129)"
                    document.getElementById((parseInt(ID.charAt(0)) - 1).toString() + (parseInt(ID.charAt(1) - 1)).toString()).innerHTML = ""
                    blackPieces.splice(blackPieces.indexOf((parseInt(ID.charAt(0)) - 1).toString() + (parseInt(ID.charAt(1) - 1)).toString()), 1)
                    whitePieces.splice(whitePieces.indexOf(startID), 1)
                    whitePieces.push(ID)
                    console.log(whitePieces)
                    turn = "black"
                    document.getElementById("textNode").innerHTML = "Black Move"
        }else if(document.getElementById(ID).textContent == "" && 
                document.getElementById((parseInt(ID.charAt(0)) - 1).toString() + (parseInt(ID.charAt(1)) + 1).toString()).textContent == "⚫" &&
                parseInt(ID.charAt(0)) == parseInt(startID.charAt(0)) + 2 &&
                parseInt(ID.charAt(1)) == parseInt(startID.charAt(1)) - 2){
                    document.getElementById(ID).innerHTML = whitePiece
                    document.getElementById(startID).innerHTML = ""
                    document.getElementById(startID).style.backgroundColor = "rgb(63, 129, 129)"
                    document.getElementById((parseInt(ID.charAt(0)) - 1).toString() + (parseInt(ID.charAt(1)) + 1).toString()).innerHTML = ""
                    blackPieces.splice(blackPieces.indexOf((parseInt(ID.charAt(0)) - 1).toString() + (parseInt(ID.charAt(1) + 1)).toString()), 1)
                    whitePieces.splice(whitePieces.indexOf(startID), 1)
                    whitePieces.push(ID)
                    console.log(whitePieces)
                    turn = "black"
                    document.getElementById("textNode").innerHTML = "Black Move"
        }else if(document.getElementById(ID).textContent == "" && 
                    document.getElementById((parseInt(ID.charAt(0)) + 1).toString() + (parseInt(ID.charAt(1)) - 1).toString()).textContent == "⚫" &&
                    parseInt(ID.charAt(0)) == parseInt(startID.charAt(0)) - 2 &&
                    parseInt(ID.charAt(1)) == parseInt(startID.charAt(1)) + 2){
                        document.getElementById(ID).innerHTML = whitePiece
                        document.getElementById(startID).innerHTML = ""
                        document.getElementById(startID).style.backgroundColor = "rgb(63, 129, 129)"
                        document.getElementById((parseInt(ID.charAt(0)) + 1).toString() + (parseInt(ID.charAt(1)) - 1).toString()).innerHTML = ""
                        blackPieces.splice(blackPieces.indexOf((parseInt(ID.charAt(0)) - 1).toString() + (parseInt(ID.charAt(1) + 1)).toString()), 1)
                        whitePieces.splice(whitePieces.indexOf(startID), 1)
                        whitePieces.push(ID)
                        console.log(whitePieces)
                        turn = "black"
                        document.getElementById("textNode").innerHTML = "Black Move"
        }else if(document.getElementById(ID).textContent == "" && 
                    document.getElementById((parseInt(ID.charAt(0)) + 1).toString() + (parseInt(ID.charAt(1)) + 1).toString()).textContent == "⚫" &&
                    parseInt(ID.charAt(0)) == parseInt(startID.charAt(0)) - 2 &&
                    parseInt(ID.charAt(1)) == parseInt(startID.charAt(1)) - 2){
                        document.getElementById(ID).innerHTML = whitePiece
                        document.getElementById(startID).innerHTML = ""
                        document.getElementById(startID).style.backgroundColor = "rgb(63, 129, 129)"
                        document.getElementById((parseInt(ID.charAt(0)) + 1).toString() + (parseInt(ID.charAt(1)) + 1).toString()).innerHTML = ""
                        blackPieces.splice(blackPieces.indexOf((parseInt(ID.charAt(0)) - 1).toString() + (parseInt(ID.charAt(1) + 1)).toString()), 1)
                        whitePieces.splice(whitePieces.indexOf(startID), 1)
                        whitePieces.push(ID)
                        console.log(whitePieces)
                        turn = "black"
                        document.getElementById("textNode").innerHTML = "Black Move"
        }

    }else{
        if(blackPieces.includes(ID) && step == 0){
            startID = ID
            document.getElementById(ID).style.backgroundColor = "rgb(70, 216, 216)"
            step = 1
        }else if(blackPieces.includes(ID) && step != 0){
            document.getElementById(startID).style.backgroundColor = "rgb(63, 129, 129)"
            document.getElementById(ID).style.backgroundColor = "rgb(70, 216, 216)"
            startID = ID
        }else if(document.getElementById(ID).textContent == "" && 
                parseInt(ID.charAt(0)) == parseInt(startID.charAt(0)) - 1 &&
                parseInt(ID.charAt(1)) == parseInt(startID.charAt(1)) + 1 ||
                document.getElementById(ID).textContent == "" && 
                parseInt(ID.charAt(0)) == parseInt(startID.charAt(0)) - 1 && 
                parseInt(ID.charAt(1)) == parseInt(startID.charAt(1)) - 1 ){
                    document.getElementById(ID).innerHTML = blackPiece
                    document.getElementById(startID).innerHTML = ""
                    document.getElementById(startID).style.backgroundColor = "rgb(63, 129, 129)"
                    blackPieces.splice(blackPieces.indexOf(startID), 1)
                    blackPieces.push(ID)
                    console.log(blackPieces)
                    turn = "white"
                    document.getElementById("textNode").innerHTML = "White Move"
                }
    }
}