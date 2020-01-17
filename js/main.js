let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    for(let i = 0; i < dog_names.length; i++){
        if(dog_string.includes(dog_names[i])){
            console.log("Matched dog_name")
        }
        else{
            console.log("No Matches")
        }

    }
}





var GivenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replacesEvens(a){
    for  (let i = 0;i < GivenArr.length; i++){
        if (i % 2 == 0){
          console.log(i)
          GivenArr[i] = "even index"
        }
    }
}
console.log(replacesEvens())
console.log(GivenArr)

