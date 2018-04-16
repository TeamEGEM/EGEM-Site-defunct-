// web3 connection
web3 = new Web3(new Web3.providers.HttpProvider("https://jsonrpc.egem.io/custom"));

// Common Variables
var cBlock = web3.eth.blockNumber;
var balance0 = web3.fromWei(web3.eth.getBalance("0x3fa6576610cac6c68e88ee68de07b104c9524fda"), "ether");
var balance1 = web3.fromWei(web3.eth.getBalance("0xfc0f0a5F06cB00c9EB435127142ac79ac6F48B94"), "ether");
var balance2 = web3.fromWei(web3.eth.getBalance("0x0666bf13ab1902de7dee4f8193c819118d7e21a6"), "ether");
var balance3 = web3.fromWei(web3.eth.getBalance("0xcEf0890408b4FC0DC025c8F581c77383529D38B6"), "ether");

// Get balance of the address entered
function qBalance() {
    var x = document.querySelector('[name="addressInput"]').value;
    var tCount = web3.eth.getTransactionCount(x);
    var uBalance = web3.fromWei(web3.eth.getBalance(x), "ether");
    document.getElementById('balance').innerText = uBalance;
    document.getElementById('gTransCount').innerText = tCount;
}


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

// Look up a transaction
function qTx() {
    var x = document.querySelector('[name="txInput"]').value;
    txObj = web3.eth.getTransaction(x);
    data = JSON.stringify(txObj);
    obj = JSON.parse(data);
    var e = obj.value;
    var vEgem = e;
    document.getElementById("txfrom").innerHTML = obj.from;
    document.getElementById("txto").innerHTML = obj.to;
    document.getElementById("blockhash").innerHTML = obj.blockHash;
    document.getElementById("gas").innerHTML = obj.gas;
    document.getElementById("number").innerHTML = obj.blockNumber;
    document.getElementById("value").innerHTML = vEgem;
    document.getElementById("input").innerHTML = obj.input;
}

// Block search
function qBlock() {
    var input = document.querySelector('[name="blockInput"]').value;
    blkObj = web3.eth.getBlock(input);
    blkTxs = web3.eth.getBlockTransactionCount(input);
    blkUnc = web3.eth.getBlockUncleCount(input);
    data = JSON.stringify(blkObj);
    obj = JSON.parse(data);
    var dateTimeString = obj.timestamp;
    var dt = new Date(dateTimeString*1000);
    document.getElementById("hash").innerHTML = obj.hash;
    document.getElementById("pHash").innerHTML = obj.parentHash;
    document.getElementById("miner").innerHTML = obj.miner;
    document.getElementById("nonce").innerHTML = obj.nonce;
    document.getElementById("size").innerHTML = obj.size;
    document.getElementById("btransactions").innerHTML = blkTxs;
    document.getElementById("ltransactions").innerHTML = obj.transactions;
    document.getElementById("buncles").innerHTML = blkUnc;
    document.getElementById("timestamp").innerHTML = dt.getHours() + '/' + dt.getMinutes() + '/' + dt.getSeconds() + ' -- ' + dt;

    var i, x = "";
    for (i in obj.transactions) {
        x += "<ul id=\"txFromList[i]\" onClick=\"checkTx();\">" + obj.transactions[i] + "</ul>";
    }
    document.getElementById("ltransactions").innerHTML = x;
}
i = "";
// Click to check tx from selected block (not done)
function checkTx() {
  document.getElementById("txInput2").value = obj.transactions;
}

// Query the 4 dev funds.
function qDevsBalance() {
  var balance0 = web3.fromWei(web3.eth.getBalance("0x3fa6576610cac6c68e88ee68de07b104c9524fda"), "ether");
  var balance1 = web3.fromWei(web3.eth.getBalance("0xfc0f0a5F06cB00c9EB435127142ac79ac6F48B94"), "ether");
  var balance2 = web3.fromWei(web3.eth.getBalance("0x0666bf13ab1902de7dee4f8193c819118d7e21a6"), "ether");
  var balance3 = web3.fromWei(web3.eth.getBalance("0xcEf0890408b4FC0DC025c8F581c77383529D38B6"), "ether");
    document.getElementById("bal0").innerText = balance0
    document.getElementById("bal1").innerText = balance1
    document.getElementById("bal2").innerText = balance2
    document.getElementById("bal3").innerText = balance3
}

function lBlock() {
       var cBlock = web3.eth.blockNumber;
       document.getElementById("cBlock").innerText = cBlock;
       document.getElementById("blockInput2").value = cBlock;
}
