class App extends React.Component {

    Competition() {
        const yourElement = ["x", "y", "z"];
        return yourElement [Math.floor(Math.random() * yourElement.length)];

    }
    Competition1() {
        const yourElement = ["x", "y", "z"];
        return yourElement [Math.floor(Math.random() * yourElement.length)];

    }
    Competition2() {
        const yourElement = ["x", "y", "z"];
        return yourElement [Math.floor(Math.random() * yourElement.length)];

    }
 

    render() {
         
        return (
            <div>    
            <Win text=" Gor indi qaqan nagarajax" 
               x={this.Competition()}
               y={this.Competition1()}
               z={this.Competition2()}
            />
            </div>
            
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))