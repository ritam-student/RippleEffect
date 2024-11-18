/*

const btn = document.querySelector(".btn");

btn.addEventListener("mouseover" , (e) => {
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;
    // const y = e.pageY - btn.offsetTop;
    // console.log(e);
    // console.log(e.pageX);
    // console.log("offset x : " + e.offsetX);
    // console.log("page x : " + e.pageX);
    // console.log(e.type);
    console.log("offset is : " + e.offsetX);
    console.log("pageX is : " + e.pageX);
    console.log(x,y);

    btn.style.setProperty("--posX" , x + "px");
    btn.style.setProperty("--posY" , y + "px");
});


*/







const btnEl = document.querySelector(".btn")

btnEl.addEventListener("mouseover", (e)=>{
    console.log("page x, y : " + e.pageX, e.pageY);
    // pageX, pageY return the coordinates where the event occur

    console.log("offset is : " + btnEl.offsetLeft, btnEl.offsetTop);
    // offset return the distance btw nearest offset element(here body) and this btn

    const x = e.pageX - btnEl.offsetLeft;
    const y = e.pageY - btnEl.offsetTop;

    btnEl.style.setProperty("--posX", x + "px")
    btnEl.style.setProperty("--posY", y + "px")
});



const body = document.querySelector("#bo");
body.addEventListener("clicl" , (e) => {
    console.log("body x, y : " + e.pageX , e.pageY);
})