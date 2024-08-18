import "./App.css";
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-react-pdfviewer/styles/material.css';
import PdfViewerComp from "./Components/pdfViewerCanvas.tsx";
import PdfViewerWithDragDropDiv from "./Components/pdfViewerDragDrop.tsx";
import To_do from "./Components/To_do.jsx";
  function App() {
  return (
    <div className="App">
      <div className="card card-body shadow p-3 w-50 m-auto mb-3 mt-3">
        <h3 className="text-muted text-decoration-underline">Write your <strong className="text-warning">tO dO list</strong> </h3>
      <To_do></To_do>
      </div>
      <PdfViewerComp/>
      {/* <PdfViewerWithDragDropDiv/> */}
    </div>
  );
}

export default App;
