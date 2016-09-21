import React from 'react'

class Home extends React.Component {
  render () {
    let styles={
      contentHome:{
        backgroundImage:'url(http://odowb0dhc.bkt.clouddn.com/21.jpg)',
        backgroundSize:'cover',
        flexGrow:'1',
        color:'#fff',
        textAlign:'center'
      },
      homeBg:{
        width:'100%',
        height:'100vh',
        backgroundColor:'rgba(0,0,0,0.3)'
      },
      inner:{
        paddingTop:'220px'
      },
      h1:{
        margin:'0',
        marginBottom:'20px'
      },
      span:{
        color:"#00BCD4"
      },
      a:{
        display:'block',
        color:'#fff',
        width:'100px',
        height:'36px',
        backgroundColor:'#FF4081',
        textDecoration:'none',
        textAlign:'center',
        lineHeight:'36px',
        margin:'0 auto',
        marginTop:'20px'
      }
    }
    return(
      <div className='content-home' style={styles.contentHome}>
        <div className='home-bg' style={styles.homeBg}>
          <div className='home-inner' style={styles.inner}>
            <h1 style={styles.h1}>HI,I'M <span style={styles.span}>MENGMENG</span></h1>
            <p>WEB DEVELOPER</p>
            <a style={styles.a} className='home-active'>HIRE ME</a>
          </div>
        </div>

      </div>
    )
  }
}

export default Home;