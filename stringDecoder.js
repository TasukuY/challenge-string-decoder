let decoder = code => {
    let decodedWord = '';
    
    for(let i = 0; i < code.length; i++){
        //if the code[i] is a number
        if(!(isNaN(code[i]))){
            //set the skipNum
            //add the targeted char to decodedWord
            let skipNum = parseInt(code[i]) + 1;
            decodedWord += code[i + skipNum];
        }
    }
    return decodedWord;
}

//console.log(decoder('0h2xce5ngbrdy'));

let decoder2 = code => {
    let decodedWord = '';
    for(let i = 1; i < code.length; i++){
        //if the code[i] is a number
        if(!(isNaN(code[i]))){
            //add a char right in front of a number
            decodedWord += code[i - 1];
        }
    }
    //add the last char
    decodedWord += code[code.length - 1];
    return decodedWord;
}

//console.log(decoder2('0y4akjfe0s'));

const decoder3 = (str) => {
    index = 1
    for(i in str){
        turntoNum = Number(str[i])
        if(Number.isInteger(turntoNum)){
            index += turntoNum
            console.log(str[index])
            index += 2
        }
    }
}

    console.log(decoder3('0y4akjfe0s'));

    const decoder4 = (code) => {
        let splitStr = code.split("");
        let result = "";
      
        for(let i = 0; i < splitStr.length; i++) {
          if(!isNaN(+splitStr[i])) {
            i += +splitStr[i];
          } else {
            result += splitStr[i];
          }
        }
        return result;
      }