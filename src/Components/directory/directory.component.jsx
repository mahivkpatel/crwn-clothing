import React from 'react'
import './directory.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selector'
import MenuItem from '../menu-item/menu-item.component'

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map((item, index) => {
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

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})
export default connect(mapStateToProps)(Directory)
