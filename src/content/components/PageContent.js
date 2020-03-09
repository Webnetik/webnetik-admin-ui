import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideBar from "../../side-bar/components/SideBar";

class PageContent extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h1>Page content</h1>
                        <SideBar />
                    </div>
                </div>
            </div>);
    }
}

export default connect(null, {})(PageContent);