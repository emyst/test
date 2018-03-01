import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputForm extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <h1>Hi</h1>
            <input type="text" value={this.props.search} onChange={this.props.change}/>
            <button onClick={()=>this.props.click()}>load</button>
            {this.props.isFetch?<p>Loading...</p>:null}
                <ul>
                    {this.props.filtered.map(el=><li key={el.id}>{el.name} - {el.url} </li>)}
                </ul>
            </div>
    )
    }
}

InputForm.propTypes={
    click : PropTypes.func,
    change: PropTypes.func,
    search: PropTypes.string,
    isFetch: PropTypes.bool

}