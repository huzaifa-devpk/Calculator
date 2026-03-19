let input = document.querySelector("#screen");
let buttons = document.querySelectorAll("button");
let click = document.querySelector("#click");

let string = "";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        click.play();
        let value = e.target.innerText;

        if(value === "="){
            try{
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        }
        else if(value === "AC"){
            string = "";
            input.value = string;
        }
        else if(value === "DEL"){
            string = string.slice(0, -1);
            input.value = string;
        }
        else{
            string += value;
            input.value = string;
        }
    });
});