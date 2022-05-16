import React from 'react';
import {Link} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Typewriter from 'typewriter-effect';
import './Home.css';
import image from "./back-img.ico";


class Home extends React.Component{
  render(){
    return (
    <div>
      <header>
        <title>Bank Application</title>
      </header>
      <body>
        <div className='heroes'>
          <nav>
            <ul>
              <li><Link to="/Components/Amount"><button>Send</button></Link></li>
              <li><Link to="/Components/Amount"><button>History</button></Link></li>
            </ul>
          </nav>
          <img src={image} className="background-img" alt='pic'></img>
          <h1 className='title'>Beast Bank</h1>
          <div className='information'>
            <h2 className='type-writer'>
              <Typewriter options={{
              autoStart: true,
              loop: true,
              delay: 85,
              strings:[
                "Wecome to Beast online Banking System",
                "A place for secure transactions",
                "Thank You for choosing us",
              ]
            }}></Typewriter>
            </h2>
          </div>
        </div>
      </body>
    </div>
  );
  }
}

export default Home;