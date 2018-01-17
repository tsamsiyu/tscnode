import { BlockchainStore } from "services/BlockchainStore";
import * as SocketIO from "socket.io";

export interface IApp {
    blockchain: BlockchainStore;
    socket: SocketIO.Server;
}
