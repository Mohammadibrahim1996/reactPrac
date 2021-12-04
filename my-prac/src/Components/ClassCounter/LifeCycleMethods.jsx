import React, { Component } from 'react'

export default class LifeCycleMethods extends Component {
    constructor(){
        super();
        console.log('this is constructor')
    }
    static getDerivedStateFromProps(){
        console.log('this is getDerivedStateFromProps')
    }
    componentDidMount(){
        console.log('this is compomentDidMount method')
    }
    componentDidUpdate(){
        console.log('this is compomentDidUpdate method')

    }
    shouldComponentUpdate(){
        console.log('this is compomentShouldUpdate method')
        return false;

    }
    getSnapshotBeforeUpdate(){
        console.log('this is getSnapShotbeforeUpdate method')

    }
    render() {
        console.log('this is render method')
        return (
            <div>
                <h1>This is LifeCycleMethods</h1>
                <h2>this is s.</h2>
                
            </div>
        )
    }
}
