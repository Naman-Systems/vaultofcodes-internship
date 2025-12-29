const loadScript = async (src)=>{
    return new Promise((resolve,reject)=>{
        let script = document.createElement("script");
        script.src = src;
        script.onload=()=>{
            resolve(src);
        };
        document.head.append(script);


        script.onerror=()=>{
            reject(0);
        };
    });
}


const main = async()=>{
    console.log(new Date());
    let p = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js");
    console.log(new Date());

    console.log(p)
}
main();