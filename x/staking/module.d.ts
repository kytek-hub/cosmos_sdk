import { CosmosSDK } from "../../cosmos-sdk";
import { DelegateReq, RedelegateReq, UndelegateReq } from "../../api";
import { AccAddress, ValAddress } from "../../types";
import { StdTx } from "../auth";
import { AxiosPromise } from "axios";
export declare function delegatorsDelegatorAddrDelegationsGet(sdk: CosmosSDK, address: AccAddress): AxiosPromise<{
    height: number;
    result: import("../../api").Delegation[];
}>;
export declare function delegatorsDelegatorAddrDelegationsPost(sdk: CosmosSDK, delegator: AccAddress, req: DelegateReq): AxiosPromise<StdTx>;
export declare function delegatorsDelegatorAddrDelegationsValidatorAddrGet(sdk: CosmosSDK, delegator: AccAddress, validator: ValAddress): AxiosPromise<{
    height: number;
    result: import("../../api").Delegation;
}>;
export declare function delegatorsDelegatorAddrRedelegationsPost(sdk: CosmosSDK, delegator: AccAddress, req: RedelegateReq): AxiosPromise<StdTx>;
export declare function delegatorsDelegatorAddrUnbondingDelegationsGet(sdk: CosmosSDK, delegator: AccAddress): AxiosPromise<{
    height: number;
    result: import("../../api").UnbondingDelegation[];
}>;
export declare function delegatorsDelegatorAddrUnbondingDelegationsPost(sdk: CosmosSDK, delegator: AccAddress, req: UndelegateReq): AxiosPromise<StdTx>;
export declare function delegatorsDelegatorAddrUnbondingDelegationsValidatorAddrGet(sdk: CosmosSDK, delegator: AccAddress, validator: ValAddress): AxiosPromise<{
    height: number;
    result: import("../../api").UnbondingDelegationPair;
}>;
export declare function delegatorsDelegatorAddrValidatorsGet(sdk: CosmosSDK, delegator: AccAddress): AxiosPromise<{
    height: number;
    result: import("../../api").Validator[];
}>;
export declare function delegatorsDelegatorAddrValidatorsValidatorAddrGet(sdk: CosmosSDK, delegator: AccAddress, validator: ValAddress): AxiosPromise<{
    height: number;
    result: import("../../api").Validator;
}>;
export declare function parametersGet(sdk: CosmosSDK): AxiosPromise<{
    height: number;
    result: import("../../api").InlineResponse2006;
}>;
export declare function poolGet(sdk: CosmosSDK): AxiosPromise<{
    height: number;
    result: import("../../api").InlineResponse2005;
}>;
export declare function redelegationsGet(sdk: CosmosSDK, delegator?: AccAddress, validatorFrom?: ValAddress, validatorTo?: ValAddress): AxiosPromise<{
    height: number;
    result: import("../../api").Redelegation[];
}>;
export declare function validatorsGet(sdk: CosmosSDK, status?: string, page?: number, limit?: number): AxiosPromise<{
    height: number;
    result: import("../../api").Validator[];
}>;
export declare function validatorsValidatorAddrDelegationsGet(sdk: CosmosSDK, validator: ValAddress): AxiosPromise<{
    height: number;
    result: import("../../api").Delegation[];
}>;
export declare function validatorsValidatorAddrGet(sdk: CosmosSDK, validator: ValAddress): AxiosPromise<{
    height: number;
    result: import("../../api").Validator;
}>;
export declare function validatorsValidatorAddrUnbondingDelegationsGet(sdk: CosmosSDK, validator: ValAddress): AxiosPromise<{
    height: number;
    result: import("../../api").UnbondingDelegation[];
}>;
