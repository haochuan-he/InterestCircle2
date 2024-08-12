/*
 * @Author: HHC
 * @Date: 2024-08-12 00:55:29
 * @LastEditTime: 2024-08-12 11:47:15
 */
import React, { useState } from 'react';
import { imageUpload } from '../request/util.request';

function ImageDropzone({ onImageUploaded }) {
    const [dragOver, setDragOver] = useState(false);

    const handleDragOver = (event) => {
        // alert("handleDragOver!")
        event.preventDefault();
        event.stopPropagation();
        setDragOver(true);
    };

    const handleDragLeave = (event) => {
        // alert("handleDragLeave!")

        event.preventDefault();
        event.stopPropagation();
        setDragOver(false);
    };

    const handleDrop = async (event) => {
        // alert("handleDrop!")

        event.preventDefault();
        event.stopPropagation();
        setDragOver(false);

        const files = event.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            if (file.type.startsWith('image/')) {
                const formData = new FormData();
                formData.append('file', file);
                console.log("前端try之前")
                // alert("前端try之前")
                try {
                    // const response = await axios.post('/api/uploadImage', formData, {
                    //     headers: {
                    //         'Content-Type': 'multipart/form-data',
                    //     },
                    // });
                    console.log("前端try formData", formData)
                    const response = await imageUpload(formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    })
                    console.log("在ImageDropZone response", response)
                    onImageUploaded(response); // 调用父组件传递的回调函数
                } catch (error) {
                    console.error('Error uploading image:', error);
                }
            }
        }
    };

    return (
        <div
            className={`dropzone ${dragOver ? 'drag-over' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <p>将图片拖放到这里上传</p>
        </div>
    );
}

export default ImageDropzone;