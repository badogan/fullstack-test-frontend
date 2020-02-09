import React from 'react'

class SizeCollectorRadio extends React.Component {
    render(){
        return(
            <React.Fragment>
            <input type="radio" 
            checked= { (this.props.selectedSizeId===this.props.size.sizeid) ? true : false } 
            value={this.props.size.sizeid}
            onChange={this.props.handleSizeId}/>
            <label> {this.props.size.sizename} </label>
            </React.Fragment>
        )
    }
}

export default SizeCollectorRadio;