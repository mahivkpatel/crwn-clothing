import React from 'react'
import './directory.styles.scss'
import { sections } from '../../directory.data'
import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      section: sections,
    }
  }

  render() {
    return (
      <div className="directory-menu ">
        {this.state.section.map((item, index) => {
          return (
            <MenuItem
              key={item.id}
              title={item.title}
              size={item.size}
              imageUrl={item.imageUrl}
              linkUrl={item.linkUrl}
            />
          )
        })}
      </div>
    )
  }
}

export default Directory
