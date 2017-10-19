import React, { Component } from 'react';

export default class AppLayout extends Component {
	render(){
		return (
			<div>
				<h1 style={{ textAlign: 'center'}}>VR Panaroma</h1>
				{this.props.children}
            </div>
		);
	}
}