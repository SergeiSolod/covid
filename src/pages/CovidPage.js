import React, {useEffect} from 'react'
import styles from './CovidPage.module.css';
import CovidCard from "../Components/CovidCard/CovidCard";
import {Grid} from '@material-ui/core'
import {connect} from 'react-redux'
import {SetCovidDataThunk} from "../redux/reducers/Covid-reducer";
import {getCovidData, getLastUpdate} from "../redux/selectors/Covide-selector";

const CovidPage = (props) => {
    useEffect(() => {
      props.SetCovidDataThunk()
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.container_card}>
                <Grid container spacing={3} justify='center'>
                    {props.CovidData.map(data => <CovidCard data={data} LastUpdate={props.LastUpdate}/>)}
                </Grid>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        CovidData: getCovidData(state),
        LastUpdate: getLastUpdate(state)
    };
};

export default connect(mapStateToProps, {SetCovidDataThunk})(CovidPage)