import React from 'react'
import up from '../../../assets/images/up.png'
import down from '../../../assets/images/down.png'

import { ArrowsComponent,Img } from './Arrows.styled'

function Arrows({sortUsers, name}) {
    return (
        <ArrowsComponent>
            <Img src={up} alt='up' onClick={() => sortUsers(name)}/>
            <Img src={down} alt='down' onClick={() => sortUsers(`-${name}`)}/>
        </ArrowsComponent>
    )
}

export default Arrows
