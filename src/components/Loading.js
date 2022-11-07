import React, { Component } from 'react';

class Loading extends Component {
  render() {
    const flex = 'flex flex-col w-full justify-center items-center h-full';
    return (
      <p
        className={ `${flex} 
        font-bold text-3xl z-20 fixed top-0 right-0 bg-gray-500 bg-opacity-80` }
      >
        Carregando...
      </p>
    );
  }
}

export default Loading;
