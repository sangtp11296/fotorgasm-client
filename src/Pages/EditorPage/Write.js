import React from 'react'
import styles from './Write.module.css'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';

function Write() {
    const editorConfiguration = {
        removePlugins: ['Title','Markdown', 'Watchdog'],
        language:{
            textPartLanguage: [
                { title: 'English', languageCode: 'en' },
                { title: 'German', languageCode: 'de' },
                { title: 'Vietnamese', languageCode: 'vi' },
                { title: 'Chinese', languageCode: 'zh-cn'}
            ]
        },
        toolbar: {
            items: [
                'textPartLanguage', 'heading', '|',
                'fontfamily', 'fontsize', '|',
                'alignment', '|',
                'fontColor', 'fontBackgroundColor', '|',
                'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
                'link', '|',
                'outdent', 'indent', '|',
                'bulletedList', 'numberedList', 'todoList', 'horizontalLine', '|',
                'code', 'codeBlock', 'sourceEditing', '|',
                'insertTable', '|',
                'insertImage', 'mediaEmbed', 'blockQuote', '|',
                'undo', 'redo', 'findAndReplace', 'highlight', 'specialCharacters'
            ],
            viewportTopOffset: 30,
            shouldNotGroupWhenFull: true
        },
        ckfinder: {
            uploadUrl: '/uploads'
        },
        highlight: {
            options: [
                {
                    model: 'blueMarker',
                    class: 'marker-blue',
                    title: 'Blue marker',
                    color: 'var(--main-brand-color-theme)',
                    type: 'marker'
                },
                {
                    model: 'greenMarker',
                    class: 'marker-green',
                    title: 'Green marker',
                    color: 'var(--ck-highlight-marker-green)',
                    type: 'marker'
                },
                {
                    model: 'redPen',
                    class: 'pen-red',
                    title: 'Red pen',
                    color: 'var(--ck-highlight-pen-red)',
                    type: 'pen'
                }
            ]
        },
        table: {
            contentToolbar: [
                'tableColumn', 'tableRow', 'mergeTableCells',
                'tableProperties', 'tableCellProperties', 'toggleTableCaption'
            ],
        },
        image: {
            toolbar: [
                'imageStyle:inline',
                'imageStyle:block',
                'imageStyle:side',
                '|',
                'toggleImageCaption',
                'imageTextAlternative',
                'linkImage'
            ]},
        mediaEmbed: {
            removeProviders: [ 'instagram', 'twitter', 'googleMaps', 'flickr', 'facebook' ]
        }
    };
  return (
    <div className={styles.writePage}>
        <div className={styles.textSide}>
            <form className={styles.textForm} >
                <div className={styles.textField}>
                    <label>Post Type<span className={styles.textDanger}>*</span></label>
                    <select name='post_type' placeholder='Select Post Type...' className={styles.textInput}  onChange={e=>{setSection(e.target.value)}}>
                        <option value='none' defaultValue className={styles.items}>Select Post Type...</option>
                        <option value='standard' className={styles.items}>standard</option>
                        <option value='gallary' className={styles.items}>gallary</option>
                        <option value='quote' className={styles.items}>quote</option>
                        <option value='video' className={styles.items}>video</option>
                        <option value='audio' className={styles.items}>audio</option>
                    </select>
                </div>
                <div className={styles.textField}>
                    <label>Title of the Post<span className={styles.textDanger}>*</span></label>
                    <input name='title' type='text' required maxLength='500' className={styles.textInput} autoFocus={true} placeholder='Title' onChange={e=>{setTitle(e.target.value)}}/>
                </div>
                <div className={styles.textField}>
                    <label>Photographer's Name</label>
                    <input name='photographer' type='text' maxLength='500' className={styles.textInput} placeholder='Photographer Name...' onChange={e=>{setPhotographer(e.target.value)}}/>
                </div>
                <div className={styles.textField}>
                    <label>Sections<span className={styles.textDanger}>*</span></label>
                    <select name='sections' placeholder='Select section...' className={styles.textInput}  onChange={e=>{setSection(e.target.value)}}>
                        <option value='none' defaultValue className={styles.items}>Select section...</option>
                        <option value='photography' className={styles.items}>photography</option>
                        <option value='explore' className={styles.items}>explore</option>
                        <option value='photographers' className={styles.items}>photographers</option>
                        <option value='challenge' className={styles.items}>challenge</option>
                        <option value='book' className={styles.items}>book</option>
                        <option value='music' className={styles.items}>music</option>
                        <option value='life' className={styles.items}>life</option>
                    </select>
                </div>
                <div className={styles.textField}>
                    <label>Categories<span className={styles.textDanger}>*</span></label>
                    <input name='categories' type='text' className={styles.textInput}  onChange={e=>{setCats(e.target.value.split(' '))}}/>
                </div>
                <div className={styles.textField}>
                    <label>Tags<span className={styles.textDanger}>*</span></label>
                    <input name='tags' type='text' className={styles.textInput}  onChange={e=>{setCats(e.target.value.split(' '))}}/>
                </div>
                <div className={styles.textField}>
                    <label>Description<span className={styles.textDanger}>*</span></label>
                    <textarea name='description' type='text' className={styles.textInput} placeholder='Description'  onChange={e=>{setDesc(e.target.value)}}></textarea>
                </div>
                <div className={styles.textField}>
                    <label>Main Content<span className={styles.textDanger}>*</span></label>
                    <CKEditor
                        editor={ Editor }
                        config={ editorConfiguration }
                        // data='null'
                        // onReady={ editor => {
                        //     // You can store the "editor" and use when it is needed.
                        //     console.log( 'Editor is ready to use!', editor );
                        // } }
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            // console.log( { event, editor, data } );
                            setContent(data)
                            console.log(content)
                        } }
                        // onBlur={ ( event, editor ) => {
                        //     console.log( 'Blur.', editor );
                        // } }
                        // onFocus={ ( event, editor ) => {
                        //     console.log( 'Focus.', editor );
                        // } }
                    />
                </div>
                <div className={styles.submit}>
                    <button className={styles.uploadBtn}>Preview</button>
                    <button className={styles.uploadBtn} type='submit'>Submit</button>
                </div>
                {/* {error ? <div><h5 style={{color:'red',textAlign:'right'}}>Something went wrong! Please check again...</h5></div>:null} */}
            </form>
        </div>
    </div>
  )
}

export default Write