import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {


  state = {
    flipped: false
  }

  handleClick = () => {
    this.setState({
      flipped: !this.state.flipped
    })
  }


  render() {
    return (
      <Card>
        <div onClick={this.handleClick}>

          <div className="image">
            <img src={this.state.flipped ? this.props.backImage : this.props.image} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
