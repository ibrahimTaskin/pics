
import react from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class App extends react.Component {

  constructor(){
    super();
    this.state = {
      images:[]
    }
  }

  onSearchSubmit = async (term) => {
    await unsplash.get('https://api.unsplash.com/search/photos',{
      params:{
        query:term
      }
    }).then(res=> this.setState({images:res.data.results}))
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: 10 }}>
        <SearchBar submit={this.onSearchSubmit}/>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
