import React from 'react'
import axios from 'axios'
import "./Carousel.scss"
import CarouselElement from '../CarouselElement/CarouselElement'

class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            artistsIndex: [1, 2, 3, 4, 5, 6,7,8,9,10,16,17,18,19,21],
            artists: [],
            carouselIndex: 0,
            page:0,
        }
        this.setSelectedArtist = this.setSelectedArtist.bind(this)
        this.removePage = this.removePage.bind(this)
        this.addPage = this.addPage.bind(this)
    }

    componentDidMount() {
        this.state.artistsIndex.map((artist) => {
            axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artist}`).then(res => {
                this.setState({ artists: [...this.state.artists, res.data] })
            })
        })
    }

    setSelectedArtist(artistIndex) {
        this.setState({ carouselIndex: artistIndex })
    }

    addPage() {
        //if this.state.page === maximum number of pages based on artists length, do nothing
        if(this.state.page === (Math.ceil(this.state.artists.length / 5) - 1)){
            return
        } else {
            this.setState({page : this.state.page + 1})
        }
    }

    removePage() {
        if(this.state.page === 0) {
           return 
        } else {
            this.setState({page : this.state.page - 1})
        }
    }


    render() {
        return (
            <div className="Carousel__globalContainer">
                <div className="Carousel__navContainer">
                    <span className="Carousel__carouselTitle">Popular</span>
                    <div className="Carousel__nav">
                        <div className="Carousel__leftnav" style={{border: this.state.page === 0 ? "1px solid white" : "1px solid black"}} onClick={()=>{this.removePage()}}>{"<"}</div>
                        <div className="Carousel__rightnav" style={{border: this.state.page !== Math.ceil(this.state.artists.length / 5) - 1 ? "1px solid black" : "1px solid white" }} onClick={()=>{this.addPage()}}>{">"}</div>
                    </div>
                </div>
                <div className="Carousel__cardsContainer" >
                    {/* to change number of displayed cards, change the second 5 */}
                    {this.state.artists.slice((0 + 5 * this.state.page),(5 + 5 * this.state.page)).map((artist, artistIndex) => (
                        <CarouselElement setSelectedArtist={this.setSelectedArtist} artist={artist} isSelected={this.state.carouselIndex === artistIndex ? true : false} artistIndex={artistIndex} title={artist.name} description={artist.type}/>
                    ))}
                </div>
            </div>

        )
    }
}

export default Carousel