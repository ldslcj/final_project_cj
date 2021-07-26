import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import axios from 'axios'
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { Button, Form, Input } from "semantic-ui-react";
import styled from 'styled-components'
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
            data.append('name1', name)
            let res = await axios.post(`/api/images/upload2?name2=${name}`, data)
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
            <div class="ui labeled input">
                            <div class="ui label" style={{backgroundColor:"#7974D5", color:"#fff"}}>Name</div>
                <Input
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                /></div>
                <CustomFilePond
                    files={files}
                    allowReorder={true}
                    allowMultiple={false}
                    onupdatefiles={setFiles}
                    // onupdatefiles={handlePhotoUploaded}
                    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                />
                <GetStartedButton onClick={handleClick}>Upload Image</GetStartedButton>
            </Form>
        </div>
    );
}
export default ImageUploader

const GetStartedButton = styled(Button)`
    border-radius: 25px !important;
    background-color: #7974D5 !important;
    color: #fff !important;
    padding: 15px 20px 15px 20px !important;
    border:none;
    font-size: 1.2em !important;
    font-weight: bold;
    margin-top: 5px !important;
    margin-bottom: 50px !important;
`

const CustomFilePond = styled(FilePond)`
    font-weight: bold !important;
    background-color: #7974D5 !important;
`