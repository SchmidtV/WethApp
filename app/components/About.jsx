var React = require('react');


var About = (props) =>{
    return(
        <div>
            <h1 className="text-center">About</h1>
            <p>This is a weather application build on react as a tutorial.</p>
            <p>Heare are some tools that I used</p>
            <ol>
                <li>
                    <a href="http://facebook.github.io/react"> React </a>
                </li>
                <li>
                    <a href="http://openweathermap.org">Open weather map</a>
                </li>
            </ol>
        </div>
    );
};

module.exports = About;