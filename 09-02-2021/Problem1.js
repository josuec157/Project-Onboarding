function longestCommonSequence(String1, String2){
    let lcsCounter = 0;
    let str1 = String1.split('');
    let str2 = String2.split('');

    for(var i = 0; i<str1.length; i++){
        if(str1[i] == str2[i]){
            lcsCounter++;
        }else{
            break;
        }
    }
    //used document.write for testing
    document.write(lcsCounter);
}

//using example from the problem output should be 5
let test1 = "Minneapolis";
let test2 = "Minnesota";

longestCommonSequence(test1, test2);