import React from 'react'
import Carousel from '../Carousel/Carousel'
import "./CarouselElement.scss"

class CarouselElement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="CarouselElement__globalContainer">
                <div className="CarouselElement__container"
                    onClick={() => { this.props.setSelectedArtist(this.props.artistIndex) }}
                    style={{
                        backgroundImage: `url(${this.props.artist.picture_xl})`,
                    }}>
                </div>
                <div className="CarouselElement__title">{this.props.title}</div>
                <div className="CarouselElement__description">{this.props.description}</div>
            </div>
        )
    }
}

export default CarouselElement