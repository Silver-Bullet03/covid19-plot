import React from 'react';
import Chart from './components/Charts.js'
import {fetchData} from './API';
import  './App.css'


class App extends React.Component {
    state = {       
    data: {},
    }
    async componentDidMount(){
        const data = await fetchData();
        this.setState({data});
    }

    render(){
        const {data } = this.state;
        return(
        <div>
            <Chart data={data} />
        </div>
    )
}
}

export default App;