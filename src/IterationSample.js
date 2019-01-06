import React, { Component } from 'react';

class IterationSample extends Component {
    state = {
        names: ['눈사람', '얼음', '눈', '바람']
        , name: ''
    };

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleInsert = () => {
        this.setState({
            names: this.state.names.concat(this.state.name)
            , name: ''
        });
    }

    handleRemove = (index) => {
        // 편의상 name의 레퍼런스를 미리 만듦
        const { names } = this.state;
        /* 배열을 자르는 내장 함수 slice와
            전개 연산자(...)를 사용하여 index번째 값을 제외한 값들을 배열에 넣어줌
            this.setState({
            names: [
                ...names.slice(0, index)
                , ...names.slice(index + 1, names.length)
            ]
        });
         */
        this.setState({
            // filter로 index번째를 제외한 원소만 있는 새 배열 생성
            names: names.filter((item, i) => i !== index)
        });
    }

    render() {
        const nameList = this.state.names.map(
            (name, index) => (<li 
                                key={index}
                                onDoubleClick={() => this.handleRemove(index)}
                            >
                                {name}
                            </li>)
        );
        return(
            <div>
                <input
                    onChange={this.handleChange}
                    value={this.state.name}
                />
                <button onClick={this.handleInsert}>추가</button>
                <ul>
                    {nameList}
                </ul>
            </div>
        );
    }
}

export default IterationSample;