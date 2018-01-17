import { IConfig } from "contracts/IConfig";

const socketPort = parseInt(process.env.SOCKET_PORT, 10);

const config: IConfig = {
    blockchainDir: process.env.BLOCKCHAIN_DIR || ".blockchain",
    socketPort: isNaN(socketPort) ? 6001 : socketPort,
};

export default config;
