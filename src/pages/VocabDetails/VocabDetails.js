import React, { Component } from 'react';
import HeaderWithBackButton from '../../components/HeaderWithBackButton/HeaderWithBackButton';
import { NotificationOutlined } from '@ant-design/icons';
import { Divider } from 'antd';

import 'antd/dist/antd.css';
import './VocabDetails.css';

class VocabDetails extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { handleBackToList } = this.props;

		return (
			<div>
				<HeaderWithBackButton
					title={'this is the details page'}
					handleBackClick={handleBackToList}
				/>
      
        <div className="VocabDetails-Content">
          <div className="VocabDetails-Summary-Title">
            总结
          </div>
          <Divider />
          <div className="VocabDetails-Chars">
            中文
          </div>
          <div className="VocabDetails-Pinyin">
            zhōng wén
          </div>
          <div className="VocabDetails-Pronounce">
            <NotificationOutlined />
          </div>
          <div className="VocabDetails-Definition">
            Chinese Langauge
          </div>
          <Divider />
        </div>
			</div>
		);
	}
}

export default VocabDetails;
