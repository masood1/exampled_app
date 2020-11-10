import React, { useState, useEffect } from "react";
import MetamaskAlert from "../../components/metamask/MetamaskAlert";
import { Grid, Container, makeStyles } from "@material-ui/core";
import SideDrawer from '../sidebar/index';
import DashboardScreens from '../DashboardScreens';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const Connection = () => {
  const [account, setAccount] = useState();
  const [loading, setLoading] = useState(false);
  const [metamaskInstalled, setMetamaskInstalled] = useState(false);
  const { content, container, appBarSpacer } = useStyles();
  useEffect(() => {
    setMetamaskInstalled(typeof window.web3 !== "undefined");
    if (metamaskInstalled) {
      loadWeb3Account();
    }
  }, []);

  const loadWeb3Account = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
    web3.eth.defaultAccount = web3.eth.accounts[0];
  };

  const Montent = () =>
    loading ? (
      <div id='loader' className='text-center'>
        <p className='text-center'>Loading...</p>
      </div>
    ) : (
      <DashboardScreens />
    );

  return (
    <>
    <SideDrawer />
    <main className={content}>
      <div className={appBarSpacer} />
      <Container maxWidth='lg' className={container}>
        <Grid container spacing={3}>
          {metamaskInstalled ? <Montent /> : <MetamaskAlert />}
        </Grid>
      </Container>
    </main>
    </>
  );
};

export default Connection;
