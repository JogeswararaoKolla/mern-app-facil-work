import React, { Component } from 'react'
import { Router } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
            }
        }).catch(error => {
            console.log('Logout error')
        })
    }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);

        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="">Facil Work</a>
                { loggedIn ? (
                    <section class="navbar-section">
                    <a href="" class="btn btn-link" onClick={this.logout}>
                    <span class="">Logout</span></a>
                </section>
                ) : (
                    <section class="navbar-section">
                        <a href="/home" class="btn btn-link text-secondary">
                            <span class="text-secondary">Home</span>
                        </a>
                        <a href="/" class="btn btn-link text-secondary">
                            <span class="text-secondary">Login</span>
                        </a>
                        <a href="/sign-up" class="btn btn-link text-secondary">
                            <span class="text-secondary">Sign up</span>
                        </a> 
                    </section>
                )}
            </nav>


        );

    }
}

export default Navbar


