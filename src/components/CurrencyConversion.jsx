import React, {Component} from "react";

export default class CurrencyConversion extends Component {

    render() {
        
        return (
            <div>
                <form>
                    <input type="number"></input>
                    <select>
                        <option>USD</option>
                    </select>
                </form>
    
                <form>
                    <input type="number"></input>
                    <select>
                        <option>USD</option>
                    </select>
                </form>
            </div>
        )
    }
}