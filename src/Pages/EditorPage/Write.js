import React, {useState} from 'react'
import styles from './Write.module.css'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import axios from 'axios';
import Standard from '../../components/Layout/Posts/Standard';
import Horizontal from '../../components/Layout/Posts/Horizontal';
import Square from '../../components/Layout/Posts/Square';

function Write() {
    const [format, setFormat] = useState('')
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const [cats,setCats] = useState('');
    const [desc,setDesc] = useState('');
    const [tag, setTag] = useState([])
    const [cover,setCover] = useState(null);
    const [coverWH, setCoverWH] = useState({width:0, height:0})
    const [content,setContent] = useState('');
    const [error,setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        const newPost = {
            title,
            slug: toSlug(title),
            desc,
            cats,
            author,
            content,
            covername: Date.now() + '_' + toSlug(title)
        }
        if (title,format,author,cats,desc,cover,content){
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
            setCoverWH({width:image.naturalWidth, height:image.naturalHeight})
        };
        image.src = URL.createObjectURL(file);
    }
  return (
    <div className={styles.writePage}>
        <div className={styles.writeForm} style={{display:"flex"}}>
            <div className={styles.imageSide}>
                <h5>Cover Image</h5>
                {cover && coverWH.width<coverWH.height ?
                    <div className={styles.coverGrid} style={{display:'grid'}}>
                        <Standard image={URL.createObjectURL(cover)} title={title} cat={cats} desc={desc}/>
                        <i className={`${styles.xIcon} fas fa-times fa-lg`} onClick={e=>{setCover(null)}}/>
                    </div> :
                    cover && coverWH.width>coverWH.height ?
                    <div className={styles.coverGrid} style={{display:'grid'}}>
                        <Horizontal image={URL.createObjectURL(cover)} title={title}/>
                        <i className={`${styles.xIcon} fas fa-times fa-lg`} onClick={e=>{setCover(null)}}/>
                    </div>
                    : 
                    cover && coverWH.width===coverWH.height ?
                    <div className={styles.coverGrid} style={{display:'grid'}}>
                        <Square image={URL.createObjectURL(cover)} title={title}/>
                        <i className={`${styles.xIcon} fas fa-times fa-lg`} onClick={e=>{setCover(null)}}/>
                    </div>
                    : 
                    <div className={styles.uploadImage} style={{width:'460px', height:'460px'}}>
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
                        <li>{`Image resolution: ${coverWH.width} x ${coverWH.height}`}</li>
                    </ul>
                </div>
            </div>
            <div className={styles.textSide}>
                <form className={styles.textForm} onSubmit={handleSubmit}>
                    <div className={styles.textField}>
                        <label>Post Format<span className={styles.textDanger}> *</span></label>
                        <select name='post_format' placeholder='Select Post Format...' className={styles.textInput}  onChange={e=>{setFormat(e.target.value)}}>
                            <option value='none' defaultValue className={styles.items}>Select Post Format...</option>
                            <option value='blog' className={styles.items}>blog</option>
                            <option value='gallery' className={styles.items}>gallery</option>
                            <option value='story' className={styles.items}>story</option>
                            <option value='video' className={styles.items}>video</option>
                            <option value='audio' className={styles.items}>audio</option>
                        </select>
                    </div>
                    <div className={styles.textField}>
                        <label>Title of the Post<span className={styles.textDanger}> *</span></label>
                        <input name='title' type='text' required maxLength='500' className={styles.textInput} autoFocus={true} placeholder='Title' onChange={e=>{setTitle(e.target.value)}}/>
                    </div>
                    <div className={styles.textField}>
                        <label>Author</label>
                        <input name='author' type='text' maxLength='500' className={styles.textInput} placeholder='Author...' onChange={e=>{setAuthor(e.target.value)}}/>
                    </div>
                    <div className={styles.textField}>
                        <label>Categories<span className={styles.textDanger}> *</span></label>
                        <select name='category' placeholder='Select category...' className={styles.textInput}  onChange={e=>{setCats(e.target.value)}}>
                            <option value='none' defaultValue className={styles.items}>Select section...</option>
                            <option value='Fotography' className={styles.items}>Fotography</option>
                            <option value='Films' className={styles.items}>Films</option>
                            <option value='Something' className={styles.items}>Something</option>
                            <option value='Vinyls' className={styles.items}>Vinyls</option>
                            <option value='Moods' className={styles.items}>Moods</option>
                            <option value='Memories' className={styles.items}>Memories</option>
                            <option value='Running' className={styles.items}>Running</option>
                            <option value='Music' className={styles.items}>Music</option>
                            <option value='Reading' className={styles.items}>Reading</option>
                        </select>
                    </div>
                    <div className={styles.textField}>
                        <label>Tags<span className={styles.textDanger}> *</span></label>
                        <input name='tags' type='text' className={styles.textInput}  onChange={e=>{setTag(e.target.value.split(' '))}}/>
                    </div>
                    <div className={styles.textField}>
                        <label>Description<span className={styles.textDanger}> *</span></label>
                        <textarea name='description' type='text' className={styles.textInput} placeholder='Description'  onChange={e=>{setDesc(e.target.value)}}></textarea>
                    </div>
                    
                    <div className={styles.submit}>
                        <button className={styles.uploadBtn}>Preview</button>
                        <button className={styles.uploadBtn} type='submit'>Submit</button>
                    </div>
                    {error ? <div><h5 style={{color:'red',textAlign:'right'}}>Something went wrong! Please check again...</h5></div>:null}
                </form>
            </div>
        </div>
        <div className={styles.textEditor}>
            <h5>Main Content<span className={styles.textDanger}> *</span></h5>
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
        <div className={styles.previewSection}></div>
    </div>
  )
}

export default Write