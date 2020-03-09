import React, { Component } from 'react';
import { connect } from 'react-redux';

class ExamplePage extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h1>Example page 2</h1>
                    </div>
                </div>
            </div>);
    }
}

export default connect(null, {})(ExamplePage);