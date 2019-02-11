import React from 'react'
// импорт пакета prop-types удален, так как в этом файле prop-types не используется
import { Add } from './components/Add' // ./ = текущая директория,
import { News } from './components/News' // далее мы идем в директорию components и в нужный компонент
import newsData from './data/newsData' // импорт по дефолту
import './App.css'


// далее скопировано из тэга script

class App extends React.Component {
  state = {
    news: newsData,
  };
  handleAddNews = data => {
    const nextNews = [data, ...this.state.news];
    this.setState({ news: nextNews });
  };
  render() {
    return (
      <React.Fragment>
        <Add onAddNews={this.handleAddNews} />
        <h3>Новости</h3>
        <News data={this.state.news} />
      </React.Fragment>
    );
  }
}

// скопировано все кроме ReactDOM.render

// добавился export
export default App;