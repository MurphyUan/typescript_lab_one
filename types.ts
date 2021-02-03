//Integer
let num1:number = 5;
console.log(num1);

//Boolean
let flag:boolean = false;
console.log(flag);

//String
let colour:string = "Yellow";
console.log(colour);

//Array of Strings
let list: string[] = ["Hi","Hello","Hey"];
for(let i=0; i< list.length; i++){
    console.log("Array is " + list[i]+" at "+i);
}

//Any variable can be used in an circumstance but frowned upon
let notSure: any = 5;
console.log(notSure);

//Array with Any Variable can make an array with multiple different types
let list2: any[] = [1,"True", true];
for(let i=0; i<list.length; i++){
    console.log("Array is " + list2[i] + " at " + i);
}
