import React from 'react';
import Navbar from '../Components/Navbar';
import header from '../Images/badge-header.svg';
import "./Styles/BadgeNew.css";
import Badge from '../Components/Badge';
import BadgeForm from '../Components/BadgeForm';
class BadgeNew extends React.Component{

    render(){
        return(
            <div>
                <Navbar />
                <div className= "BadgeNew__hero">
                    <img className= "img-fluid" src={header} alt="Logo"/>
                </div>
                <div className= "container">
                    <div className= "row">
                        <div className= "col-6">
                            <Badge 
                            firstName="Alejandra" 
                            lastName="Lopez" 
                            twitter="AlejaLopez" 
                            jobTitle="QA Engineer"
                            avatarUrl="https://www.megaidea.net/wp-content/uploads/2020/10/Baby-Yoda-Clipart.png"/>
                        </div>
                        <div className= "col-6">
                            <BadgeForm/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BadgeNew;