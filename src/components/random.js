import React, {Component} from 'react';

class RandomStrings extends Component {
    constructor (props) {
        super(props);
        this.state = {
            miete: ''
        };
    }


    componentDidMount () {
        setInterval(() => {
            const m = this.props.muuttuja[Math.floor(Math.random() *this.props.muuttuja.length)];
            this.setState({ miete: m});
        }, 3000);
    }


    render() {
        return(
            <div>
                <center>
                    <h2 className="ajatus">{this.state.miete}</h2>
                </center>
            </div>
        );
    }
}

export default RandomStrings;