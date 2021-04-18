import React, { Component } from 'react';
import Home from './pages/Home/Home';
import Vocab from './pages/Vocab/Vocab';
import Saved from './pages/Saved/Saved'
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import { HomeTwoTone, HeartTwoTone, ContainerTwoTone } from '@ant-design/icons';


class App extends Component {
	constructor() {
		super();
		this.state = {
			currentPage: 'vocab'
		};
	}

	handleMenuClick = e => {
		this.setState({
			currentPage: e.key
		});
	};

	displayPage = () => {
		const { currentPage } = this.state;

		if (currentPage === 'home') {
			return <Home />;
		} else if (currentPage === 'vocab') {
			return <Vocab />;
		} else {
			return <Saved />;
		}
	}

	isSelected = (item) => {
		return item === this.state.currentPage
	}

	render() {
		const { currentPage } = this.state;

		return (
			<div>
				<Menu
					className="Menu"
					onClick={this.handleMenuClick}
					selectedKeys={[currentPage]}
					mode="horizontal"
				>
					<Menu.Item className="Menu-Item" key="home" icon={<HomeTwoTone twoToneColor="#eb2f96" />}>
						主页
					</Menu.Item>
					<Menu.Item className="Menu-Item" key="vocab" icon={<ContainerTwoTone twoToneColor="#eb2f96" />}>
						单词
					</Menu.Item>
					<Menu.Item className="Menu-Item" key="saved" icon={<HeartTwoTone twoToneColor="#eb2f96" />}>
						收藏
					</Menu.Item>
				</Menu>
				{this.displayPage()}
			</div>
		);
	}
}

export default App;
