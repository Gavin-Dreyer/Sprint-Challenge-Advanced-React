import React, { Component } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar';

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
                // console.log(response.data)
                this.setState({
                    cards: response.data
                })
                console.log(this.state.cards)
            })
            .catch(response => {
                console.log(response)
            })
    }

    
    searchSubmit = (e, value) => {
        e.preventDefault();
        this.setState({
            cards: this.state.cards.filter(item => 
                item.name.toLowerCase().includes(value)
                )
        })
    }


    render(){
        return (
            <>
                <div >
                    <SearchBar searchSubmit={this.searchSubmit} data={this.state.cards}/>
                </div>
                <div className="cards">
                    {this.state.cards.map(item => 
                        <div key={item.id} className='playerInfo'>
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
            </>
        )
    }
}

export default Card