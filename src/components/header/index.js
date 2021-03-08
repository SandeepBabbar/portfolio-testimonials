import React from 'react'
import classes from './styles.module.css'

class Header extends React.Component{
  render(){
    return(
      <div className={classes.Container}>
          <div className={classes.Avatar}>
              <img src={this.props.image}
                style={{border:this.props.imageBorder?this.props.imageBorder:"none"}}
              />
          </div>
          <div>
              <p className={classes.Name}
                style={{color: this.props.textColor1}}
              >
                {this.props.name}
              </p>
              <p className={classes.Label}
                style={{color: this.props.textColor2}}
              >
                {this.props.label}
              </p>
          </div>
      </div>
    )
  }
}

export default Header;
