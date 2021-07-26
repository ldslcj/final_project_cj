import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import axios from 'axios'
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { Button, Form, Input } from "semantic-ui-react";
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
function ImageUploader() {
    const [files, setFiles] = useState([]);
    const [name, setName] = useState('');

    const handlePhotoUploaded = (files) => {
        console.log(files[0].file);
        files.forEach((f) => {
            console.log(f.file);
        });

    };
    const handleClick = async () => {
        try {
            let data = new FormData()
            data.append('file', files[0].file)
            let res = await axios.post('/api/images/upload1', data)
            console.log(res.data)
        } catch (err) {
            alert(err)
            console.log(err)
            console.log(err.response)
        }
    }
    return (
        <div className="App" style={{ margin: '20px' }}>
            <Form>
                <Input
                    value={name}
                    label='name'
                    onChange={(e) => { setName(e.target.value) }}
                />
                <FilePond
                    files={files}
                    allowReorder={true}
                    allowMultiple={false}
                    onupdatefiles={setFiles}
                    // onupdatefiles={handlePhotoUploaded}
                    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                />
                <Button onClick={handleClick}>Add to Database</Button>
            </Form>
        </div>
    );
}
export default ImageUploader