import React, {Component} from 'react';
import axios from 'axios'

class AddUser extends React.Component{
  constructor(){
      super()
      this.state={
          id : '',
          nama : '',
          alamat : '',
      }
  }
  handleChange = (e) =>{
      this.setState({ [e.target.name] : e.target.value })
  }
  handleSubmit = async(e) => {
      e.preventDefault()
      console.log(this.state)
      await axios.post("http://localhost/reactapi/AddUser.php" , this.state)
      this.props.history.push('/user');
  }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label for="id">Id</label>
                        <input type="text" className="form-control" name="id" placeholder="Enter Id Number" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="nama">Nama</label>
                        <input type="text" className="form-control" name="nama" placeholder="Enter Name" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="alamat">Alamat</label>
                        <input type="text" className="form-control" name="alamat" placeholder="Enter Address" onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                    <a type="button" className="btn btn-outline-primary" href="/Home">Back</a>
                </form>

            </div>
        )
    }
}
export default AddUser;
