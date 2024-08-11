/*
 * @Author: HHC
 * @Date: 2024-08-12 00:55:29
 * @LastEditTime: 2024-08-12 02:03:52
 */
import React, { useState } from 'react';
import axios from 'axios';

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
                try {
                    const response = await axios.post('/api/uploadImage', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });
                    console.log("在ImageDropZone，response", response)
                    onImageUploaded(response.data.imageUrl); // 调用父组件传递的回调函数
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
            <p>Drag and drop images here or click to select files</p>
        </div>
    );
}

export default ImageDropzone;