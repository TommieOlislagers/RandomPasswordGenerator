import './App.css';
import './Bootstrap.css';
import PasswordGenerator from './Generator/Generator.js';

function App() {

  const GithubUrl = "https://github.com/TommieOlislagers/RandomPasswordGenerator";

  return (
    <div className="App text-white">
      <nav className="container-fluid py-3 w-100 bg-black text-white">
        <div className="container">
          <div className="text-center">
              <a className="navbar-brand text-white" href={GithubUrl}>Github <i className="fa fa-github" aria-hidden="true"></i></a>
          </div>
        </div>
      </nav>
      <header className="mobile-padding">
        <div className="container">
          <div className="row" style={{paddingTop: '100px'}}>
            <div className="col-md-5 pt-4 pb-5">
              <PasswordGenerator/>
            </div>
            <div className="offset-md-1 col-md-3 py-4">
              <h3><i className="fa fa-lock" aria-hidden="true"></i> Secure</h3>
              <p>The password generator is in accordance with this password policy.</p>
              <ul >
                <li>At least 8 characters long</li>
                <li>Uppercase letters</li>
                <li>Lowercase letters</li>
                <li>Numbers</li>
                <li>Special characters</li>
              </ul>
            </div>
            <div className="col-md-3 py-4 pb-5">
              <div className="row">
                <div className="col-md-12">
                  <h3><i className="fa fa-github" aria-hidden="true"></i> Open-source</h3>
                  <p>Made public and drivin by the open-source community. Because of this the project can be improved by people and checked for malicious content. <a href={GithubUrl}>I want to help!</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <footer className="container-fluid py-4 w-100 bg-black text-white">
          <div className="container">
              <div className="text-center">
                  <div className="px-1">© {new Date().getFullYear()} Tommie Olislagers - All rights reserved.</div>
              </div>
          </div>
      </footer>
    </div>
  );
}

export default App;
