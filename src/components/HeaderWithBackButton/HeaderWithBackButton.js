import React, { Component } from 'react';
import { LeftOutlined } from '@ant-design/icons';
import './HeaderWithBackButton.css';

const HeaderWithBackButton = props => {
	const { title, handleBackClick } = props;

	return (
		<div className="Header">
			<div className="Header-Back">
				<LeftOutlined onClick={handleBackClick} />
			</div>
			<div className="VocabList-Title">{title}</div>
		</div>
	);
};

export default HeaderWithBackButton;
