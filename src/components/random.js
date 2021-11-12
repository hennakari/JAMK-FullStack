import React, {Component} from 'react';

class RandomStrings extends Component {
    constructor (props) {
        super(props);
        this.state = {
            sport: ''
        };
    }


    componentDidMount () {
        setInterval(() => {
            const m = this.props.muuttuja[Math.floor(Math.random() *this.props.muuttuja.length)];
            this.setState({ sport: m});
        }, 3000);
    }


    render() {
        return(
            <div>
                <center>
                    <h2 className="ajatus">{this.state.sport}</h2>
                </center>
            </div>
        );
    }
}

export default RandomStrings;