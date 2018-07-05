// web3 connection
web3 = new Web3(new Web3.providers.HttpProvider("https://jsonrpc.egem.io/custom"));

var MSbalance = web3.fromWei(web3.eth.getBalance("0x45a25161f56868d8706b449f72ec3d2f838e57e8"), "ether");
var CMbalance = web3.fromWei(web3.eth.getBalance("0x63e9cefd428d37430205c0ab8fa2a34a21f911ac"), "ether");
var F1balance = web3.fromWei(web3.eth.getBalance("0x1140e31a4a7ae014e55f6c235af027c5cfabca17"), "ether");
var F2balance = web3.fromWei(web3.eth.getBalance("0x2025ed239a8dec4de0034a252d5c5e385b73fcd0"), "ether");
var F3balance = web3.fromWei(web3.eth.getBalance("0xe485aa04bb231f331b85bf64614737c6495cc4b3"), "ether");

var MSbalanceF = Number(MSbalance).toFixed(2);
var CMbalanceF = Number(CMbalance).toFixed(2);
var F1balanceF = Number(F1balance).toFixed(2);
var F2balanceF = Number(F2balance).toFixed(2);
var F3balanceF = Number(F3balance).toFixed(2);

// Common Variables
var cBlock = web3.eth.blockNumber;
//var cBlock = "2500001";
var reduct1 = "5000";

var trans1 = "2500000";
var trans2 = "5000000";
var trans3 = "7500000";
var trans4 = "10000000";
var trans5 = "12500000";
var trans6 = "15000000";

var blockReward = "";
var uncleReward = "";

if (cBlock >= trans1) {
  var blockReward = "4.75";
  var uncleReward = "0.125";
  var preEraAdd = 11250000;
  var correction = 625000;
  var whatEra = "Era 1";
  var coinSupplyPre = cBlock*blockReward;
  var coinSupply = coinSupplyPre+preEraAdd-correction;
} else if (cBlock >= trans2) {
  var blockReward = "2.50";
  var uncleReward = "0.0625";
  var preEraAdd = 11875000;
  var whatEra = "Era 2";
  var coinSupplyPre = cBlock*blockReward;
  var coinSupply = coinSupplyPre+preEraAdd-reduct1;
} else if (cBlock >= trans3) {
  var blockReward = "1.25";
  var uncleReward = "0.03125";
  var preEraAdd = 6250000;
  var whatEra = "Era 3";
  var coinSupplyPre = cBlock*blockReward;
  var coinSupply = coinSupplyPre+preEraAdd-reduct1;
} else if (cBlock >= trans4) {
  var blockReward = "0.60";
  var uncleReward = "0.015625";
  var preEraAdd = 3125000;
  var whatEra = "Era 4";
  var coinSupplyPre = cBlock*blockReward;
  var coinSupply = coinSupplyPre+preEraAdd-reduct1;
} else if (cBlock >= trans5) {
  var blockReward = "0.30";
  var uncleReward = "0.0078125";
  var preEraAdd = 1500000;
  var whatEra = "Era 5";
  var coinSupplyPre = cBlock*blockReward;
  var coinSupply = coinSupplyPre+preEraAdd-reduct1;
} else if (cBlock >= trans6) {
  var blockReward = "0.15";
  var uncleReward = "0.00390625";
  var preEraAdd = 750000;
  var whatEra = "Era 6";
  var coinSupplyPre = cBlock*blockReward;
  var coinSupply = coinSupplyPre+preEraAdd-reduct1;
} else {
  var blockReward = "9";
  var uncleReward = "0.25";
  var preEraAdd = "0";
  var whatEra = "Era 0";
  var coinSupply = cBlock*blockReward-reduct1;
}
