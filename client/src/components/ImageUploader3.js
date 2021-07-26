import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);

function ImageUploader3() {
    const [files, setFiles] = useState([]);
    const pondRef = useRef(null);
    const handleProcess = (error, file) => {
        console.log(error)
        console.log(file)
        // TODO figure out how to get image url after save to database
        // GOOGLE
    }
    return (
        <div className="App" style={{ width: "400px", margin: "30px auto" }}>
            <FilePond
                name="file"
                files={files}
                ref={pondRef}
                allowMultiple={true}
                allowRevert={false}
                allowPaste={false}
                allowProcess={false}
                acceptedFileTypes={["application/pdf", "image/jpeg", "image/png"]}
                onupdatefiles={setFiles}
                onprocessfile={handleProcess}
                server={{
                    process: {
                        url: "/api/images/upload1",
                        // headers: {
                        //     Authorization: "Bearer abc123"
                        // }
                    }
                }}
                // instantUpload={false}
                instantUpload={true}

            />
            <button onClick={() => pondRef.current.processFiles()}>
                add
          </button>
        </div>
    );
}

export default ImageUploader3