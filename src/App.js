import React, { Component } from 'react';
import Header from './components/Header';
import PageBody from './components/PageBody';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <PageBody>
          Lorem ipsum dolor sit amet, nibh vel faucibus non velit luctus cursus, venenatis adipiscing,
          a eget pellentesque rutrum velit purus neque. Quam mauris, luctus pulvinar auctor porta vitae dictumst,
          vel mi, a rutrum donec. Dui sagittis urna mi mauris ante, vel aliquam. Interdum fames odio eros. Metus
          vestibulum praesent.
          Mattis turpis posuere purus mauris accumsan sed, fusce phasellus odio gravida a, massa leo sit, ut varius
          phasellus gravida
          montes pede molestie.
        </PageBody>
        <PageBody>
          Ornare ut fringilla sollicitudin elit proin in, quis lorem. Quidem ut, in pellentesque in interdum, laoreet
          senectus nec at
          wisi faucibus risus. Nulla velit nec arcu justo nulla, elit et sem elit ut fusce, nulla nam nulla ac id et
          arcu, dictum imperdiet
          adipiscing phasellus lobortis aenean, turpis pede faucibus. Eget nisl, aliquam amet massa, leo pulvinar
          cumque, ridiculus id condimentum ac
          suspendisse lorem elit. Dolorem vel praesent eget a, purus nibh, integer tellus. Arcu euismod wisi lectus
          interdum. Pede tellus et quam aenean, et non.
          Quis amet dignissim euismod amet, odio ante ultricies lorem platea blandit, in suscipit, adipiscing etiam.
          Lorem aliquet ut ac ipsum sollicitudin
          lectus. Sit laoreet diam duis dictum nostra, neque tellus dolor, fusce mauris consectetuer vel dolor mauris.
        </PageBody>
        <Footer/>
      </div>
    );
  }
}

export default App;
