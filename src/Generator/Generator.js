import './Generator.css';
import React from 'react';


class PasswordGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            length: 16,
            includeSpecialCharacters: true
        };

        this.Generate = this.Generate.bind(this);
        this.getRandomInt = this.getRandomInt.bind(this);
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    Generate(PasswordLength, IncludeSpecialCharacters)
    {
        const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "123456789";
        const specialCharacters = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
        let password = "";

        for(let i = 0; i < PasswordLength; i++)
        {
            let randomCharacter = IncludeSpecialCharacters === true ? this.getRandomInt(3) : this.getRandomInt(2);

            password += randomCharacter === 0 ? alphabet[this.getRandomInt(alphabet.length)] : 
            randomCharacter === 1 ? numbers[this.getRandomInt(numbers.length)] : 
            randomCharacter === 2 ? specialCharacters[this.getRandomInt(specialCharacters.length)] : "";
        }

        return password;
    }
    
    componentDidMount() {
        window.addEventListener("load", () => this.setState({ password: this.Generate(this.state.length, this.state.includeSpecialCharacters) }));
    }
    
    componentWillUnmount() { 
        window.removeEventListener("load", () => this.setState({ password: this.Generate(this.state.length, this.state.includeSpecialCharacters) }));  
    }

    checkboxChanged = () => {
        this.setState({
            includeSpecialCharacters: !this.state.includeSpecialCharacters,
        });
    }

    render() {
        return(
            <div className="generator">
                <h4 className="text-white" style={{paddingBottom: '8px' }}>Generate your password now!</h4>
                <p className="text-white">Password Length: <select onChange={(event) => this.setState({length: event.target.value})} value={this.state.length} className="password-length-generator">
                        {Array.from({length: 21}, (item, index) => index !== 0 ? <option key={index}>{index}</option> : '')}
                    </select>
                </p>
                <p className="text-white">Include special characters
                <input type="checkbox" defaultChecked={this.state.includeSpecialCharacters} onChange={this.checkboxChanged} className="checkbox-special-characters-generator"></input></p>
                <button className="button-generator" onClick={() => this.setState({ password: this.Generate(this.state.length, this.state.includeSpecialCharacters) })}>Generate</button>
                <hr/>
                <pre className="password-generator text-white" ><span className="unselectable">Password: </span><span className="password-span-generator">{this.state.password}</span> <i onClick={() => {navigator.clipboard.writeText(this.state.password)}} className="fa fa-clipboard clipboard-generator" aria-hidden="true"></i></pre>
            </div>
        )
    }
}

export default PasswordGenerator;