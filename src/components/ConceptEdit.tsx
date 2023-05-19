import { Excalidraw, exportToBlob, useHandleLibrary, Sidebar} from "@excalidraw/excalidraw";
import { getConcepts, blobToDataURL } from "../scripts/Concepts";
import type { Concept } from "../scripts/Concepts";
import { useState } from "react";

const SAVE_IMAGE_THRESHOLD = 1000 * 60 * 5 //5 minutes in milliseconds





export function ConceptEdit(props:any) {
    const [excalidrawAPI, setExcalidrawAPI] = useState(null);
    useHandleLibrary({excalidrawAPI})
    let conceptName = props.conceptName
    let timeImageUpdated = 0
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
    function addQuestion() {

    }
   
    let [projectName, setProjectName] = useState(currentCon.name)
    function onTitleChange(event:any) {
      setProjectName(event.target.value)
      currentCon!.name = event.target.value
    }
    console.log(currentCon)
    function onCanvasChange(elements:any, appState:any, files:any) {
  
      currentCon!.canvasData.elements = elements
      currentCon!.canvasData.appState = appState
      console.log(files)
      currentCon!.canvasData.files = files
      if ((Date.now() - timeImageUpdated) > SAVE_IMAGE_THRESHOLD) {
        timeImageUpdated = Date.now()
        //i feel so smart for writing this code and it actually works
        //@ts-ignore
        exportToBlob({...currentCon!.canvasData, mimeType:"image/png"}).then((blob) => {
          blobToDataURL(blob).then((dataurl) => {
            console.log(dataurl)
            currentCon!.previewImage = dataurl
          })
        })

      }
  
    }
    
    return <div id="conceptedit">
      {/* <button id="addquestion" onClick={addQuestion}>Add Question</button> */}
      <input id="project-name" placeholder="Project Name" value={projectName} onChange={onTitleChange}></input>
      <Excalidraw initialData={{
          //@ts-ignore
          appState: currentCon.canvasData.appState,
          //@ts-ignore
          elements: currentCon.canvasData.elements,
          files: currentCon.canvasData.files,
          libraryItems: currentCon.canvasData.libraryItems
    
        }} onChange={onCanvasChange} ref={(api) => setExcalidrawAPI(api)}
        renderSidebar={() => {
          return (
            <Sidebar dockable={true}>
              <Sidebar.Header>Custom Sidebar Header </Sidebar.Header>
              <p style={{ padding: "1rem" }}> custom Sidebar Content </p>
            </Sidebar>
          );
        }}/>
      
    </div>

}