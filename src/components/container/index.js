import React from 'react'
import classes from './styles.module.css'
class Container extends React.Component{
    render(){
        return(
            <div className={classes.Container}
                style={{backgroundColor:this.props.color}}
            >
                {this.props.children(this.props)}
            </div>
        )
    }
}

export default Container
