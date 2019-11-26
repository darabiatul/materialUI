import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';

class MaterialUI extends Component {
constructor (props){
  super(props);

  this.state = {
    nama:'value'
  }

  this.onSubmit = this.onSubmit.bind(this);
}

handleSubmit() {
this.setState({
  nama:'value'
  });
  }

  onSubmit (event){
    event.preventDefault();
    this.setState({
      nama : 'yuu'
    });
    console.log('ok');
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <Box component="span" display="block">
            <TextField
              type="text" 
              className="form-control" 
              id="standard-with-placeholder" 
              onChange={this.onChangeHandler} 
              name="nama" 
              placeholder="Masukkan Nama" 
              value={this.state.nama}
              margin="normal"
              required />   
              </Box>
          <Box component="span" display="block">
            <Button variant="contained" color="primary" type="submit">
              Ganti Nama
          </Button>
          </Box>
        </form>
        {/* {Nama nama={this.state.nama}/> */}
      </div>
    );
  }
}

export default MaterialUI;