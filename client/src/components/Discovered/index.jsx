import React from "react";

const Discovered = ({ books }) => {

    return (
        <>
            <div className="jumbotron">
                <ul>
                    {
                    (books.length === 0) ? "No books searched!" :
                    books.map(book =>
                        <div key={book.id} className="card">
                            <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{book.volumeInfo.title} by: {book.volumeInfo.authors[0]}</h5>
                                <p className="card-text"></p>
                                <a href="" className="btn btn-primary"></a>
                            </div>
                        </div>)}
                </ul>
            </div>
        </>
    )
}

export default Discovered;