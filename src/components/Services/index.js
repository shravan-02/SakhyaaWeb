import React from 'react'
import Icon1 from '../../images/card1.svg'
import Icon2 from '../../images/card2.svg'
import Icon3 from '../../images/card3.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We Help you out with daily activites</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Daily News</ServicesH2>
                    <ServicesP>We Help you out with daily activites</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Access Anywhere</ServicesH2>
                    <ServicesP>We Help you out with daily activites</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
