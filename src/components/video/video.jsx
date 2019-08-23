import React from 'react';

import {connect} from 'react-redux';


const video = ({activeModule, activeLession}) => {
	console.log(activeLession);
  return (
   	<div>
		<strong>Módulo: {activeModule.title}</strong>
		<br />
		<span>Áula: {activeLession.title}</span>
	</div>
  )
}

export default connect(state => ({
	activeLession:state.course.activeLession,
	activeModule:state.course.activeModule
}))(video);