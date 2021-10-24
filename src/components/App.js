import React from 'react';
import BookList from './BookList';
import BookContextProvider from '../context/BookContext';
import ThemeContextProvider from '../context/ThemeContext';


class App extends React.Component {

    

    render () {

        return (
       
          <ThemeContextProvider>
            <BookContextProvider>
                <BookList/>
            </BookContextProvider>
          </ThemeContextProvider>
      
        )
    }
}

export default App;