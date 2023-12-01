import React, { useState } from 'react'
import { Button, CardComponent, ContentDiv, Div, Generalwidth, GreenBg, Tabbutton,NewGreen } from '../../styles'
import classes from './tabcontent.module.css'
import { Tab } from '../../constants/Tab'

export default function TabContent() {
    const [click, setClick] = useState(0)
    const handleClick = idx => {
        setClick(idx)
    }
    return (
        <>
      
        {
                <NewGreen>
                    <Div className={classes.main}>
                        <ContentDiv className={classes.content}>
                            <h1>
                                The Basics
                            </h1>
                            <p>Get up to speed on all things on crypto, blockchain technology, and trading with Duwitt HUB</p>
                        </ContentDiv>
                    </Div>
                    <Generalwidth>
                        <div className={classes.tab}>
                            {
                                Tab.map((item, idx) => {
                                    return (
                                        <Tabbutton disabled={click === idx} className={click === idx ? classes.btn : classes.none} onClick={() => handleClick(idx)}
                                            id={idx}
                                            key={item.idx}>
                                            {item.item}
                                        </Tabbutton>
                                    )
                                })
                            }
                        </div>
                     <div className={classes.swiper}>
                     {
                            Tab.map((item, idx) => {
                                return (
                                    <div className={classes.swiperCard}>
                                        {click === idx ?
                                            <CardComponent>
                                                {item.Component}
                                            </CardComponent>
                                            : null}
                                    </div>
                                )
                            })
                        }
                     </div>

                    </Generalwidth>

                </NewGreen>
            }
       
         
        </>
    )
}
