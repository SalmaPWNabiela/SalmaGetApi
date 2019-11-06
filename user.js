import React from 'react'
import axios from 'axios'
import CardUser from './CardUser'

class User extends React.Component {
    constructor(){
        super()
        this.state = {
            user : []
        }
    }

    async componentDidMount(){
        await axios.get("http://localhost/reactapi/user.php")
        .then(response=>this.setState({
            user: response.data
        }))
        console.log(this.state)
    }

    render(){
        const renderData = this.state.user.map(user=>{
        return(
            <CardUser user={user} key={user.id}/>
        )
        })
        return(
            <div class="container">
                <table class="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nama</th>
                            <th>Alamat</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderData}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default User;