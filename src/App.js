import React, { Component } from 'react'
import './App.css';
import img from './rana.jpg'

export default class app extends Component {
    state = {
        name: 'Rana',
        profission: 'Guitarest',
        bio: `hello humans, i'm Ranz the 19 yo alien living on Earth`,
        pic: img,
        show: false,
        timer: 0,
    }
    onClickhandler() {
        this.setState({
            show: !this.state.show,
        })
    }
    componentDidMount() {
        this.setState({ timer: 0 })
        setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1000)
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p >It's been {this.state.timer} seconds since the component got mounted</p>
                    <button className='btn' onClick={() => this.onClickhandler()}>show</button>
                    {this.state.show === true ? <div><img src={this.state.pic} alt='rana picture' />
                        <h1>{this.state.name}</h1>
                        <h4>{this.state.profission}</h4>
                        <p>{this.state.bio}</p></div> : <div></div>}
                </header>
            </div>
        )
    }
}