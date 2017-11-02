var React = require('react');
var {Link} = require("react-router");
var Examples = (props) =>{
    return(
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are few examples of locations to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=Berlin">Berlin, Ger</Link>
                </li>
                <li>
                    <Link to="/?location=Tenerif">Tenerif, Sp</Link>
                </li>
            </ol>
        </div>
    );
};
module.exports = Examples;