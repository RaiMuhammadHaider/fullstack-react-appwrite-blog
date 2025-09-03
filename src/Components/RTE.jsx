import React from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form'
// import {Editor} from '@tinymce/tinymce-react'
export default function RTE  ({name , control, label ,  defaultValue = ''})  {
  return (
    <div className='w-full'>
{label && <label className='inline-block mb-1 pl-1'>{label}</label>}
<Controller
name={name || 'content'}
control={control}
render={({field : {onChange}}) => (
  <Editor
    apiKey= "cougi3en33pki3chutkv14gcznmwpvohncm27cm2t70r40mj"
    initialValue={defaultValue}
    init={{
      initialValue: defaultValue,
      height: 500,
      menubar: true,
      plugins: [
        'link',
        'anchor',
        'image',
        'media',
        'code',
        'help',
        'lists',
        'autolink',
        'charmap',
        'print',
        'preview',
        'searchreplace',
        'visualblocks',
        'fullscreen',
        'insertdatetime',
        'media',
        'table',
        'paste',
        'code',
        'help',
        'wordcount'
        
      ],
      toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | justify | bullist numlist outdent indent | removeformat | help',
      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
    }}
    onEditorChange={onChange}
  />

)}
/>
    </div>
    

  )
}

