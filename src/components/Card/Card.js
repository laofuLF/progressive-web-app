import React, { Component } from 'react';
import { ReadOutlined } from '@ant-design/icons';

import './Card.css';

class Card extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Card-Container" onClick={this.props.handleCardClick}>
				<div className="Card-Title">Library</div>
				<div className="Card-Bottom">
					<div className="Card-Bottom-Icon">
						<ReadOutlined />
					</div>
					<div className="Card-Bottom-Count">35</div>
				</div>
			</div>
		);
	}
}

export default Card;
