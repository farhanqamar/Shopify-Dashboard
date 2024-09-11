import { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Import Quill's styles

const Editor = () => {
  const editorRef = useRef(null);
  const toolbarRef = useRef(null);
  const quillInstance = useRef<Quill | null>(null); // Properly type the ref

  useEffect(() => {
    if (editorRef.current && toolbarRef.current && !quillInstance.current) {
      const toolbarOptions = [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline'],        // Bold, italic, underline
        [{ 'color': [] }, { 'background': [] }], // Color options
        [{ 'align': [] }],                      // Text alignment
        ['blockquote', 'code-block'],           // Blockquote, code block
        [{ 'list': 'ordered'}, { 'list': 'bullet' }], // Ordered, unordered list
        [{ 'indent': '-1'}, { 'indent': '+1' }], // Indent, outdent
        ['image', 'video'],                     // Insert image, video
        ['clean']                               // Remove formatting
      ];

      quillInstance.current = new Quill(editorRef.current, {
        theme: 'snow',  
        modules: { toolbar: toolbarRef.current },
      });
    }

    return () => {
      if (quillInstance.current) {
        quillInstance.current = null; 
      }
    };
  }, []);

  return (
    <div className="h-auto rounded-lg shadow-md">
    <div ref={toolbarRef} id="toolbar" className='rounded-t-lg'>
      <span className="ql-formats">
        <select className="ql-header">
          <option value="1"></option>
          <option value="2"></option>
          <option selected></option>
        </select>
        <button className="ql-bold"></button>
        <button className="ql-italic"></button>
        <button className="ql-underline"></button>
      </span>
      <span className="ql-formats">
        <select className="ql-color"></select>
        <select className="ql-background"></select>
      </span>
      <span className="ql-formats">
        <button className="ql-list" value="ordered"></button>
        <button className="ql-list" value="bullet"></button>
        <button className="ql-indent" value="-1"></button>
        <button className="ql-indent" value="+1"></button>
      </span>
      <span className="ql-formats">
        <button className="ql-blockquote"></button>
        <button className="ql-code-block"></button>
      </span>
      <span className="ql-formats">
        <button className="ql-image"></button>
        <button className="ql-video"></button>
        <button className="ql-clean"></button>
      </span>
    </div>
    <div ref={editorRef} className="h-64 rounded-b-lg"></div>
  </div>
  );};

export default Editor;
