import React, { Component } from 'react';
import Card from '../Card/Card';
import './Category.css';

class Category extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Category-Container">
				<div className="Category-Title">WORK</div>
				<div className="Category-Content">
					{[1, 2, 3, 4, 5].map(value => {
						return (
							<Card key={value} handleCardClick={this.props.handleCardClick} />
						);
					})}
				</div>
			</div>
		);
	}
}

export default Category;
