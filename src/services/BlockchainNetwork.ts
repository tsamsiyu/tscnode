import { BlockchainStore } from "services/BlockchainStore";

export class BlockchainNetwork {
    private store: BlockchainStore;

    constructor(store: BlockchainStore) {
        this.store = store;
    }
}
