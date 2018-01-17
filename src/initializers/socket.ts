import { IConfig } from "contracts/IConfig";
import * as SockerIO from "socket.io";

export default async function(config: IConfig) {
    const io = SockerIO(config.socketPort);
    return io;
}
