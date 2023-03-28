import React, { Component, useState, useEffect } from 'react'
import Navbar from "../components/navbar";
import {getBlogs} from "../services/api"

export class index extends Component {

constructor(props:any) {
    super(props);
    this.state = {
        id:[],
        title:[],
        content:[],
        author:[],
        slug:[],
        createAt:[],
        updateAt:[]
    };
}

useEffect = () => {
    getBlogs()
}
  render() {
    return (
        <>
        <Navbar/>
        <div>
            <pre>{}</pre>
        </div>
        </>
    )
  }
}

export default index