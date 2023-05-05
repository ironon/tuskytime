import { Excalidraw } from "@excalidraw/excalidraw";
import { getConcepts } from "../scripts/Concepts";
import type { Concept } from "../scripts/Concepts";









export function ConceptEdit(props:any) {
    
    let conceptName = props.conceptName
    let concepts = getConcepts()
    let currentCon:Concept|undefined
   
    currentCon = concepts.find((concept) => {
        console.log(concept.id)
        console.log(conceptName)
        return concept.id === conceptName
    })
    if (currentCon == undefined) {
      console.log("no concept selected")
      return <p>No concept selected</p>
    }
    
    console.log(currentCon)
    function onCanvasChange(elements:any, appState:any, files:any) {
      //@ts-ignore
      currentCon.canvasData.elements = elements
      //@ts-ignore
      currentCon.canvasData.appState = appState
      console.log(files)
      //@ts-ignore
      currentCon.canvasData.files = files
  
    }
    return <Excalidraw initialData={{
        //@ts-ignore
        appState: currentCon.canvasData.appState,
        //@ts-ignore
        elements: currentCon.canvasData.elements,
  
      }} onChange={onCanvasChange}/>
}