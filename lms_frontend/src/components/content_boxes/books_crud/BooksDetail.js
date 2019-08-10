import React from 'react'
import axios from 'axios'
import BooksDelete from './BooksDelete'

const IsAvailable = (props) => {
    if(props) {
        return <p>Is available: <b>Yes</b></p>
    }
    else {
        return <p>Is available: <b>No</b></p>
    }

}

class BooksDetail extends React.Component {
state = {
    book: []
}
    componentDidMount() {
       //API Url
       const api_url = 'http://localhost:8000/books/'
       const api_format = '/?format=json'
       const pk = this.props.match.params.pk

       axios.get(api_url+pk+api_format)
       .then(res => {
            const book = res.data
            this.setState({ book })
            })
        }


    render() {

    if(this.state.book.length!==0) {
        return(
            <div>
                <h1>{this.state.book.title}</h1>
                <hr/>

                Author: {this.state.book.author}
                <IsAvailable props={this.state.book.borrowed_by} />
                <BooksDelete url={this.state.book.pk} />
            </div>

            )
    }
    else {
        return (
            <>
            That book does not exist
            </>
        )
    }




    }
}




export default BooksDetail;
