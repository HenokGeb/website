import React from 'react'
import {Link } from "react-router-dom"

function Home() {
  return (
    <div>
    <h1 style= {{color: "blue",}}> Welcome to the Employee page</h1>
    <br/>
    <br />
    <p style = {styledParagraph}> Dolor duo sit sed amet magna no et dolor diam. Sed takimata dolor dolores voluptua et dolore. 
    Erat sit lorem duo duo diam justo amet dolores dolore. At diam et nonumy lorem gubergren eirmod et et. 
    Sadipscing dolor tempor eos ut est aliquyam vero justo et, invidunt elitr et eirmod et elitr ipsum sed 
    clita, diam at et amet nonumy et dolores sea vero lorem. Ipsum no dolore dolore aliquyam. 
    Lorem at justo no invidunt et et, sanctus amet dolor dolore eos. Magna justo accusam labore eos es takimata 
    sed takimata kasd, consetetur invidunt labore lorem dolor. Eirmod invidunt sadipscing lorem elitr dolor dolore dolor, 
    rebum takimata invidunt lorem amet ut erat, ut et invidunt erat sea no, elitr et et ipsum dolores eos sit tempor takimata, 
    vero sed diam nonumy eirmod dolor aliquyam clita erat, sit magna sed lorem et lorem kasd. Sanctus accusam justo est sadipscing at tempor et. Erat dolor lorem labore dolor sit vero nonumy, ea dolore lorem rebum kasd sit ut. Sit vero dolore voluptua dolor justo eos sanctus. Amet eirmod sea rebum sadipscing lorem sanctus no accusam. No et lorem labore et et, et sadipscing justo sed ut. Dolore sit et elitr vero labore tempor, ipsum et et clita takimata, et ipsum et sadipscing nonumy accusam dolores nonumy sit, invidunt dolor diam eos consetetur.
     Diam sit et lorem et est ipsum amet elitr duo. Lorem dolores est accusam stet et et consetetur ut sit, lorem accusam ipsum eirmod dolore est aliquyam nonumy gubergren, takimata sed amet consetetur et kasd lorem magna dolor rebum. Et invidunt lorem invidunt invidunt diam at. Sadipscing amet diam kasd et sit, sed lorem sea justo dolor, et kasd no diam takimata takimata ipsum dolor magna. Voluptua lorem ipsum dolor dolore et ut eos sadipscing. Et amet amet lorem et elitr. Vero justo et voluptua diam stet sed accusam justo lorem. Stet nonumy eos sit ipsum dolor no sea clita, sit est duo dolores lorem et tempor, vero rebum et no eos, rebum gubergren diam dolor et sea diam ut. Dolore et invidunt est aliquyam sadipscing labore gubergren aliquyam tempor. Amet dolor kasd labore no consetetur rebum takimata, ipsum sit ipsum consetetur invidunt diam, dolore sea amet dolore dolores. 
     </p> 
    <div style={styledContainer}>
    <div><Link to ="/login"> Login</Link> </div>
    <br />
    <div><Link to ="/register"> Register</Link></div>
    </div>
    </div>
  )
}
const styledParagraph= {

}
const styledContainer= {
    color: "blue",
    textDecoration: "underline",
    margin: "50px",

}

export default Home