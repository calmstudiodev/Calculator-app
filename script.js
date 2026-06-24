const display = document.getElementById("display");
const button = document.querySelectorAll("button");

button.forEach(button => {
    button.addEventListener("click", () => {

        if(button.textContent === "C") {
            display.value = "";
        }

        else if(button.textContent === "DEL") {
            display.value = display.value.slice(0,-1);
        }

        else if(button.textContent === "%") {
            if (display.value !== "") {
                display.value = Number(display.value) / 100;
            }
        }

        else if (button.textContent === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display = "Error";
            }
        }

        else {
            display.value += button.textContent;
        }

    });
});

document.addEventListener("keydown", (event) => {
    if(event.key === "Enter" || event.key === "=") {
        display.value = eval(display.value);
    }

    else if (event.key === "Backspace") {
        display.value =display.value.slice(0,-1);
    }

    else if (event.key === "Escape") {
        display.value = "";
    }

    else if (event.key === "%") {
        if (display.value  !== "") {
            display.value = Number(display.value) / 100;
        }
    }
    else {
        if (
            event.key !== "Shift" &&
            event.key !== "Control" &&
            event.key !== "Alt" &&
            event.key !== "Meta" &&
            event.key !== "%"
        ) {
            display.value += event.key;
        }

    }

});