// import React library
import React from 'react';   

//Define a function for home component..
function Home(){
    return(
        <div style={{textAlign:"center",padding:"50px"}}>
            <h2>Home Component</h2>
            <p>
                This is a simple homepage after the login page......
            </p>
            <img src="/bk.png" alt="Welcome To Home Page"   //image displayed below the paragrah

            //styling the image
            style={{width: '1000px', borderRadius: '10px', marginTop: '20px'}} />    
        </div>
    )
}
export default Home; //exporting the home component so it can be used in other parts of the app...