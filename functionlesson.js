//Lesson:Function

//Sub-Lesson:Defining Function
{

    //Defining Function
    function myFunction(value)
    {
        let sum = value + 3;
        return sum;
    }

    console.log(myFunction(3));
}

{ 
    //function expression
    let a = function(x){return x+x;}
    console.log(a(4));   
}

{
    //arrow function
    let a = (x) => x+x;
    console.log(a(4));
}

//Sub-Lesson:Invoking Function
{
    //Function Invocation
    function myFunction(x)
    {
        let sum = x+x;
        return sum;
    }

    console.log(myFunction(3));
}

{
    //Method Invocation
    let a = {                   //a is an onject

        myFunction:function()   //myFunction is property of object
        {
            return 3;
        }
    }

    let b = a.myFunction();
    console.log(b);
}

{
    //this keyword
    const a = {
        x:3,
        myFunction:function()
        {
            return this.x;
        }
    }

    let b = a.myFunction();
    console.log(b);
}