import React, {Component} from 'react'

import Particles from 'react-particles-js';
 
class Background extends Component{
  
    render(){
        return (
            <Particles
            params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#fff",
            					blur: 5
            				}
            			}
            		} 
              }}
            />
        );
    };
 
}

export default Background;
 