import React, { Component } from 'react';
import 'antd/dist/antd.css'; 
import './App.css'


const os = window.require('os');
const {screen, ipcRenderer} = window.require('electron');

class App extends Component {

  constructor(){
    super();
    this.state = {
      apppath:''
    };
    ipcRenderer.on('got-app-path', (event, path) => {
      this.setState({
        apppath:path
      });
    });
  }
  componentDidMount(){

  }

  handleGetAppPath(e){
    console.log(e);
    ipcRenderer.send('get-app-path');
  }



  render() {
    const size = screen.getPrimaryDisplay().size;

    return (
      <div className='App'>
          <div>
            Home Dir: {os.homedir()} <br/>
            Screen is {size.width}px x {size.height}px <br/>
            <button onClick={this.handleGetAppPath.bind(this)}>Get app path</button> <br/>
            <span>App path: {this.state.apppath}</span>
          </div>
    </div>
    );
  }
}

export default App;
