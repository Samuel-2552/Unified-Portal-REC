doc = document.getElementById("choice");

function handleEvent(event) {
    if (event.target=== doc) {
        val = doc.value;
        if (val==1) {
            var catex = document.getElementById("cat-select");
            catex.classList.remove("hidden");
            var assignm = document.querySelector(".assign-select");
            assignm.classList.add("hidden")

            
        }

        else if (val==2) {
            var catex = document.getElementById("cat-select");
            catex.classList.add("hidden");
            var assignm = document.querySelector(".assign-select");
            assignm.classList.remove("hidden")
        }
    }
}

document.addEventListener("click", handleEvent)