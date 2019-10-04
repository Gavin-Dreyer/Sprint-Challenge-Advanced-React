import React, { Component } from 'react'
import axios from 'axios'

class Card extends Component {
    constructor() {
        super()
        this.state = {
            cards: []
        }
    }

    componentDidMount(){
        axios
            .get(`http://localhost:5000/api/players`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    cards: response.data
                })
            })
            .catch(response => {
                console.log(response)
            })
    }

    render(){
        return (
            <div className="cards">
                {this.state.cards.map(item => 
                    <div className='playerInfo'>
                        <p>
                            {item.name}
                        </p>
                        <p>
                            {item.country}
                        </p>
                        <p>
                            {item.searches}
                        </p>
                    </div>
                )}
            </div>
        )
    }
}

export default Card