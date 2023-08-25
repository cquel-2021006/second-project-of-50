const process = document.getElementById("process");
const progressSteps = process.getElementsByClassName("progreso");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let currentStep = 0;

prev.addEventListener("click", () => {
    if (currentStep > 0) {
        progressSteps[currentStep].classList.remove("active");
        currentStep--;
        progressSteps[currentStep].classList.add("active");
    }
});

next.addEventListener("click", () => {
    if (currentStep < progressSteps.length - 1) {
        progressSteps[currentStep].classList.remove("active");
        currentStep++;
        progressSteps[currentStep].classList.add("active");
    }
});
