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


        var result = document.querySelector(".marklist");

        document.addEventListener("click", function(e) {
            var b = document.querySelector("#cat-ch");
            var c = document.querySelector("#assign-ch");
            if (e.target === b || e.target === c) {
                result.classList.remove("hidden");
            }
        });


    }


}

document.addEventListener("click", handleEvent)