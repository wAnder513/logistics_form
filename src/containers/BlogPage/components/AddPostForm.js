import './AddPostForm.css'
import React from 'react'
import CancelIcon from '@material-ui/icons/Cancel'
import { Component } from 'react'

export class AddPostForm extends Component {
  state = {
    postTitle: '',
    postDate: '',
    postCompanyName: '',
    postFullName: '',
    postPhone: '',
    postComments: '',
    postATI: '',
  }

  handlePostTitleChange = (e) => {
    this.setState({
      postTitle: e.target.value,
    })
  }

  handlePostDateChange = (e) => {
    this.setState({
      postDate: e.target.value,
    })
  }

  handlePostCompanyName = (e) => {
    this.setState({
      postCompanyName: e.target.value,
    })
  }

  handlePostFullName = (e) => {
    this.setState({
      postFullName: e.target.value,
    })
  }

  handlePostPhone = (e) => {
    this.setState({
      postPhone: e.target.value,
    })
  }

  handlePostComments = (e) => {
    this.setState({
      postComments: e.target.value,
    })
  }

  handlePostATI = (e) => {
    this.setState({
      postATI: e.target.value,
    })
  }

  createPost = (e) => {
    e.preventDefault()
    const post = {
      title: this.state.postTitle,
      date: this.state.postDate,
      companyName: this.state.postCompanyName,
      fullName: this.state.postFullName,
      phone: this.state.postPhone,
      comments: this.state.postComments,
      ATI: this.state.postATI,
      description: this.state.description,
    }

    this.props.addNewBlogPost(post)
    this.props.handleAddFormHide()
  }

  handleEscape = (e) => {
    if (e.key === 'Escape') {
      this.props.handleAddFormHide()
    }
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleEscape)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleEscape)
  }

  render() {
    const handleAddFormHide = this.props.handleAddFormHide
    return (
      <>
        <form className="addPostForm" onSubmit={this.createPost}>
          <button className="hideBtn" onClick={handleAddFormHide}>
            <CancelIcon />
          </button>
          <h2>Создание заявки</h2>
          <div>
            <input
              className="addFormInput"
              type="text"
              name="postTitle"
              placeholder="№ заявки"
              value={this.state.postTitle}
              onChange={this.handlePostTitleChange}
            />
          </div>

          <div>
            <input
              className="addFormInput"
              type="text"
              name="postTitle"
              placeholder="Дата и время получения заявки"
              value={this.state.postDate}
              onChange={this.handlePostDateChange}
            />
          </div>
          <div>
            <input
              className="addFormInput"
              type="text"
              name="postTitle"
              placeholder="Название фирмы клиента"
              value={this.state.postCompanyName}
              onChange={this.handlePostCompanyName}
            />
          </div>
          <div>
            <input
              className="addFormInput"
              type="text"
              name="postTitle"
              placeholder="ФИО перевозчика"
              value={this.state.postFullName}
              onChange={this.handlePostFullName}
            />
          </div>
          <div>
            <input
              className="addFormInput"
              type="text"
              name="postTitle"
              placeholder="Телефон перевозчика"
              value={this.state.postPhone}
              onChange={this.handlePostPhone}
            />
          </div>
          <div>
            <textarea
              className="addFormInput"
              name="postDescription"
              placeholder="Коментарии"
              value={this.state.postComments}
              onChange={this.handlePostComments}
              rows={4}
            />
          </div>
          <div>
            <input
              className="addFormInput"
              type="text"
              name="postTitle"
              placeholder="ATI код"
              value={this.state.postATI}
              onChange={this.handlePostATI}
            />
          </div>
          <div>
            <button className="blackBtn" type="submit">
              Добавить
            </button>
          </div>
        </form>
        <div onClick={handleAddFormHide} className="overlay"></div>
      </>
    )
  }
}
