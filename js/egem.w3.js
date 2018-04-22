// web3 connection
web3 = new Web3(new Web3.providers.HttpProvider("https://jsonrpc.egem.io/custom"));

// Common Variables
var cBlock = web3.eth.blockNumber;
var balance0 = web3.fromWei(web3.eth.getBalance("0x3fa6576610cac6c68e88ee68de07b104c9524fda"), "ether");
var balance1 = web3.fromWei(web3.eth.getBalance("0xfc0f0a5F06cB00c9EB435127142ac79ac6F48B94"), "ether");
var balance2 = web3.fromWei(web3.eth.getBalance("0x0666bf13ab1902de7dee4f8193c819118d7e21a6"), "ether");
var balance3 = web3.fromWei(web3.eth.getBalance("0xcEf0890408b4FC0DC025c8F581c77383529D38B6"), "ether");

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
  var balance0 = web3.fromWei(web3.eth.getBalance("0x3fa6576610cac6c68e88ee68de07b104c9524fda"), "ether");
  var balance1 = web3.fromWei(web3.eth.getBalance("0xfc0f0a5F06cB00c9EB435127142ac79ac6F48B94"), "ether");
  var balance2 = web3.fromWei(web3.eth.getBalance("0x0666bf13ab1902de7dee4f8193c819118d7e21a6"), "ether");
  var balance3 = web3.fromWei(web3.eth.getBalance("0xcEf0890408b4FC0DC025c8F581c77383529D38B6"), "ether");
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
