import React from 'react';
import MenuItem from '../Menu-Item/Menu-Item'

import { connect } from 'react-redux';
import { selectDirectorySections } from '../../Redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

import './Directory.styles.scss';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {
        sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps}/>
        ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});




export default connect(mapStateToProps)(Directory);