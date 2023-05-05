import type { AppState, BinaryFiles, LibraryItems } from "@excalidraw/excalidraw/types/types";
import type { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { nanoid } from "nanoid";

interface CanvasData {
    appState: AppState;
    elements: ExcalidrawElement[],
    files?: BinaryFiles,
    libraryItems?: LibraryItems,
    scrollX?: number,
    scrollY?: number,
    

}
export interface Concept {
    name: string;
    id: string;
    timeCreated:  number;
    timeUpdated: number;
    favorite: boolean;
    canvasData: CanvasData,
}


//function that returns the time in hh:mm:ss format
function loadConcepts(): Concept[] {
    let tempConcepts = localStorage.getItem("concepts");
    if (tempConcepts) {
        return JSON.parse(tempConcepts);
    } else {
        return [];
    }
}

let concepts = loadConcepts()
export function getTime(): string {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
}
//get "concepts" array from localstorage, if not there, set to empty array
export function getConcepts() {
    return concepts
}

function saveConcept(concept: Concept){
    concepts.push(concept)
    localStorage.setItem("concepts", JSON.stringify(concepts))
}


function getAppState(): AppState {
    return {
        viewBackgroundColor: "#bacaf7",
        zenModeEnabled: true,
        //@ts-ignore
        collaborators: [],
    };
  }




export function createNewConcept(): Concept{
    const newConcept: Concept = {
        name: `Untitled Concept ${getTime()}`,
        id: nanoid(),
        timeCreated: Date.now(),
        timeUpdated: Date.now(),
        favorite: false,
        canvasData: {
            //@ts-ignore
            appState: getAppState(),
            elements: [],
            // scrollToContent: true
          }
    }
    saveConcept(newConcept)
    return newConcept
}
function saveData() {
    console.log(concepts)
    localStorage.setItem("concepts", JSON.stringify(concepts));
}

window.onbeforeunload = saveData
window.saveData = saveData