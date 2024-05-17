"use client"
import React, { useState, ChangeEvent } from 'react';
import Dropzone, { FileWithPath } from 'react-dropzone';
import Wallet from './Wallet';
import { Cloudinary } from '@cloudinary/url-gen/index';

const Drop = () => {
    const [files, setFiles] = useState<FileWithPath[]>([]);
    const [preview, setPreview] = useState<string[]>([]);
    const [title, setTitle] = useState<string>('Select the best thumbnail');

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const dropzoneHandler = (acceptedFiles: FileWithPath[]) => {
        setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
        acceptedFiles.forEach((file: FileWithPath) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                if(reader.result) {
                    // @ts-ignore
                    setPreview(prevPreview => [...prevPreview, reader.result.toString()]);
                }
            };
            reader.readAsDataURL(file);
        });
    };

    const removeHandler = (image: string) => {
        const newPrev = preview.filter((p) => p !== image);
        setPreview(newPrev);
        const newFiles = files.filter((file) => URL.createObjectURL(file) !== image);
        setFiles(newFiles);
    };


  
    return (
        <div className='flex gap-10 my-20 flex-col justify-center items-center w-full text-2xl'>
            <div>
                <p className='text-sm font-sans px-2 my-2 text-black font-semibold'>Enter title</p>
                <input
                    className='bg-slate-100 border text-xl border-black outline-none w-[650px] rounded-xl p-2 px-5 text-black'
                    type='text'
                    value={title}
                    onChange={changeHandler}
                />
            </div>
            <div className='flex flex-row flex-wrap justify-center items-center gap-5 w-full'>
                {preview.map((image: string, index: number) => (
                    <div key={index} className='relative flex gap-1 flex-wrap flex-col items-center justify-center'>
                        <img className='max-h-[200px] max-w-[200px]' src={image} key={index} alt='image' />
                        <p
                            onClick={() => removeHandler(image)}
                            className='text-white absolute -top-2 -right-1 flex items-center justify-center bg-pink-700 cursor-pointer w-5 h-5 rounded-full text-sm px-2 py-2'
                        >
                            X
                        </p>
                    </div>
                ))}
            </div>
            <Dropzone onDrop={dropzoneHandler}>
                {({ getRootProps, getInputProps }) => (
                    <section className='cursor-pointer w-60 h-40 rounded-xl text-center border text-sm font-bold bg-slate-100 text-black border-black p-2 flex justify-center items-center'>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    </section>
                )}
            </Dropzone>
            
 
            
            <Wallet files={files} title={title}/>
        </div>
    );
};

export default Drop;
