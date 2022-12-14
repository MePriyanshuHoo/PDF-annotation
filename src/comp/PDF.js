function PDF(data){
    // data:[<mediatype>][;base64],<data>
    const Doc = ()=>{
    let result = "#"
        if(data.src.length > 0) {
            result = data.src.slice(5);
            console.log("got limk "+ data.src.length)
        }
        return(
        (data.src.length > 0)? <>No PDF {data.src.length} *</>
        : <div>
                <br/> hehe
                {/* {data.src.slice(5)} */}
                <a href={result} target= "_blank">limk</a>
            </div>
        );
    }
    return <div>
        <Doc/>
    </div>
}
export default PDF