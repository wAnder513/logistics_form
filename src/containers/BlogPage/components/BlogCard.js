import './BlogCard.css'

import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import EditIcon from '@material-ui/icons/Edit'
import axios from 'axios'
import { ATIurl } from './../../../shared/projectData'
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'

export const BlogCard = ({
  title,
  date,
  companyName,
  fullName,
  phone,
  ATI,
  comments,
  deletePost,
  handleEditFormShow,
  handleSelectPost,
}) => {
  const showEditForm = () => {
    handleSelectPost()
    handleEditFormShow()
  }

  const renderATI = {
    link: `https://ati.su/firms/${ATI}/info`,
  }

  return (
    <div>
      <div className="post">
        <div className="postContent">
          <div className="numberZ">
            <h2>Номер заявки: {title}</h2>
          </div>
          <div className="numberZ">
            <p>
              <span className="formFields">
                Дата и время получения заявки от клиента:{' '}
              </span>
              <span className="formValues">{date}</span>
            </p>
          </div>
          <div className="numberZ">
            <p>
              <span className="formFields">Название фирмы клиента: </span>
              <span className="formValues">{companyName}</span>
            </p>
          </div>
          <div className="numberZ">
            <p>
              <span className="formFields">ФИО перевозчика: </span>
              <span className="formValues">{fullName}</span>
            </p>
          </div>
          <div className="numberZ">
            <p>
              <span className="formFields">
                Контактный телефон перевозчика:
              </span>
              <span className="formValues">{phone}</span>
            </p>
          </div>
          <div className="numberZ">
            <p>
              <span className="formFields">Комментарии: </span>
              <span className="formValues">{comments}</span>
            </p>
          </div>

          <div className="numberZ">
            <p>
              <span className="formFields">ATI код сети перевозчика: </span>
              <span className="formValues">
                <a href={renderATI.link}>{renderATI.link}</a>
              </span>
            </p>
          </div>
        </div>

        <div className="postControl">
          <button className="editBtn" onClick={showEditForm}>
            <EditIcon />
          </button>
          <button className="deleteBtn" onClick={deletePost}>
            <DeleteForeverIcon />
          </button>
        </div>
      </div>
      <hr />
    </div>
  )
}
