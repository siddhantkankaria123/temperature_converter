var cel = document.getElementById("cel");
var fah = document.getElementById("fah");
var kel = document.getElementById("kel");

 cel.addEventListener("input", function(){
        let c = this.value;
        let f = (c *  9/5) + 32;
        let k = parseInt(c) + 273.15;
        if( !Number.isInteger(f) && !Number.isInteger(k) )
        {
            f = f.toFixed(2);
            k = k.toFixed(2);
        }
       
        fah.value = f;
        kel.value = k;
       
 })
 

 fah.addEventListener("input" , function(){
        let f = this.value;
        let c = (f - 32 ) * 5/9;
        let k = parseInt(f) + 273.15;
        if( !Number.isInteger(c) && !Number.isInteger(k))
        {
            c = c.toFixed(2);
            k = k.toFixed(2);
        }
       
        cel.value = c;
        kel.value = k;
        
 })

 kel.addEventListener("input" , function(){
    let k = this.value;
    let c = k - 273.15;
    let f = 9/5*(k - 273) + 32;
    if( !Number.isInteger(c) && !Number.isInteger(f))
    {
        c = c.toFixed(2);
        f = f.toFixed(2);
    }
   
    cel.value = c;
    fah.value = f;

    
})