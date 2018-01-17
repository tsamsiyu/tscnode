import { IConfig } from "contracts/IConfig";
import * as fs from "fs-extra";
import { BlockchainStore } from "services/BlockchainStore";

export default async function(config: IConfig) {
    try {
        const ok = await fs.access(config.blockchainDir, fs.constants.W_OK | fs.constants.R_OK);
        return new BlockchainStore(config.blockchainDir);
    } catch (err) {
        return err;
    }
}
