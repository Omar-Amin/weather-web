import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

class RechartGraph extends React.Component {
    constructor() {
        super()

        this.state = {
        }

    }

    componentDidMount() {
        this.setState({
            data: this.props.data
        })
    }

    render() {

        return (
            <div>
                {this.state.data !== undefined ? <LineChart width={600} height={515} data={this.state.data}>
                    <XAxis dataKey="hours" stroke="#d0deff" />
                    <YAxis stroke="#d0deff" />
                    <Line type="monotone" dataKey="temp" stroke="#ffffff" strokeWidth={3} />
                </LineChart> : null}
            </div>

        );
    }

}

export default RechartGraph;
