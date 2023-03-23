import React, {useState} from 'react'
import styles from './Write.module.css'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import axios from 'axios';

function Write() {
    const [type, setType] = useState('')
    const [title,setTitle] = useState('');
    const [photographer,setPhotographer] = useState('');
    const [categories,setCats] = useState('');
    const [desc,setDesc] = useState('');
    const [tag, setTag] = useState([])
    const [cover,setCover] = useState(null);
    const [content,setContent] = useState('');
    const [error,setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        const newPost = {
            title,
            slug: toSlug(title),
            desc,
            categories,
            photographer,
            content,
            covername: Date.now() + '_' + toSlug(title)
        }
        if (title,type,photographer,categories,desc,cover,content){
            let res;
            try{
                res = await axios.post('/posts', newPost);
            } catch(err) {
                setError(true)
                throw new Error(err)
            }
        }
    }
    function toSlug(str)
    {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();     
    
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|ä)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ö)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ü)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
        str = str.replace(/(ß)/g, 'B');
    
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
    
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
    
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
    
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
    
        // return
        return str;
    }
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
    const handleCoverImageUpload = (event) =>{
        const file = event.target.files[0]
        setCover(file)
        const image = new Image();
        image.onload = () => {
            console.log(`Image resolution: ${image.naturalWidth} x ${image.naturalHeight}`)
        };
        image.src = URL.createObjectURL(file);
    }
  return (
    <div className={styles.writePage}>
        <div className={styles.writeForm} style={{display:"flex"}}>
            <div className={styles.imageSide}>
                <h5>Cover Image</h5>
                {cover ? <div className={styles.uploadImage} style={{backgroundColor:'transparent'}}>
                            <img className={styles.coverPhoto} alt='' src={URL.createObjectURL(cover)}/>
                            <i className={`${styles.xIcon} fas fa-times fa-2x`} onClick={e=>{setCover(null)}}/>
                        </div> : 
                        <div className={styles.uploadImage} style={{width:'375px', height:'211px'}}>
                            <label htmlFor='fileInput' className={styles.icon}>
                                <i  className="fas fa-camera-retro"></i>
                            </label>
                            <label htmlFor='fileInput' className={styles.uploadBtn}>Upload Image</label>
                            <input type='file' id='fileInput' required style={{display:'none'}} onChange={handleCoverImageUpload}/>
                        </div>
                        }
                <div className={styles.notice}>
                    For better design, please use:
                    <ul>
                        <li>Minimum width image size is 1080</li>
                        <li>The best ratio is 16:9</li>
                    </ul>
                </div>
            </div>
            {/* <div className={styles.textSide}>
                <form className={styles.textForm} onSubmit={handleSubmit}>
                    <div className={styles.textField}>
                        <label>Post Type<span className={styles.textDanger}>*</span></label>
                        <select name='post_type' placeholder='Select Post Type...' className={styles.textInput}  onChange={e=>{setType(e.target.value)}}>
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
                        <label>Categories<span className={styles.textDanger}>*</span></label>
                        <select name='category' placeholder='Select category...' className={styles.textInput}  onChange={e=>{setCats(e.target.value)}}>
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
                        <label>Tags<span className={styles.textDanger}>*</span></label>
                        <input name='tags' type='text' className={styles.textInput}  onChange={e=>{setTag(e.target.value.split(' '))}}/>
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
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                // console.log( { event, editor, data } );
                                setContent(data)
                            } }
                        />
                    </div>
                    <div className={styles.submit}>
                        <button className={styles.uploadBtn}>Preview</button>
                        <button className={styles.uploadBtn} type='submit'>Submit</button>
                    </div>
                    {error ? <div><h5 style={{color:'red',textAlign:'right'}}>Something went wrong! Please check again...</h5></div>:null}
                </form>
            </div> */}
        </div>
        <div className={styles.previewSection}></div>
    </div>
  )
}

export default Write