import { CosmosSDK } from "../../cosmos-sdk";
import { PrivKey } from "../../tendermint";
import { StdTx } from "./types/std-tx";
import { DecodeReq, EncodeReq, PaginatedQueryTxs, TxQuery } from "../../api";
import { AccAddress } from "../../types";
import { BaseAccount } from "./types";
import { AxiosPromise } from "axios";
/**
 *
 * @param privKey
 * @param stdTx
 * @param accountNumber
 * @param sequence
 */
export declare function signStdTx(sdk: CosmosSDK, privKey: PrivKey, stdTx: StdTx, accountNumber: string, sequence: string): StdTx;
export declare function accountsAddressGet(sdk: CosmosSDK, address: AccAddress): AxiosPromise<{
    height: number;
    result: BaseAccount;
}>;
export declare function txsDecodePost(sdk: CosmosSDK, req: DecodeReq): AxiosPromise<StdTx>;
export declare function txsEncodePost(sdk: CosmosSDK, req: EncodeReq): AxiosPromise<StdTx>;
export declare function txsGet(sdk: CosmosSDK, messageAction?: string, messageSender?: string, page?: number, limit?: number, txMinHeight?: number, txMaxHeight?: number): AxiosPromise<PaginatedQueryTxs>;
export declare function txsHashGet(sdk: CosmosSDK, hash: string): AxiosPromise<TxQuery>;
export declare function txsPost(sdk: CosmosSDK, tx: StdTx, mode: "sync" | "async" | "block"): AxiosPromise<import("../../api").BroadcastTxCommitResult>;
