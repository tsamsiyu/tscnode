import config from "config";
import { IApp } from "contracts/IApp";
import * as dotenv from "dotenv";
import blockchainInitializer from "initializers/blockchain";
import socketInitializer from "initializers/socket";

dotenv.config();

(async () => {
    const blockchain = await blockchainInitializer(config);
    const socket = await socketInitializer(config);

    const App: IApp = {
        blockchain,
        socket,
    };
})();
