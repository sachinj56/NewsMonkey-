import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let { title, description, imageUrl,url,author,date } = this.props;
        return (
            <div>
                <div className="my-3">
                    <div className="card" >
                        <img src={ !imageUrl?"https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDkvYmZhNGM0ZDQtYTc2OC00MmM4LWFjODktNmI3NDU4ZWY2YzFiLmpwZw==.jpg":imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"> <small className="text-muted">By {!author?"Unkonwn":author} on {new Date(date).toGMTString()}</small></p>
                            <a href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
