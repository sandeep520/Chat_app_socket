import React from 'react'
import loader from '../images/loaders/Spinner-5.gif';
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loader = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            display: "flex",
            "& > * + *": {
                marginLeft: theme.spacing(2),
            },
        },
    }));

    const classes = useStyles(true);

    return (
        // eslint-disable-next-line
        // <img src={loader} style={{ width: '200px', margin: 'auto', display: 'block', alt: 'Loading' }} />

        <div style={{ display: "relative" }}>

            <div
                className={classes.root}
                style={{
                    position: "absolute",
                    width: "100vw",
                    height: "100vh",
                    top: "0",
                    left: "0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                }}
            >
                <CircularProgress color="secondary" />
            </div>

        </div>


    )
}

export default Loader