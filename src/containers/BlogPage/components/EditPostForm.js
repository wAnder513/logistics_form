import './EditPostForm.css'
import CancelIcon from '@material-ui/icons/Cancel'
import { Component } from 'react'

export class EditPostForm extends Component {
  state = {
    postTitle: this.props.selectedPost.title,
    postDate: this.props.selectedPost.date,
    postCompanyName: this.props.selectedPost.companyName,
    postFullName: this.props.selectedPost.fullName,
    postPhone: this.props.selectedPost.phone,
    postComments: this.props.selectedPost.comments,
    postATI: this.props.selectedPost.ATI,
    postDesc: this.props.selectedPost.description,
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

  handlePostCompanyChange = (e) => {
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

  handlePostDescChange = (e) => {
    this.setState({
      postDesc: e.target.value,
    })
  }

  savePost = (e) => {
    e.preventDefault()
    const post = {
      id: this.props.selectedPost.id,
      title: this.state.postTitle,
      date: this.state.postDate,
      companyName: this.state.postCompanyName,
      fullName: this.state.postfullName,
      phone: this.state.postPhone,
      comments: this.state.postComments,
      ATI: this.state.postATI,
      description: this.state.postDesc,
    }

    this.props.editBlogPost(post)
    this.props.handleEditFormHide()
  }

  handleEscape = (e) => {
    if (e.key === 'Escape') {
      this.props.handleEditFormHide()
    }
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleEscape)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleEscape)
  }

  render() {
    const handleEditFormHide = this.props.handleEditFormHide
    return (
      <>
        <form className="editPostForm" onSubmit={this.savePost}>
          <button className="hideBtn" onClick={handleEditFormHide}>
            <CancelIcon />
          </button>
          <h2>Редактирование заявки</h2>
          <div>
            <input
              className="editFormInput"
              type="text"
              name="postTitle"
              placeholder="Заголовок поста"
              value={this.state.postTitle}
              onChange={this.handlePostTitleChange}
              required
            />
          </div>
          <div>
            <input
              className="editFormInput"
              type="text"
              name="postTitle"
              placeholder="Дата и время получения заявки"
              value={this.state.postDate}
              onChange={this.handlePostDateChange}
              required
            />
          </div>
          <div>
            <input
              className="editFormInput"
              type="text"
              name="postTitle"
              placeholder="Название фирмы клиента"
              value={this.state.postCompanyName}
              onChange={this.handlePostCompanyChange}
              required
            />
          </div>
          <div>
            <input
              className="editFormInput"
              type="text"
              name="postTitle"
              placeholder="ФИО перевозчика"
              value={this.state.postFullName}
              onChange={this.handlePostFullName}
              required
            />
          </div>
          <div>
            <input
              className="editFormInput"
              type="text"
              name="postTitle"
              placeholder="Телефон перевозчика"
              value={this.state.postPhone}
              onChange={this.handlePostPhone}
              required
            />
          </div>
          <div>
            <textarea
              className="editFormInput"
              name="postDescription"
              placeholder="Комментарии"
              value={this.state.postComments}
              onChange={this.handlePostComments}
              rows={8}
              required
            />
          </div>
          <div>
            <input
              className="editFormInput"
              type="text"
              name="postTitle"
              placeholder="ATI ссылка"
              value={this.state.postATI}
              onChange={this.handlePostATI}
              required
            />
          </div>
          <div>
            <button className="blackBtn" type="submit">
              Сохранить
            </button>
          </div>
        </form>
        <div onClick={handleEditFormHide} className="overlay"></div>
      </>
    )
  }
}
