import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Search from './components/Search'
import NotFound from './components/NotFound'
import { DATA_SET } from './helpers/constants'

class App extends Component {
  state = {
    filteredData: [],
  }
  url = new URLSearchParams(window.location.search)
  searchParam = this.url.get('name')

  componentDidMount() {
    if (this.searchParam) {
      this.setState({ typedValue: this.searchParam }, () => this.handleSearch())
    } else {
      this.setState({ filteredData: DATA_SET })
    }
  }

  handleTextChange = evt => {
    const { value } = evt.target
    this.setState({
      typedValue: value,
      ...!value ? { filteredData: DATA_SET } : {},
    })
  }

  handleSearch = action => {
    const { typedValue } = this.state
    if (typedValue) {
      const filteredData = DATA_SET.filter(item => item.toLowerCase().includes(typedValue.toLowerCase().trim()))
      this.setState({ filteredData })
    }
    action && action()
  }

  render() {

    const {
      filteredData,
      typedValue,
    } = this.state

    return (
      <BrowserRouter >
        <Routes>
          <Route path="/search" element={
            <Search
              onChange={this.handleTextChange}
              onClick={this.handleSearch}
              data={filteredData}
              inputValue={typedValue}
            />
          }
          />
          <Route path="/" element={<Navigate replace to="/search" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
