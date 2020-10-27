import React from 'react'
import axios from 'axios'
import "./Carousel.scss"
import CarouselElement from '../CarouselElement/CarouselElement'

class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            artistsIndex: [1, 2, 3, 4, 5],
            artists: [],
            carouselIndex:0,
        }
        this.setSelectedArtist = this.setSelectedArtist.bind(this)
    }

    componentDidMount() {
        this.state.artistsIndex.map((artist) => {
            axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artist}`).then(res => { 
                this.setState({artists : [...this.state.artists, res.data]}, ()=>{console.log(this.state.artists)}) 
            })
        })
    }

    setSelectedArtist(artistIndex) {
        this.setState({carouselIndex: artistIndex})
    }


    render() {
        return (
            <div className="Carousel__container" style={{marginLeft : `calc(0px - (${this.state.carouselIndex} * 10em))`}}>
                {this.state.artists.map((artist,artistIndex)=>(
                    <CarouselElement setSelectedArtist={this.setSelectedArtist} artist={artist} isSelected={this.state.carouselIndex === artistIndex ? true : false} artistIndex={artistIndex}/>
                ))}
            </div>
        )
    }
}

export default Carousel