import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WebViewer from '@pdftron/webviewer';
import './PdfEditor.css';

const PdfEditor = () => {
  const viewer = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    let instance = null;

    const handleFileUpload = async (event) => {
      const file = event.target.files[0];

      if (file) {
        if (!instance) {
          instance = await WebViewer(
            {
              path: '/webviewer/lib',
              licenseKey: 'demo:1708424904260:7f5bd4750300000000df8aa6f9b502a88e6a593c6dc38d95583e94f409'
            },
            viewer.current,
          );
        }

        const { documentViewer, annotationManager, Annotations } = instance.Core;
        documentViewer.loadDocument(file, { filename: file.name });

        documentViewer.addEventListener('documentLoaded', () => {
          // Add rectangle annotation
          const rectangleAnnot = new Annotations.RectangleAnnotation({
            PageNumber: 1,
            X: 100,
            Y: 150,
            Width: 200,
            Height: 50,
            Author: annotationManager.getCurrentUser()
          });

          annotationManager.addAnnotation(rectangleAnnot);
          annotationManager.redrawAnnotation(rectangleAnnot);

          // Fit the document to the width and height of the viewer
          instance.UI.zoomTo('FitWidth');
          instance.UI.zoomTo('FitHeight');
        });
      }
    };

    const fileInput = document.getElementById('file-input');
    fileInput.addEventListener('change', handleFileUpload);

    return () => {
      if (fileInput) {
        fileInput.removeEventListener('change', handleFileUpload);
      }
    };
  }, []);

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="pdf-editor">
      <h2>Editor</h2>
      <input type="file" id="file-input" accept=".pdf" />
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      <div className="webviewer-container">
        <div className="webviewer" ref={viewer}></div>
      </div>
    </div>
  );
};

export default PdfEditor;
