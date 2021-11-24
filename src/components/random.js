import React, {Component} from 'react';

class RandomStrings extends Component {
    constructor (props) {
        super(props);
        this.state = {
            notes: ''
        };
    }

    componentDidMount () {
        setInterval(() => {
            const m = this.props.array[Math.floor(Math.random() *this.props.array.length)];
            this.setState({ notes: m});
        }, 3000);
    }

    render() {
        return(
            <div>
                <center>
                    <h2 className="note">{this.state.notes}</h2>
                </center>
            </div>
        );
    }
}

export default RandomStrings;