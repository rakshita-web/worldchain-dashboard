async function getLatestBlock() {
  const provider = new ethers.providers.JsonRpcProvider("https://flow-mainnet.g.alchemy.com/v2/QHxBdDlG2hwCT-Uy8Dg7P");

  try {
    const block = await provider.getBlock("latest");
    const info = {
      blockNumber: block.number,
      timestamp: new Date(block.timestamp * 1000).toLocaleString(),
      txCount: block.transactions.length
    };
    document.getElementById("output").textContent = JSON.stringify(info, null, 2);
  } catch (error) {
    document.getElementById("output").textContent = "Error: " + error.message;
  }
}




