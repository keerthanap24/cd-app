import logo from './logo.svg';
import './App.css';
/**import Login from './elements/login.js';
import Logout from './elements/logout';**/
import LoginHooks from './elements/loginhooks';
import LogoutHooks from './elements/logouthooks';

function App() {
  return (
    <>
    <div className="App">
      <head>
    <title>CAPITOL DISOVERY</title>
    <link href="App.css" rel="stylesheet" type="text/css"/>
    <meta http-equiv="Refresh" content="0; url= https://capitol-discovery-web-app.kynjonez.repl.co "/> 
  </head>
  <body>
    <nav>
      <img src="index-photos/logohead.PNG" alt="logo"/>
        
    </nav>
    <header class="header">
      <img src="index-photos/head.png" alt="title background"/>
      <h1>Capitol Discovery</h1>
    </header>
    <div class="content"/>
      <div class="info-grid">
        <div class="box1">
          <img src="index-photos/binnoculars.png" alt="binnoculars"/>
          <p>With "PLAYER MODE" Users will complete challenges that appear on a dashboard for points and will placed on a leaderboard
.</p>

        <div class="box3">
          <h3>What's the big deal?</h3>
          <p>African Americans and Black culture have been a significant part of Washington, D.C.’s civic life since the city was first declared the new national capital in 1971! Learn more about Black structures & culture in DC through a web scavenger hunt with Capitol Discovery!
.</p>
        </div>
      </div>
      <p class="quote">Capitol Discovery,  caters to native residents, newcomers, and tourists that live in or visit Washington, D.C. You will have the chance to learn more about the historic environment and atmosphere surrounding you in the United State's Capitol relating to Black culture!  Play to learn more about monumental Black historic landmarks, buildings, artwork, Black owned businesses, and much more in the form of a scavenger hunt!</p>
      <div class="img-grid">
        <div class="box4">
          <h3>ABOUT CAPITOL DISCOVERY</h3>
          <p>Capitol Discovery,  caters to native residents, newcomers, and tourists that live in or visit Washington, D.C. You will have the chance to learn more about the historic environment and atmosphere surrounding you in the United State's Capitol relating to Black culture!  Play to learn more about monumental Black historic landmarks, buildings, artwork, Black owned businesses, and much more in the form of a scavenger hunt! 
. </p>
        </div>
        <img src="index-photos/african american museum.webp" alt="meseum" class="box5"/>
      </div>
    </div>
    <footer class="bottom-footer">
      <p>Capitol Discovery 2021</p>
    </footer>
    <script>
      function PlayerMode() {console.log("Hey Player")};
  
    
</script>
  </body>
    </div>
</>
  );
}

export default App;
