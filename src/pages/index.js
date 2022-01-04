import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'
import { Butt } from '../components/butt'
import { Tab } from '../components/tab'
import ProtocolData from '../components/protocolData'

import True from '../styles/fontTrue.css'

import { useDarkMode } from '../contexts/Application'

import PinkGlimmer from '../images/pink_glimmer.inline.svg'
import Twitter from '../images/twitter.inline.svg'
import Github from '../images/github.inline.svg'
import Discord from '../images/discord.inline.svg'
import Linkedin from '../images/linkedin.inline.svg'
import AppsImage from '../images/apps.png'
import Phone from '../images/imagePhone.png'
import appstore from '../images/appstore.svg'
import google from '../images/google.svg'
import kitty from '../images/kitty.gif'

import ZTask from '../ZTask'
import ZBet from '../ZBet'
import TEarn from '../TEarn'
import BEarn from '../BEarn'
import ZTopspent from '../ZTopspent'
import ZTopearn from '../ZTopearn'
import Countdown from '../components/countdown'


const StyledAbout = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  justify-content: space-between;
  padding: 0 2rem;
  padding-bottom: 4rem;
  margin-bottom: 4rem;
  padding-top: 2rem;


  @media (max-width: 960px) {
    flex-direction: column;
    grid-template-columns: 1fr;
    margin-top: 0rem;
    padding-top: 1rem;
  }
`

const Title = styled.h1`
  /* font-size: 3rem; */
  margin-bottom: 4rem;
  font-size: 65px;
  text-transform: uppercase;
  background: -webkit-linear-gradient(to right, #DE0CCF 0%, #00F2FC 100%);
  background: -moz-linear-gradient(to right, #DE0CCF 0%, #00F2FC 100%);
	background: linear-gradient(to right, #DE0CCF 0%, #00F2FC 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 1200px;
  /* text-align: center; */
  @media (max-width: 960px) {
    font-size: 2rem;
  }
`

const BGCard = styled.span`
  width: 100vw;
  height: 100vh;
  max-height: 1220px;
  user-select: none;
  background-repeat: no-repeat;
  background: ${({ theme }) => theme.heroBG};
  background-size: contain;
  mix-blend-mode: overlay;

  @media (max-width: 960px) {
    width: 100vw;
    height: 100vh;
  }
`

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.buttonBorder};
  border-bottom: 1px solid;
  border-image: linear-gradient(var(--angle), aqua, aqua, magenta, magenta) 1;
	
	animation: 15s rotate linear infinite;
}

@keyframes rotate {
	to {
		--angle: 360deg;
	}
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

  @media (max-width: 960px) {
    margin-bottom: 0;
    padding: 1rem;
    padding-bottom: 8rem;
  }
`

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  will-change: transform;
  align-items: flex-start;
  height: 15vh;

  @media (max-width: 1024px) {
    height: 50vh;
  }

  @media (max-width: 640px) {
    height: 50vh;
    margin-top: -8rem;
    margin-bottom: 15rem;
  }

  @media (max-width: 440px) {
    height: 50vh;
  }
`

const StyledBodyTitle = styled.h1`
  font-size: 48px;
  white-space: wrap;
  overflow-wrap: normal;
  
  @media (max-width: 1024px) {
    margin: 2rem 0 0rem 0;
  }

  @media (max-width: 960px) {
    width: 100%;
    margin: 2rem 0 2rem 0;
    font-weight: 500;
    text-align: left;
    font-size: 32px;
  }

  @media (max-width: 640px) {
    width: 100%;
    margin: 2rem 0 2rem 0;
    font-weight: 500;
    text-align: left;
    font-size: 32px;
  }

  @media (max-width: 440px) {
    font-weight: 500;
    text-align: left;
    font-size: 37px;
  }
`

const StyledBodySubTitle = styled.h2`
  max-width: 720px;
  line-height: 150%;
  font-weight: 400;
  text-align: left;

  @media (max-width: 640px) {
    text-align: left;
  }
`

const SubTitle = styled.div`
  max-width: 930px;
  font-size: 20px;
  font-weight: 400;
  @media (max-width: 640px) {
    font-size: 14px;
  }
`

const StyledBodySubT = styled.h2`
  display: none;
  visibility: hidden;
  text-transform: uppercase;
  background: -webkit-linear-gradient(to right, #DE0CCF 0%, #00F2FC 100%);
  background: -moz-linear-gradient(to right, #DE0CCF 0%, #00F2FC 100%);
	background: linear-gradient(to right, #DE0CCF 0%, #00F2FC 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

  @media (max-width: 640px) {
  display: block;
  visibility: visible;
  max-width: 720px;
  line-height: 150%;
  font-weight: 400;
  text-align: left;
    text-align: left;
  }
`

const StyledBodySubText = styled.h3`
  max-width: 960px;
  line-height: 150%;
  opacity: 0.8;
  @media (max-width: 640px) {
    text-align: left;
  }
`

const StyledSectionTitle = styled.h3`
  max-width: 975px;
  line-height: 140%;
  font-size: 32px;
  @media (max-width: 640px) {
    text-align: left;
  }
`

const StyledSocialRow = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  margin-bottom: 2rem;
  & > *:not(:first-of-type) {
    margin-top: 0;
    margin-left: 16px;
  }
  `

const StyledSocialRowL = styled.nav`
  display: none;
  
    @media (max-width: 960px) {
      display: flex;
  flex-direction: row;
  margin-top: -3rem;
  & > *:not(:first-of-type) {
    margin-top: 0;
    margin-left: 16px;
    }
`

const StyledItemRow = styled.nav`
  display: flex;
  flex-direction: column;

  margin: 0rem;
  & > *:not(:first-of-type) {
    margin-top: 12px;
  }
  @media (min-width: 960px) {
    flex-direction: row;
    & > * {
      margin-top: 1px;
      margin-bottom: 1px;
    }
    & > *:not(:first-of-type) {
      margin-top: 0;
      margin-left: 12px;
    }
  }
`

const StyledItemColumn = styled.nav`
  display: flex;
  flex-direction: column;
  & > *:not(:last-of-type) {
    margin-bottom: 12px;
  }
`

const StyledPinkGlimmer = styled(PinkGlimmer)`
  margin: 0;
  width: 48px;
  height: 48px;
  position: relative;
  top: -24px;
  right: -32px;
  margin-left: -50px;
  margin-right: 2px;
  transition: transform 0.2s linear;
  :hover {
    transform: rotate(-10deg);
  }
`

const StyledTwitter = styled(Twitter)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 24px;
  height: 24px;
`

const StyledDiscord = styled(Discord)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 24px;
  height: 24px;
`

const StyledGithub = styled(Github)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 24px;
  height: 24px;
`

const StyledLinkedIn = styled(Linkedin)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 24px;
  height: 24px;
`

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.cardBG};
  border: 1px solid ${({ theme }) => theme.buttonBorder};
  padding: 2rem;
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.shadows.huge};
`

const StyledC = styled.div`
  border-radius: 24px;
`

const HideSmall = styled.span`
  @media (max-width: 960px) {
    display: none;
  }
`

const StyledTradeLink = styled.a`
padding: 0 3rem 0 0;
text-decoration: none;
display: inline-block;
width: 100%
alignSelf: center;
white-space: nowrap;

}
@media (max-width: 960px) {
  display: inline-block;
}
`

const IndexPage = props => {
  const isDark = useDarkMode()

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
      banner: file(relativePath: { eq: "Banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      grants: file(relativePath: { eq: "unigrants.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      discord: file(relativePath: { eq: "discord.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      twitter: file(relativePath: { eq: "twitter.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      reddit: file(relativePath: { eq: "reddit.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      discourse: file(relativePath: { eq: "discourse.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      devs: file(relativePath: { eq: "devs.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout path={props.location.pathname}>
      <BGCard>
        {/* <CardNoise /> */}
        
        {/* <CardFade /> */}
      </BGCard>
      <SEO
        title="Home"
        path={props.location.pathname}
        description={'Discover, fund, and be part of projects you care about.'}
      />
      
      <StyledAbout>
        <span style={{ marginTop: '5rem' }}>
        <HideSmall>
          <Title style={{ paddingBottom: '4rem' }}>
            Discover, fund, and be part of projects you care about.
          </Title>
        </HideSmall>
        </span> 
      </StyledAbout>
          
      <StyledBody>
        <StyledTitle>
          <StyledBodyTitle>
            <span style={{ fontFamily: "True", fontWeight: 200 }}>NERVE GLOBAL</span>
          </StyledBodyTitle>
          <StyledBodySubT>
            {'Discover, fund, and be part of projects you care about.'}
          </StyledBodySubT>
          <StyledSocialRow>
          <StyledTradeLink
            target="_blank"
            href="https://apps.apple.com/de/app/nerve-global/id1500517863"
          >
            <img style={{ maxWidth: "20rem" }} src={appstore} width="143%" />
          </StyledTradeLink>
          <StyledTradeLink
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.academy.nerve&hl=en&gl=US"
          >
            <img style={{ maxWidth: "20rem" }} src={google} width="140%" />
          </StyledTradeLink>
          </StyledSocialRow>
          <StyledSocialRow style={{ marginTop: "3rem" }}>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/nerveglobal_">
              <StyledTwitter />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/nerveglobal">
              <StyledGithub />
            </a>
            <a target="_blank" rel="noreferrer" href="https://discord.gg/Xuh5enTNB6">
              <StyledDiscord />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/nerveglobal/">
              <StyledLinkedIn />
            </a>
          </StyledSocialRow>
          
        </StyledTitle>
        
        <HideSmall>
        <GrantCard>
            <img style={{ margin: "-5rem 0 0 0" }} src={kitty} width="100%" />
        </GrantCard>
        </HideSmall>

        <StyledSectionHeaderr>
          <a /*href="https://info.uniswap.org/"*/>{'MAINNET LAUNCH →'}</a>
          </StyledSectionHeaderr>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '2rem 0 8rem 0'
            }}
          >
            <Countdown />
            </div>
          <EcosystemSection data={data} props={props} />
          
          
          <StyledSectionHeader>
          <a /*href="https://info.uniswap.org/"*/>{'DATA ANALYTICS →'}</a>
          </StyledSectionHeader>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '2rem 0 12rem 0'
            }}
          >
            <ProtocolData />
          </div>


        <DeveloperSection data={data} props={props} />

        <KeyAdvantages data={data} props={props} />

        <Ranking data={data} props={props} />
        
        <Spotlight data={data} props={props} />

        <StyledSection>
        <StyledItemRow style={{ alignItems: 'center', justifyContent: 'center', padding: '5rem 10rem 0 5rem' }}>
        <StyledSectionTitle>A system for completely new forms of entertainment, investigation and exploration - by you.</StyledSectionTitle>
        <HideSmall>
        <StyledSocialRow>
          <StyledTradeLink
            target="_blank"
            href="https://apps.apple.com/de/app/nerve-global/id1500517863"
          >
            <img style={{ maxWidth: "20rem" }} src={appstore} width="143%" />
          </StyledTradeLink>
          <StyledTradeLink
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.academy.nerve&hl=en&gl=US"
          >
            <img style={{ maxWidth: "20rem" }} src={google} width="140%" />
          </StyledTradeLink>
          </StyledSocialRow>   
          </HideSmall>   
        </StyledItemRow>
      </StyledSection>

      <StyledSocialRowL>
          <StyledTradeLink
            target="_blank"
            href="https://apps.apple.com/de/app/nerve-global/id1500517863"
          >
            <img style={{ maxWidth: "20rem" }} src={appstore} width="143%" />
          </StyledTradeLink>
          <StyledTradeLink
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.academy.nerve&hl=en&gl=US"
          >
            <img style={{ maxWidth: "20rem" }} src={google} width="140%" />
          </StyledTradeLink>
          </StyledSocialRowL>

      </StyledBody>
      <BG />
    </Layout>
  )
}

export default IndexPage

const StyledSectionHeader = styled.h1`
  font-size: 20px;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  font-weight: 500;
  margin-top: 6rem;

  a {
    color: ${({ theme }) => theme.textColor};
  }

  @media (max-width: 960px) {
    width: 100%;
    /* font-size: 2rem; */
    line-height: 2.5rem;
    max-width: 600px;
    margin-top: 2rem;
  }
  @media (max-width: 640px) {
    width: 100%;
    font-weight: 400;
    margin-top: 2rem;
    text-align: left;
  }
`

const StyledSectionHeaderr = styled.h1`
  font-size: 20px;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  font-weight: 500;
  margin-top: 10rem;

  a {
    color: ${({ theme }) => theme.textColor};
  }

  @media (max-width: 960px) {
    width: 100%;
    /* font-size: 2rem; */
    line-height: 2.5rem;
    margin-top: -5rem;
    max-width: 600px;
  }
  @media (max-width: 640px) {
    width: 100%;
    font-weight: 400;
    margin-top: -5rem;
    text-align: left;
  }
`

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10rem 0;

  @media (max-width: 960px) {
    margin-top: 1rem;
  }

  @media (max-width: 640px) {
    margin-top: 1rem;
  }
`

export const DeveloperCard = styled(StyledCard)`
  mix-blend-mode: ${({ isDark }) => (isDark ? 'overlay' : 'lighten')};
  color: white;
  background-size: cover;
  background-repeat: no-repeat;
`

export const GovernanceCard = styled(StyledCard)`
  mix-blend-mode: ${({ isDark }) => (isDark ? 'overlay' : 'lighten')};
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 12px;

  border-image: linear-gradient(var(--angle), aqua, aqua, magenta, magenta) 1;
	
	animation: 15s rotate linear infinite;
}

@keyframes rotate {
	to {
		--angle: 360deg;
	}
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

  transition: background-color 0.25s ease;
  @media (max-width: 960px) {
    padding: 1rem 1.25rem;
    height: ${({ open }) => (open ? '100vh' : '100%')};
  }

  @media (max-width: 960px) {
    margin-bottom: 10px;
    margin-right: 0px;
  }
`

export const AppsCard = styled(StyledCard)`
  background: url(${AppsImage});
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 12px;
  width: 100%;
  min-height: 290px;
  max-width: 590px;

  h1 {
    font-size: 48px;
    font-weight: 700;
    margin: 0;
    margin-bottom: 0.25rem;
  }

  p {
    opacity: 0.6;
    font-size: 20px;
    font-weight: 300;
  }

  @media (max-width: 960px) {
    margin-top: -80px;
    margin-bottom: 10px;
    margin-right: 0px;
    max-width: unset;
  }
`

export const GrantsCard = styled(StyledCard)`
  width: 600px;
  alignItems: center;
  justifyContent: center;
  
  @media (max-width: 960px) {
    width: 325px;
  }
`

export const GrantCard = styled(StyledC)`
  width: 250px;
  position: absolute; 
  top: -1rem;
  right: 10rem;
  
  @media (max-width: 960px) {
    width: 250px;
    top: 23rem;
    right: 5rem;
  }
`

const EcosystemSection = () => {
  return (
    <StyledSection>
      <StyledItemRow>
        <span style={{ marginTop: '-60px', marginBottom: '80px' }}>
          <StyledSectionHeader style={{ marginTop: '5rem' }}>{'NERVE ECOSYSTEM →'}</StyledSectionHeader>
          <StyledSectionTitle>We contribute to an open, inclusive and creative society.</StyledSectionTitle>
          <SubTitle style={{ opacity: '0.6', textAlign: 'left', marginRight: '48px', marginBottom: '48px' }}>
          People share unique adventures, experiences, educational content and much more with the world, which unlock a massively larger creative economy 
          than the one constrained by today’s platforms and their policies.
          This ecosystem will be built - by you.
          </SubTitle>
        </span>
        <AppsCard>
          <h1>∞</h1>
          <p>Opportunities</p>
        </AppsCard>
      </StyledItemRow>
    </StyledSection>
  )
}

const KeyAdvantages = () => {
  return (
    <StyledSection>
      <StyledItemRow>
        <span>
          <StyledSectionHeader>{'4 SIMPLE STEPS TO START →'}</StyledSectionHeader>

          <StyledItemColumn style={{ display: 'flex', flexDirection: 'column' }}>
            <Tab style={{ zIndex: "1", borderRadius: '20px' }} outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                1. Receive a Task
                </StyledBodySubTitle>
                <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                Get paid to build the future of finance. Uniswap Governance offers grant funding for people building apps,
              tools, and activities on the Uniswap Protocol.
                </p>
              </div>
            </Tab>
          </StyledItemColumn>

          <StyledItemColumn style={{ display: 'flex', flexDirection: 'column' }}>
            <Tab style={{ zIndex: "1", borderRadius: '20px' }} outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                2. Submit a proof
                </StyledBodySubTitle>
                <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                Provide a video proof and link it to your task. Our system is suitable for any other social media platform.
                </p>
              </div>
            </Tab>
          </StyledItemColumn>

          <StyledItemColumn style={{ display: 'flex', flexDirection: 'column' }}>
            <Tab style={{ zIndex: "1", borderRadius: '20px' }} outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                3. Get approved
                </StyledBodySubTitle>
                <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                In our crowdfunding system, the donors have to approve before funds get disbursed. That means, funding will only
            be provided after a request has been delivered.
                </p>
              </div>
            </Tab>
          </StyledItemColumn>

          <StyledItemColumn style={{ display: 'flex', flexDirection: 'column' }}>
            <Tab style={{ zIndex: "1", borderRadius: '20px' }} outlined>
              <div style={{ padding: '1rem' }}>
                <StyledBodySubTitle style={{ marginBottom: '0.25rem' }}>
                4. Claim funds
                </StyledBodySubTitle>
                <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
                All funds are routed through blockchain - that means that all funds will be transferred within seconds or minutes.
                </p>
              </div>
            </Tab>
          </StyledItemColumn>

        </span>
        <HideSmall>
        <img style={{ position: "absolute", margin: "0 0 0 -20rem", maxWidth: "65%" }} src={Phone} />
        </HideSmall>
        </StyledItemRow>
    </StyledSection>
  )
}


const Spotlight = () => {
  return (
    <>
      <StyledSection>
        <StyledSectionHeader>{'SPOTLIGHT →'}</StyledSectionHeader>
        <StyledItemRow style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem 10rem 2rem 10rem'
            }}>
        <GrantsCard style={{ minHeight: "16rem", maxWidth: "50rem" }}>
            <StyledBodySubTitle style={{ fontSize: '1.125rem' }}>Latest Task</StyledBodySubTitle>
            <p style={{ fontSize: '20px', fontWeight: "600" }}>
            <ZTask />
            </p>
            <p style={{ fontSize: '1.125rem', opacity: '0.6' }}>For 
            <Butt outlined>
              <p style={{ fontSize: '1.125rem' }}><TEarn /></p>
            </Butt>
            </p>
          </GrantsCard>

          <GrantsCard style={{ minHeight: "16rem", maxWidth: "50rem" }}>
            <StyledBodySubTitle style={{ fontSize: '1.125rem' }}>Latest Bet</StyledBodySubTitle>
            <p style={{ fontSize: '20px', fontWeight: "600" }}>
            <ZBet />
            </p>
            <p style={{ fontSize: '1.125rem', opacity: '0.6' }}>By
            <Butt outlined>
              <p style={{ fontSize: '1.125rem' }}><BEarn /></p>
            </Butt>
            </p>
          </GrantsCard>
          
        </StyledItemRow>
      </StyledSection>
    </>
  )
}

const Ranking = () => {
  return (
    <>
      <StyledSection>
        <StyledSectionHeader>{'RANKING →'}</StyledSectionHeader>
        <StyledItemRow style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem 10rem 2rem 10rem'
            }}>

          <GrantsCard style={{ minHeight: "16rem", maxWidth: "50rem" }}>
            <StyledBodySubTitle style={{ fontSize: '1.125rem' }}>TOP EARNERS</StyledBodySubTitle>
            <p style={{ marginLeft: "2rem", fontSize: '20px', fontWeight: "600" }}>
            <ZTopearn />
            </p>
          </GrantsCard>

          <GrantsCard style={{ minHeight: "16rem", maxWidth: "50rem" }}>
            <StyledBodySubTitle style={{ fontSize: '1.125rem' }}>TOP SPENDERS</StyledBodySubTitle>
            <p style={{ marginLeft: "2rem", fontSize: '20px', fontWeight: "600" }}>
            <ZTopspent />
            </p>
          </GrantsCard>
          
        </StyledItemRow>
      </StyledSection>
    </>
  )
}

const DeveloperSection = () => {
  return (
      <StyledSection>
        <StyledSectionHeader>{'INNOVATIONS AT A GLANCE →'}</StyledSectionHeader>
        <StyledItemRow style={{ alignItems: 'center', justifyContent: 'center', padding: '2rem 10rem 2rem 10rem' }}>
          <GrantsCard style={{ minHeight: "20rem", maxWidth: "18rem" }}>
            <StyledBodySubTitle>Blockchain</StyledBodySubTitle>
            <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
              at your fingertips. Nerve is universally accessible, censorship-resistant and allows everyone to participate, even without access to a bank account.
            </p>
          </GrantsCard>
          <GrantsCard style={{ minHeight: "20rem", maxWidth: "18rem" }}>
            <StyledBodySubTitle>Earn Crypto</StyledBodySubTitle>
            <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
            Nerve is powered by Ethereum, Polygon and other chains, allowing you to receive instant guaranteed payouts with full transparency.
            </p>
          </GrantsCard>
          <GrantsCard style={{ minHeight: "20rem", maxWidth: "18rem" }}>
            <StyledBodySubTitle>No limits</StyledBodySubTitle>
            <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
            Nerve is the first peer-to-peer crowdfunding application that lets you decide on content. No limits on who you can challenge or what you can bet on - anywhere, anytime.
            </p>
          </GrantsCard>
          <GrantsCard style={{ minHeight: "20rem", maxWidth: "18rem" }}>
            <StyledBodySubTitle>Digital reality</StyledBodySubTitle>
            <p style={{ textAlign: 'left', margin: '0', opacity: '0.6', fontSize: '16px', fontWeight: 400 }}>
            We are able to connect the very progressive sub-culture of digital natives with the real world. Share immersive experiences with other people, even if you can`t be together.
            </p>
          </GrantsCard>
        </StyledItemRow>
      </StyledSection>
      )
}