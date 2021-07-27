import React from 'react'
import './Navbar.css'
import {Button} from 'react-bootstrap'
import Login from '../Modal/Login'
import Chart from '../Chart/Chart'
import Register from '../Modal/Register'
export default class Navbar extends React.Component{
    userData;
    constructor(props){
        super(props)
        this.handleModal = this.handleModal.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.handleRegister = this.handleRegister.bind(this)

        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onChangeGender = this.onChangeGender.bind(this)
        this.onChangeBirthdate = this.onChangeBirthdate.bind(this)
        this.onChangeCity = this.onChangeCity.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state  = {
            show : false,
            showRegister: false,
            isLoggedIn : false,
            username: "",
            password:"",
            gender: "",
            birthdate: "",
            city:"",
            daftar: null
        }
    }

    handleModal(){
        this.setState({
            show: !this.state.show,
            showRegister: false
        })
    }
    onChangeUsername(e){
        this.setState({ username: e.target.value})
    }
    onChangePassword(e){
        this.setState({ password: e.target.value})
    }
    onChangeBirthdate(e){
        this.setState({ birthdate: e.target.value})
    }
    onChangeGender(e){
        this.setState({ gender: e.target.value})
    }
    onChangeCity(e){
        this.setState({ city: e.target.value})
    }
    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }
   
    onSubmit(e){
        this.userData = JSON.parse(localStorage.getItem('user'))
        let daftar = {
            username: this.userData.username,
            password:this.userData.password,
            gender: this.userData.gender,
            birthdate: this.userData.birthdate,
            city: this.userData.city,
        }
        console.log(daftar)
        e.preventDefault()
        this.setState({
            showRegister: false
        })
    }
    componentDidMount(){
        this.userData = JSON.parse(localStorage.getItem('user'))
        if(localStorage.getItem('user')){
            this.setState({
                username: this.userData.username,
                password:this.userData.password,
                gender: this.userData.gender,
                birthdate: this.userData.birthdate,
                city: this.userData.city,
            })
        }
        else {
            this.setState({
                username: "",
                password:"",
                gender: "",
                birthdate: "",
                city:"",
            })
        }
    }
    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('user', JSON.stringify(nextState))
    }

    
    handleLogin(){
        let {username, password, daftar} = this.state;
        this.userData = JSON.parse(localStorage.getItem('user'))
        console.log(daftar)
        if(this.userData.username === username && this.userData.password === password)
        {
            this.setState({
                show:false,
                isLoggedIn : true,
            })
        }
        else {
            alert("can't login")
        }
    }

    handleLogout(){
        this.setState({
            isLoggedIn: false
        })
    }

    handleRegister(){
        this.setState({
            showRegister: !this.state.showRegister,
            show: false,
            isLoggedIn: false
        })
    }

    render(){
        let {gender, city, birthdate} = this.state;
        return (
            <>
            <div className="navbar" >
                <div className="navbar-container container">
                    <ul className="nav-menu">
                    <li className="nav-btn">
                        {
                            this.state.isLoggedIn === false? <Button className="btn-outline" onClick={this.handleRegister}>
                            Register
                        </Button> :
                        ""
                        }
                        
                    </li>  
                    <li>
                        {this.state.isLoggedIn === false? <Button onClick={this.handleModal}>Login</Button> 
                            : <Button onClick={this.handleLogout}>Logout</Button>
                        }
                    </li>          
                    </ul>
                </div>
            </div>
            <div>
                <Login show={this.state.show}  
                    handleChange={this.handleChange} 
                    handleLogin={this.handleLogin}
                    handleModal={this.handleModal}
                />
            </div>
            <Register showRegister={this.state.showRegister} 
                    onSubmit={this.onSubmit}
                    username={this.state.username}
                    password={this.state.password}
                    gender={gender}
                    birthdate={birthdate}
                    city={city}
                    onChangeUsername={this.onChangeUsername}
                    onChangePassword={this.onChangePassword}
                    onChangeCity = {this.onChangeCity}
                    onChangeGender = { this.onChangeGender}
                    onChangeBirthdate = {this.onChangeBirthdate}
                />
            <div>
            <Chart isLoggedIn={this.state.isLoggedIn}/>
            </div>
            </>
        )
    }
  
}