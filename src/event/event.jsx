import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama: '',
            alamat: '',
            hobi: '',
            umur: null
        }
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        let umur = this.state.umur;
        if (!Number(umur)) {
            alert("silahkan isi usia anda terlebih dahulu");
        }
    }

    onChangeHandler = (event) => {
        let nama = event.target.name;
        let alamat = event.target.alamat;
        let hobi = event.target.hobi;
        let val = event.target.value;
        this.setState({
            [nama]: val,
            [alamat]: val,
            [hobi]: ''
        });
    }

    render() {
        return (
            <div className="wraperform">
                <form onSubmit={this.onSubmitHandler}>
                    <div className="form-group">
                        <h1>Halo Saya, {this.state.nama}</h1>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.onChangeHandler} name="nama" placeholder="masukan nama anda" required />
                    </div>
                    <div className="form-group">
                        <h1>Hobi saya {this.state.hobi}</h1>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.onChangeHandler} name="hobi" placeholder="masukan hobi anda" required />
                    </div>
                    <div className="form-group">
                        <h1>Umur saya {this.state.umur}</h1>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.onChangeHandler} name="umur" placeholder="masukan usia anda" required />
                    </div>
                    <div className="form-group">
                        <h1>Saya Tinggal di  {this.state.alamat}</h1>
                        <textarea type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.onChangeHandler} name="alamat" placeholder="masukan alamat lengkap" required ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.updateState} value="simpan data">Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;


