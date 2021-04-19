import React, { Component } from 'react';
import Category from '../../components/Category/Category';
import VocabList from '../VocabList/VocabList';
import VocabDetails from '../VocabDetails/VocabDetails';

import './Vocab.css';

class Vocab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current: 'vocab'
		};
	}

	componentWillUnmount() {
		console.log('unmouting');
	}

	handleCardClick = e => {
		console.log('clicking card');
		this.setState({
			current: 'vocabList'
		});
	};

	handleBackToCategory = e => {
		this.setState({
			current: 'vocab'
		});
	};

	handleVocabClick = e => {
		this.setState({
			current: 'vocabDetails'
		});
	};

	handleBackToList = e => {
		this.setState({
			current: 'vocabList'
		});
	};

	displayContent = () => {
		const { current } = this.state;
		if (current === 'vocab') {
			return (
				<div>
					{[1, 2, 3, 4, 5].map(value => (
						<Category key={value} handleCardClick={this.handleCardClick} />
					))}
				</div>
			);
		} else if (current === 'vocabList') {
			return (
				<VocabList
					handleBackToCategory={this.handleBackToCategory}
					handleVocabClick={this.handleVocabClick}
				/>
			);
		} else if (current === 'vocabDetails') {
			return <VocabDetails handleBackToList={this.handleBackToList}/>;
		}
	};

	render() {
		return (
			<div className="VocabPage">
				{this.displayContent()}
				<div className="VocabPage-Footer"></div>
			</div>
		);
	}
}

export default Vocab;
