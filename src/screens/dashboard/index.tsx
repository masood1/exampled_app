import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import disconnected from "../../images/disconnected.jpg";
import citizen from "../../abis/citizen.json";
import UserList from "../../components/userList";
import { CONTRACT_ADDRESS } from "../../util/constants";
const Dashboard = () => {
  const [allEventData, setAllEventData] = useState([]);
  const web3 = window.web3;
  web3.eth.defaultAccount = web3.eth.accounts[0];
  console.log("Dashboard -> web3.eth.accounts[0]", web3.eth.accounts[0]);
  var CitizenContract = web3.eth.contract(citizen);
  var Citizen = CitizenContract.at(CONTRACT_ADDRESS);
  console.log(Citizen);

  useEffect(() => {
    loadBlockchainData();
  }, []);

  const loadBlockchainData = async () => {
    Citizen.allEvents({}, { fromBlock: 1, toBlock: "latest" }).get(
      (error: any, eventResult: any) => {
        if (error) console.log("Error in allEvents event handler: " + error);
        else console.log("allEvents: " + JSON.stringify(eventResult));
      }
    );

    var options = {
      fromBlock: 0,
      toBlock: "latest",
      address: CONTRACT_ADDRESS,
      topics: [web3.sha3("Citizen(uint256,uint256,string,string)")],
    };

    var filter = web3.eth.filter(options);

    filter.get(function (error: any, result: any) {
      if (!error) {
        console.log("thi aa ", result);
        setAllEventData(result);
      }
    });

    // web3.eth
    //   .getStorageAt("", (result: any) => {
    //     console.log("gaga Dashboard -> result", result)
    //      console.log(web3.utils.hexToAscii(result));
    //    })
  };

  const getNote = () => {
    // Citizen.getNoteByCitizenId();
  };
  return (
    <Grid container spacing={3}>
      <>
        {window.localStorage.getItem("account") === "" ? (
          <Box>
            <img src={disconnected} alt='' />
            <h1>Wallet is not connected please connect </h1>
          </Box>
        ) : (
          <>
            {
              // loop and display herer
              allEventData.map((eachEvent: any) => {
                return (
                  <Grid item xs={4} sm={4} lg={4} xl={4}>
                    <UserList
                      id={eachEvent.blockNumber}
                      blockNumber={eachEvent.blockNumber}
                      name={window.web3.toAscii(eachEvent.data)}
                      city=''
                      callBack={() => getNote()}
                      someNote={window.web3.toAscii(eachEvent.topics[0])}
                    />
                  </Grid>
                );
              })
            }
          </>
        )}
      </>
    </Grid>
  );
};
export default Dashboard;
