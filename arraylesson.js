//Lesson: Array

//Sub-Lesson:Creating an Array
{
    //create using literal
    let a = [];
    let b = [1,2];

    //create using constructor
    let c = new Array();
}

//Sub-Lesson:Writing an Array
{
    let a = [1,2];
    console.log(a[0]);

    a[2] = 4;
    console.log(a[2]);
}

//Sub-Lesson: Array Length
{
    let a = [1,2,3];
    let b = a.length;
    console.log(b);
}

//Sub-Lesson: Adding and Delete Array
{
    //using literal
    let a =[];
    a[0] = 1;
    a[1] = 2;

    //push() method
    a.push(2);
    console.log(a[2]);

    //pop() method
    a.pop(2);
    console.log(a[2]);

    //delete operator method
    delete a[1];
    console.log(a[1]);
}

//Sub-Lesson: Iterating Array
{
    //using foreach() method
    const a = [1,2,3];
    a.forEach(myFunction);


    function myFunction(value){
        console.log(value);
    }

}

