import React from 'react'
import { Button } from '@material-ui/core/Button';


const str = `my name is ${(name) => name}`

// function interpolate(...str){
//   str.map(el => typeof el === "function" ? el("wade") : el).join("")
// }

// console.log(interpolate`my name is ${(name) => name}`)

// interpolate`my name is ${(name) => name}`

const H1 = styled.h1`
  color: red;
  background-color: maroon;
`

const Button = styled.button`
  color: ${({status}) => status === "idle" ? "green" : "red"}
  `

  //its either a container or an item
  //its either horiz or column
  const Flex = styled.div`
    ${({container}) => container ? css`display: flex` : css`display:block`}
    ${({column}) => column ? css`flex-direction: column` : css `flex-direction: row`}
  `

function App() {

    return (
      <div>
          <H1>Styled Header</H1>
          <Button status={"idle"}>Styled Button</Button>
          <Flex container column>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </Flex>
      </div>
    )
}
export default app