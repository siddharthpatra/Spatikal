import React, {Component} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import Navbar from '../header/Navbar';
import firebase from '../../config/firebase'
import {isEmpty} from 'lodash'

const db = firebase.firestore()

const storageRef= firebase.storage()

class Post extends Component {
    constructor(props){
        super(props);
        this.state= {
            article: {
                title: '',
                author: '',
                datePosted: new Date(),
                category: [],
                image: '',
                video: '',
                content: '',
                isPublished: false
            },
            tempImageLink: '',
            tempVideoLink: '',
            uploaded: false,
            category: []
        }
        this.onChangeCategory = this.onChangeCategory.bind(this)
    }
    modules = {
        toolbar: [
          [{ 'size': ['small', false, 'large', 'huge'] }],
          [{ 'header': [1, 2, 3, 4, 5, 6] }],
          [{ 'font': [] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ]
      }
     
      formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'indent',
        'link', 'image', 'clean'
      ]

      onChangeArticleTitle = (value) => {
          this.setState({
              article: {
                  ...this.state.article,
                  title: value
              }
          })
      }
      onChangeImageUploaderCallBack = (e) => {
          return new Promise(async(resolve,reject) =>{
              const file = e.target.files[0]
              storageRef.ref().child("Articles/" + file.name).put(file)
                .then(async snapshot => {
                    const downloadURL = await storageRef.ref().child("Articles/" + file.name).getDownloadURL()
                    resolve({
                        success: true,
                        data: {link: downloadURL}
                    })
                })
          })
      }
      onChangeVideoUploaderCallBack = e => {
          return new Promise(async(resolve,reject) => {
              const file = e.target.files[0]
              storageRef.ref().child("Articles/" + file.name).put(file)
                .then(async snapshot => {
                    const downloadURL = await storageRef.ref().child("Articles/" + file.name).getDownloadURL()
                    resolve({
                        success: true,
                        data: {link: downloadURL}
                    })
                })
          })
      }
      onChangeAuthor = (value) => {
        this.setState({
            article: {
                ...this.state.article,
                author: value
            }
        })
    }
    onChangeCategory = (value) => {
        if(value.target.checked)
       { this.setState({
                category: this.state.category.push(value.target.value)
        })
        console.log(this)
    }
        console.log(this.state.category)
    }
    onChangeArticleContent = (value) => {
        this.setState({
            article: {
                ...this.state.article,
                content: value
            }
        })
    }

    submitArticle = (e) => {
        e.preventDefault()
        const article = {
            ...this.state.article
        }
        article.video = this.state.tempVideoLink
        article.image = this.state.tempImageLink
        db.collection("spatikal-db").add(article).then( res => {
            this.setState({
                uploaded:true,
                tempImageLink: '',
                tempVideoLink: '',
                article: {
                    title: '',
                    author: '',
                    category: '',
                    image: '',
                    video: '',
                    content: '',
                    isPublished: false
                },
            })
            console.log(res)
        }).catch(err => console.log(err))
    }

    render () {
        return (
            <>
                <Navbar/>
                {
                    this.state.uploaded ? <p>The post was successful</p> : ''
                }
                <form onSubmit={(e) => this.submitArticle(e)}>

                    <div className="titleInput">
                        <label htmlFor="title">Title</label>
                        <input id="title" type="text"
                            placehoder="Here goes your Title" onChange={(e) => {this.onChangeArticleTitle(e.target.value)}} 
                            value={this.state.article.title}/>
                    </div>
                    <div className="imageInput">
                        <label htmlFor="image">Image</label>
                        <input id="image" type="file" accept="image/*" 
                        onChange={async (e) => {
                            const uploadImage = await this.onChangeImageUploaderCallBack(e)
                            if(uploadImage.success){
                                this.setState({
                                    hasImage: true,
                                    tempImageLink: uploadImage.data.link
                                })
                            }
                            }}/>
                            {
                                !isEmpty(this.state.tempImageLink) ? <img src={this.state.tempImageLink}/> : ''
                            }
                    </div>
                    <div className="videoInput">
                        <label htmlFor="video">Video</label>
                        <input id="video" type="file" accept="video/*" 
                        onChange={async (e) => {
                            const uploadVideo = await this.onChangeVideoUploaderCallBack(e)
                            if(uploadVideo.success){
                                this.setState({
                                    hasVideo: true,
                                    tempVideoLink: uploadVideo.data.link
                                })
                            }
                            }}/>
                            {
                                !isEmpty(this.state.tempVideoLink) ?  <video controls className="videoContent">
                                <source src={this.state.tempVideoLink} type="video/mp4"/>
                            </video> : ''
                            }
                    </div>
                    <div>
                        <label htmlFor="author">Author</label>
                        <input id="author" type="text" onChange={(e) => this.onChangeAuthor(e.target.value)}/>
                    </div>
                    <div>
                        <div>
                            <label >Category</label>
                            <div>
                                <div>
                                    <label htmlFor="1">Tours and Travels</label>
                                    <input id="1" type="checkbox" name="Tours and Travels" value="Tours and Travels" onChange={this.onChangeCategory}/>
                                </div>
                                <div>
                                    <label htmlFor="2">Food and Drinks</label>
                                    <input id="2" type="checkbox" name="Food and Drinks" value="Food and Drinks" onChange={this.onChangeCategory}/>
                                </div>
                                <div>
                                    <label htmlFor="3">Science and Technology</label>
                                    <input id="3" type="checkbox" name="Science and Technology" value="Science and Technology" onChange={this.onChangeCategory}/>
                                </div>
                                <div>
                                    <label htmlFor="4">Buisness and Economy</label>
                                    <input id="4" type="checkbox" name="Buisness and Economy" value="Buisness and Economy" onChange={this.onChangeCategory}/>
                                </div>
                                <div>
                                    <label htmlFor="5">Culture</label>
                                    <input id="5" type="checkbox" name="Culture" value="Culture" onChange={this.onChangeCategory}/>
                                </div>
                                <div>
                                    <label htmlFor="6">Health and Fitness</label>
                                    <input id="6" type="checkbox" name="Health and Fitness" value="Health and Fitness" onChange={this.onChangeCategory}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ReactQuill
                        ref={(el) => this.quill = el}
                            value={this.state.article.content}
                            modules= {this.modules}
                            format={this.formats}
                            theme='snow'
                            onChange = {(e) => this.onChangeArticleContent(e)}
                    />
                    <button>
                        Submit
                    </button>
                </form>
            </>
        )
    }
}

export default Post