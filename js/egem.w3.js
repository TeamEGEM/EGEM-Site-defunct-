// web3 connection
web3 = new Web3(new Web3.providers.HttpProvider("https://jsonrpc.egem.io/custom"));

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
  var coinSupply = cBlock*blockReward;
}
