import React from 'react'
import Carousel from '../Carousel/Carousel'
import "./CarouselElement.scss"

class CarouselElement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        console.log("props are ", this.props)
    }

    render() {
        return (
            <div className="CarouselElement__container"
                onClick={()=>{this.props.setSelectedArtist(this.props.artistIndex)}}
                style={{
                    backgroundImage: `url(${this.props.artist.picture_xl})`,
                    height: this.props.isSelected ? "15em" : "10em",
                    width: this.props.isSelected ? "15em" : "10em",
                    marginLeft: `-2em`, zIndex: this.props.isSelected ? "100" : `calc(10 - ${this.props.artistIndex})`
                }}>

            </div>
        )
    }
}

export default CarouselElement