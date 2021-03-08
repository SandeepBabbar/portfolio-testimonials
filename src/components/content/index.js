import React from 'react'
import classes from './styles.module.css'
class Content extends React.Component{
    render(){
        return(
            <div className={classes.Container}>
                <h1 className={classes.Heading}
                    style={{color: this.props.textColor1}}
                >{this.props.heading}</h1>
                <p className={classes.Text}
                    style={{color: this.props.textColor2}}
                >{this.props.children}</p>
            </div>
        )
    }
}

export default Content
