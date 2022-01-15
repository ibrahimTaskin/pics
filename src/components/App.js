import react from "react";
import SearchBar from "./SearchBar";

class App extends react.Component {
  onSearchSubmit = (term) => {
    console.log(term);
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: 10 }}>
        <SearchBar submit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;
