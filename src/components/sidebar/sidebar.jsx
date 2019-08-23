import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as CourseActions from '../../store/actions/course';

const sidebar = ({modules, toggleLession}) => {
  return (
    <aside>
		{modules.map((module)=>(
			<div key={module.id}>
				<strong>{module.title}</strong>
				<ul>
					{
						module.lessions.map((lession)=>(
							<li key={lession.id}>
								{lession.title}
								<button onClick={() => toggleLession(module, lession)}>Click</button>
							</li>
						))
					}
				</ul>
			</div>
		))}
	</aside>
  )
}

const mapStateToProps = state =>({
	modules:state.course.modules
});

const mapDispatchToProps = dispatch => (
	bindActionCreators(CourseActions, dispatch)
	// toggleLession: (module, lession) => dispatch(CourseActions.toggleLession(module, lession))
);

export default connect(mapStateToProps, mapDispatchToProps)(sidebar);