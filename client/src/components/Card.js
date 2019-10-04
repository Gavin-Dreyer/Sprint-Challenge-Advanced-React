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
            })
            .catch(response => {
                console.log(response)
            })
    }

    componentWillUnmount() {
        axios
            .get(`http://localhost:5000/api/players`)
            .then(response => {
                // console.log(response.data)
                this.setState({
                    cards: response.data
                })
            })
            .catch(response => {
                console.log(response)
            })
    }

    
    searchNameSubmit = (e, value) => {
        e.preventDefault();
        this.setState({
            cards: this.state.cards.filter(item => 
                item.name.toLowerCase().includes(value)
                )
        })
    }

    searchCountrySubmit = (e, value) => {
        e.preventDefault();
        this.setState({
            cards: this.state.cards.filter(item => 
                item.country.toLowerCase().includes(value)
                )
        })
    }


    render(){
        return (
            <>
                <div >
                    <SearchBar searchCountrySubmit={this.searchCountrySubmit} searchNameSubmit={this.searchNameSubmit} data={this.state.cards}/>
                </div>
                <div className="cards" data-testid="playerInfoTest">
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