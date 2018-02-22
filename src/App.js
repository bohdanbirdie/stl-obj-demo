import React, {Component} from 'react';
import {OBJViewer, STLViewer} from 'react-stl-obj-viewer';
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            objFile: null,
            objLink: null,
            stlFile: null,
            stlLink: null,
        };
        this._state = {
            objLink: window.location.href + 'bb8.obj',
            stlLink: window.location.href + 'bottle.stl',
        }
    }

    render() {
        return (
            <div className="App">
                <div className="info">
                    <a href="https://github.com/bohdanbirdie/react-stl-obj-viewer">
                        Package <img src={process.env.PUBLIC_URL + "/gh.png"} alt="Github" className="gh-icon"/>
                    </a>
                    <br/>
                    <a href="https://github.com/bohdanbirdie/stl-obj-demo">
                        Example <img src={process.env.PUBLIC_URL + "/source.png"} alt="Github" className="gh-icon"/>
                    </a>
                </div>
                <div className="container" id="div1">
                    <label htmlFor="obj-file">
                        Load OBJ by file
                        <br/>
                        <input type="file"
                               name="obj-file"
                               onChange={(e) => {
                                   console.log(e.target.files)
                                   this.setState({
                                       objFile: e.target.files[0]
                                   })
                               }} placeholder="test"/>
                    </label>

                    {this.state.objFile ?
                        <OBJViewer
                            onSceneRendered={(element) => {
                                console.log(element)
                            }}
                            sceneClassName="test-scene"
                            file={this.state.objFile}
                            className="obj"
                            modelColor="#FF0000"/> : null
                    }
                </div>
                <div className="container" id="div2">
                    <label htmlFor="obj-file">
                        Load STL by file
                        <br/>
                        <input type="file"
                               name="obj-file"
                               onChange={(e) => {
                                   console.log(e.target.files)
                                   this.setState({
                                       stlFile: e.target.files[0]
                                   })
                               }} placeholder="test"/>
                    </label>
                    {this.state.stlFile ?
                        <STLViewer
                            onSceneRendered={(element) => {
                                console.log(element)
                            }}
                            sceneClassName="test-scene"
                            file={this.state.stlFile}
                            className="obj"
                            modelColor="#FF0000"/> : null

                    }
                </div>
                <div className="container" id="div3">
                    <label htmlFor="obj-link">
                        Load OBJ by link
                        <br/>
                        <input type="text"
                               name="obj-link"
                               defaultValue={this._state.objLink}
                               onChange={(e) => {
                                   this._state.objLink = e.target.value;
                               }}/>
                        <input type="button" value="upload URL" onClick={() => {
                            this.setState({
                                objLink: this._state.objLink,
                            })
                        }}/>
                    </label>
                    {this.state.objLink ?
                        <OBJViewer
                            onSceneRendered={(element) => {
                                console.log(element)
                            }}
                            sceneClassName="test-scene"
                            url={this.state.objLink}
                            className="obj"
                            modelColor="#FF0000"/> : null
                    }
                </div>
                <div className="container" id="div4">
                    <label htmlFor="obj-link">
                        Load STL by link
                        <br/>
                        <input type="text"
                               name="obj-link"
                               defaultValue={this._state.stlLink}
                               onChange={(e) => {
                                   this._state.stlLink = e.target.value;
                               }}/>
                        <input type="button" value="upload URL" onClick={() => {
                            this.setState({
                                stlLink: this._state.stlLink,
                            })
                        }}/>
                    </label>
                    {this.state.stlLink ?
                        <STLViewer
                            onSceneRendered={(element) => {
                                console.log(element)
                            }}
                            sceneClassName="test-scene"
                            url={this.state.stlLink}
                            className="obj"
                            modelColor="#FF0000"/> : null
                    }
                </div>
            </div>
        );
    }
}

export default App;
