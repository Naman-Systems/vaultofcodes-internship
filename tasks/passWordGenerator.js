class Password{
    constructor(){
        console.log("Welcome to Password Class");
        this.pass = "";
    }

    getPassword(len){
        let lch = "abcdefghijklmnopqrstuvwxyz";
        let num = "0123456789";
        let uch = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let i = 0;
        while(i < len){
            this.pass += lch[Math.floor(Math.random()*lch.length)];
            this.pass += num[Math.floor(Math.random()*num.length)];
            this.pass += uch[Math.floor(Math.random()*uch.length)];
            i+= 3;
        }
        this.pass = this.pass.substring(0,len);
        return this.pass;
    }
}

let p = new Password();
console.log(p.getPassword(5));