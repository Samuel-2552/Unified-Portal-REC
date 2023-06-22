doc = document.getElementById("choice");

function handleEvent(event) {
    if (event.target=== doc) {
        val = doc.value;
        var catex = document.getElementById("cat-select");
        var assignm = document.querySelector(".assign-select");
        if (val==1) {
            catex.classList.remove("hidden");
            assignm.classList.add("hidden")
        }

        else if (val==2) {
            catex.classList.add("hidden");
            assignm.classList.remove("hidden")
        }


    }


}

document.addEventListener("click", handleEvent)