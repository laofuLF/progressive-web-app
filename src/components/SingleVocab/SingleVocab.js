import React, { Component } from 'react';
import './SingleVocab.css';

class SingleVocab extends Component {
	constructor(props) {
		super(props);
	}

	render() {
    const { handleVocabClick } = this.props;

		return (
			<div className="SingleVocab-Container" onClick={handleVocabClick}>
				<div className="SingleVocab-Content">
					<div className="SingleVocab-Chars">管理员</div>
					<div className="SingleVocab-Pinyin">guǎn lǐ yuán</div>
					<div className="SingleVocab-Definition">Librarian</div>
				</div>
			</div>
		);
	}
}

export default SingleVocab;
