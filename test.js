// Lesson: Object


// Sub-Lesson: Creating Object
{
    // create object using literal; meaning {name:value}
    let a = {x:1,y:2};
    console.log(a.x + a.y);

    // create object using new; same as {}
    let b = new Object;
}


// Sub-Lesson: Querying and Setting up Properties
{
    let b = new Object;
    // Create value of property
    b.x = 1;
    b["y"] = 2;

    // Obtain value of property using dot
    let a = b.x;
    console.log(a);

    // Obtain value of property using string expression
    let c = b["y"];
    console.log(c);
}

//Sub-Lesson: Deleting Properties
{
    let a = new Object;
    a["x"] = 1;

    console.log(a["x"]);

    //delete operator
    delete a["x"];
    //output will be undefined
    console.log(a["x"]);
}

//Sub-Lesson: Testing Properties
{
    
    let a = new Object;
    a["x"] = 1;
    
    //'in' operator
    console.log("x" in a);

    //hasOwnProperty() method
   console.log(a.hasOwnProperty("x"));

   //propertyIsEnumerable() method
   console.log(a.propertyIsEnumerable("x"));

}

//Sub-Lesson:Extending Object
{
    let a = {x:1};
    let b = {y:2};

    b = Object.assign({},a,b);
    console.log(b);
}

//Sub-Lesson:Serializing Object
{
    let a = {x:1, x:2};
    let b = JSON.stringify(a);
    let c = JSON.parse(b);

    console.log(b);
    console.log(c);
}

