var b1 = true;
//true && b1; // -> true
 
var b2 = false;
//!'Hey there' || b2; // -> false
 
var b3 = false;
//0 || !b3 && true; // -> true

var b4 = true;
//!10 && !(b4 || false); // -> false // value does 
//not change according to on the variable

var b5 = true; 
//!(null && undefined) && (![] || b5); // -> true

var b6 = false;
//(!!!!(false) || !b6) && !!({} && []); // -> true
