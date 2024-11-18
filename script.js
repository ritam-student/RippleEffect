

const btnEl = document.querySelector(".btn")

btnEl.addEventListener("mouseover", (e)=>{
    // console.log("page x, y : " + e.pageX, e.pageY);
    // pageX, pageY return the coordinates where the event occur

    // console.log("offset is : " + btnEl.offsetLeft, btnEl.offsetTop);
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
