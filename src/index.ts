const Binance = require("node-binance-api");
const binance = new Binance().options({
    APIKEY: process.env.API_KEY,
    APISECRET: process.env.API_SECRET,
});
async function main() {
    console.log("get future prices");
    console.info(await binance.futuresPrices());
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
