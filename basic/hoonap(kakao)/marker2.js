const markerForm = document.querySelector(".js-markerForm"),
    markerInput = markerForm.querySelector("input"),
    markerList = document.querySelector(".js-toDoList");

const MARKERS_LS = 'markers';

let markers = [];

function savemarkers(){
    localStorage.setItem(MARKERS_LS, JSON.stringify(markers));
}

function paintmarker(text){
    const newId = markers.length + 1
    const markerObj = {
        text : text,
        id: newId
    };
    markers.push(markerObj);
    savemarkers();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = markerInput.value;
    paintmarker(currentValue);
    markerInput.value = "";
}

function loadmarkers(){
    const loadedmarkers = localStorage.getItem(MARKERS_LS);
    if(loadedmarkers !== null){
        const parsedmarkers = JSON.parse(loadedmarkers);
        parsedmarkers.forEach(function(marker){
            paintmarker(marker.text);
        });
    }
}

function init(){
    loadmarkers();
    markerForm.addEventListener("submit", handleSubmit)
}

init();