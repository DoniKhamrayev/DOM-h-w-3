document.getElementById("open-btn").onclick = () => {
    document.getElementById("popup").classList.add("active");
    document.getElementById("popup-overlay").classList.add("active");
};

document.getElementById("close-btn").onclick = () => {
    document.getElementById("popup").classList.remove("active");
    document.getElementById("popup-overlay").classList.remove("active");
};

document.getElementById("popup-overlay").onclick = () => {
    document.getElementById("popup").classList.remove("active");
    document.getElementById("popup-overlay").classList.remove("active");
};