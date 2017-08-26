import React, {Component} from 'react'

class BackdropBlur extends Component {

  constructor(props) {

    super(props)

    this.state = {
      hasEngagedBlur: false,
    }

    this.initBlur = this.initBlur.bind(this)
    this.resetBlur = this.resetBlur.bind(this)
  }

  componentDidMount() {

    const isActiveKey = e => e.code === 'ShiftLeft' || e.code === 'ShiftRight'

    document.addEventListener('keydown', e => {
      if (isActiveKey(e)) this.initBlur()
    })

    document.addEventListener('keyup', e => {
      if (isActiveKey(e)) this.resetBlur()
    })

    setInterval(() => {
                                             // random number between 1 -> 360
      this.setState((prevState) => ({degree: Math.floor(Math.random() * 360) + 1}))
    }, 2000)
  }

  render() {
    return (
      <div style={this.style0(this.props, this.state)}>
        <div style={this.style1(this.props, this.state)}>
        </div>
        <div style={this.style2(this.props, this.state)}>
          <div style={{position: 'relative', top: '-0.8rem', fontSize: '2rem', fontWeight: '300 !important', fontFamily: 'Roboto, sans-serif', margin: '0', color: 'black', opacity: 0.8}}>ENTER PASSWORD</div>
          <div style={{display: 'flex', alignItems: 'center', padding: '1.2rem 0', width: '100%', height: '10vh', backgroundColor: 'black', borderRadius: 5, opacity: `${this.state.hasEngagedBlur ? 0.5 : 0.85}`,}}>
            <div style={{margin: '0 2rem', color: '#6d6d6d', fontSize: '1.5rem',}}>
              HOLD <span style={this.style3()}>⇧ SHIFT</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  initBlur() {

    this.setState({hasEngagedBlur: true})
  }

  resetBlur() {

    this.setState({hasEngagedBlur: false})
  }

  style0() {
    return {
      filter: `hue-rotate(${this.state.degree}deg)`,
      transition: 'all 3000ms ease-in',
      overflow: 'hidden',
    }
  }

  style1() {
    return {
      width : '100vw',
      height : '100vh',
      backgroundImage: 'url(bg.jpg)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      filter: `blur(${this.state.hasEngagedBlur ? 20 : 0}px)`,
      transform: 'scale(1.5)',
      transition: 'all 250ms ease-out',
    }
  }

  style2() {
    return {
      position: 'fixed',
      bottom: `${this.state.hasEngagedBlur ? '45%' : 0}`,
      left: `${this.state.hasEngagedBlur ? '10%' : '5%'}`,
      marginBottom: `${this.state.hasEngagedBlur ? '0%' : '10%'}`,
      width: `${this.state.hasEngagedBlur ? '80%' : '90%'}`,
      height: '10%',
      transition: 'all 500ms ease-out'
    }
  }

  style3() {
    return {
      margin: '0 0 0 0.5rem',
      padding: 5,
      borderRadius: 8,
      border: '3px solid #6d6d6d'
    }
  }
}

export default BackdropBlur
