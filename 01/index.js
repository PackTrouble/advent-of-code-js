import fs from 'fs';
let elfData = [];
// get input from file.
  function getData(){
  
     fs.readFile("./data.txt",{encoding:'utf-8'},(err,res)=>{
       perElf(res);
});

    }
function perElf(data){
  let buildArray = [];
  let counter = 0
  data.split('\n').forEach(el => {
    if(el == ""){
    }else{
    buildArray.push(parseInt(el));
    }
      if(el === ""){
        elfData.push(buildArray)
        buildArray = []
        counter ++;
      }
  });

  getHighestCalories();

}

function getHighestCalories(){
    let info = {
      highestCal:0,
      elfNum:0,
    };
  elfData.forEach((el, elfID) => {
    let calories = 0;
   for(let i = 0; i < el.length; i++){

      calories += el[i]
     
   }
    if(calories > info.highestCal){
      info.elfNum  = elfID + 1;
      info.highestCal = calories;}
  });
  
  console.log(`The elf with them most calories is ${info.elfNum} with a total of ${info.highestCal} calories`)
}



function main(){

  getData();

}


main();

  // parse input
  //
  //
  //f
