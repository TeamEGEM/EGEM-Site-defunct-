// web3 connection
web3 = new Web3(new Web3.providers.HttpProvider("https://jsonrpc.egem.io/custom"));

// Common Variables
var cBlock = web3.eth.blockNumber;
var balance0 = web3.fromWei(web3.eth.getBalance("0x1140e31a4a7ae014e55f6c235af027c5cfabca17"), "ether");
var balance1 = web3.fromWei(web3.eth.getBalance("0x63e9cefd428d37430205c0ab8fa2a34a21f911ac"), "ether");
var balance2 = web3.fromWei(web3.eth.getBalance("0x2025ed239a8dec4de0034a252d5c5e385b73fcd0"), "ether");
var balance3 = web3.fromWei(web3.eth.getBalance("0xe485aa04bb231f331b85bf64614737c6495cc4b3"), "ether");
var balance4 = web3.fromWei(web3.eth.getBalance("0x5488f1d22a47fee54cf77a36caa899c9db28b513"), "ether");

// Get balance of the address entered
function qBalance() {
    var x = document.querySelector('[name="addressInput"]').value;
    var tCount = web3.eth.getTransactionCount(x);
    var uBalance = web3.fromWei(web3.eth.getBalance(x), "ether");
    document.getElementById('balance').innerText = uBalance;
    document.getElementById('gTransCount').innerText = tCount;
}

// Get and decode data from a TX.
function qData() {
  let tx = "0x98a8ba9eee322f8b576347e85c7c082d2a01a75ba5bfa4a9a13f3fc5554c7d67";
  web3.eth.getTransaction(tx, (error,result)=>{
    if(!error){
      let data2decode = result["input"];
      document.getElementById("thedata").innerHTML = web3.toAscii(data2decode);
    } else {
      let error = "Transaction result was null..";
      document.getElementById("thedata").innerHTML = error;
    }
  })
}

// Query the 4 dev funds.
function qDevsBalance() {
  var balance0 = web3.fromWei(web3.eth.getBalance("0x1140e31a4a7ae014e55f6c235af027c5cfabca17"), "ether");
  var balance1 = web3.fromWei(web3.eth.getBalance("0x63e9cefd428d37430205c0ab8fa2a34a21f911ac"), "ether");
  var balance2 = web3.fromWei(web3.eth.getBalance("0x2025ed239a8dec4de0034a252d5c5e385b73fcd0"), "ether");
  var balance3 = web3.fromWei(web3.eth.getBalance("0xe485aa04bb231f331b85bf64614737c6495cc4b3"), "ether");
  //BTS ASSETS
  var balance4 = web3.fromWei(web3.eth.getBalance("0x5488f1d22a47fee54cf77a36caa899c9db28b513"), "ether");
    document.getElementById("bal0").innerText = balance0
    document.getElementById("bal1").innerText = balance1
    document.getElementById("bal2").innerText = balance2
    document.getElementById("bal3").innerText = balance3
    document.getElementById("bal4").innerText = balance4
}

function lBlock() {
       var cBlock = web3.eth.blockNumber;
       document.getElementById("cBlock").innerText = cBlock;
       document.getElementById("blockInput2").value = cBlock;
}
