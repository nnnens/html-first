import { Link } from 'react-router'
import classnames from 'classnames'
import sidebar from './sidebar.module.css'

export const Sidebar = () => {
  return (
    <div className={classnames(sidebar['sidebar-menu'])}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="nens">Nens</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="qwerty/ass">qwerty</Link>
        </li>
      </ul>
    </div>
  )
}
