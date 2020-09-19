import React,{useEffect} from "react";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";



function MainComponent() {
    

    return (
        <React.Fragment>
            <div className="App">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" aria-label="menu" color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="inherit" style={{ flexGrow: 1 }}>
                            Converter-X
                    </Typography>
                        {/* <Link to="/signup" style={{color:'white', textDecoration:'none',margin:"8px"}}><Button variant='contained' color="primary">SignUp</Button></Link> */}
                        <Link to="/login" style={{color:'white', textDecoration:'none',margin:"8px"}}><Button variant='contained' color="primary">Login</Button></Link>
                        <Link style={{textDecoration:'none', margin:"8px"}} to='/'><Button variant='contained' color='primary'>Home</Button></Link>
                    </Toolbar>
                </AppBar>
            </div>

        </React.Fragment>
    );
}

export default MainComponent;
