import React, {Component} from "react";
import { connect } from "react-redux";
import { compose } from 'redux'

import $ from "jquery";

import { createPlayer } from '../store/actions/playerActions';

const initialState = {
  innerText: '',
  players: [
  ]
};

class PlayerDefinitionsHtmlCrawler extends Component {
    state = initialState;

    handleFileSelect = (evt) => {
      evt.preventDefault();
      var file = evt.target.files[0];
      var reader = new FileReader();
  
      reader.onload = (e) => {
        this.setState({
          innerText: e.target.result
        });
  
        var tbody = $('<div/>').append(this.state.innerText).find('tbody').get();
        var rows = tbody[0].rows;
  
        let playersArr = [];
  
        for (var i = 0; i < rows.length; i++) {
          if ( this.hasNumbers(rows[i].cells[0].innerHTML)) {
            let player = { name: String, club: String, value: Number, position: String };
            // var a = rows[i].cells[0].innerText;
            player.name = this.extractPlayerName(rows[i].cells[0].children[0].text);
            player.club = rows[i].cells[1].innerText.trim();
            player.value = this.extractNumber(rows[i].cells[2].innerText);
            player.position = this.extractPosition(rows[i].cells[3].innerText);
            playersArr = playersArr.concat(player);
          }
        };
    
        this.addItem(playersArr);
        alert('Ready!:-');
  
      };
  
      // Read in the HTML file.
      reader.readAsText(file);
    };
  
    addItem = playersArr => {
      this.setState({
        players: [
          ...this.state.players,
          playersArr 
        ]
      })
    }
  
    resetState = () => {
      this.setState(initialState);
    }
  
    extractPlayerName = (value) => {
      var newValue = value.trim();
      var fields = newValue.split('.');
      return fields[1];
    }

    extractPosition = (value) => {
      var newValue = value.trim();
      var fields = newValue.split('-');
      return fields[0];
    }

    extractNumber = (value) => {
      // return value.replace( /^\D+/g, '');
      var matches = value.match(/(\d+)/);
      return matches[0];
    }
    
    hasNumbers = (t) => {
      return /\d/.test(t);
    }
  
    render() {
      return (
        <div>
          Select a Player Definitions file : <input type="file" onChange={(e) => this.handleFileSelect(e)} /><br /><br />
        </div>
      )
    }
  
  }

const mapStateToProps = state => {
  return {
    teams: state.firestore.ordered.teams,
    positions: state.firestore.ordered.positions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPlayer: player => dispatch(createPlayer(player))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(PlayerDefinitionsHtmlCrawler);
