import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'redux'

class Dropdown extends Component {

    static defaultProps = {
        list: []
      };
      
      constructor(props) {
        super(props);    
        this.state = {
          isOpen: false,
          nameItem: null,
          typeDropdown: null
        };
      }
    
      componentWillMount() {
        const { name } = this.props.list[0];
        let firstItem = null;    
        if (typeof name != 'undefined') {
          this.checkType(false);
          firstItem = name;
        } else {
          this.checkType(true);
          firstItem = this.props.list[0];
        }        
        this.setState({
            nameItem: firstItem
        });    
      }
      checkType = (id) => {
        this.setState({
            typeDropdown: id
        });    
      };
      showDropdown = () => {
        this.setState({ isOpen: true });
        document.addEventListener("click", this.hideDropdown);
      };
      hideDropdown = () => {
        this.setState({ isOpen: false });
        document.removeEventListener("click", this.hideDropdown);
      };
      chooseItem = (id) => {    
        if (this.state.nameItem !== id) {
          this.setState({
            nameItem: id      
          })
        }    
      };
      
      renderDataDropDown = (item, index) => {    
        const {id, name} = this.state.typeDropdown ? {id: index, name: item} : item;    
        return (
          <li
            key={index}
            value={id}
            onClick={() => this.chooseItem(name)}
          >
            <a>{name}</a>
          </li> 
        )
      };
      render () {
        const { list } = this.props;    
        return (
          <div className={`dropdown ${this.state.isOpen ? 'open' : ''}`}>
            <button className="dropdown-toggle" type="button" onClick={this.showDropdown}>
              {this.state.nameItem}
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              {list.map(this.renderDataDropDown)}
            </ul>
        </div>
        )
      }
    }
    
const mapStateToProps = (state) => {
  return {
  }
}

export default compose(
  connect(mapStateToProps)
)(Dropdown)