import React, { Component } from 'react';
import HeaderWithBackButton from '../../components/HeaderWithBackButton/HeaderWithBackButton';
import SingleVocab from '../../components/SingleVocab/SingleVocab';
import './VocabList.css';

class VocabList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleBackToCategory, handleVocabClick } = this.props;

    return (
      <div className="VocabList-Container">
        <HeaderWithBackButton title={"this is the vocab list page"} handleBackClick={handleBackToCategory}/>
        <div className="VocabList-Content">
          {[1, 2, 3, 4, 5].map(value => <SingleVocab handleVocabClick={handleVocabClick}/>)}
        </div>
      </div>
    )
  }
}

export default VocabList;