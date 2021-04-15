import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './pages/Home/Home';
import Vocab from './pages/Vocab/Vocab';
import Saved from './pages/Saved/Saved'
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import { HomeTwoTone, HeartTwoTone, ContainerTwoTone } from '@ant-design/icons';

// function App() {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload3.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn Chinese Tatertot haha1!
// 				</a>
// 			</header>
// 		</div>
// 	);
// }

class App extends Component {
	constructor() {
		super();
		this.state = {
			currentPage: 'home'
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
					<Menu.Item className="Menu-Item" key="home" icon={<HomeTwoTone />}>
						Home
					</Menu.Item>
					<Menu.Item className="Menu-Item" key="vocab" icon={<ContainerTwoTone />}>
						Vocab
					</Menu.Item>
					<Menu.Item className="Menu-Item" key="saved" icon={<HeartTwoTone twoToneColor="#eb2f96" />}>
						Saved
					</Menu.Item>
				</Menu>
				{this.displayPage()}
			</div>
		);
	}
}

export default App;
