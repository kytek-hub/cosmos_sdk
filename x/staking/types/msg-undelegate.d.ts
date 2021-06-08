import { AccAddress } from "../../../types/address/acc-address";
import { ValAddress } from "../../../types/address/val-address";
import { Msg } from "../../../types/msg";
import { Coin } from "../../../api";
export declare class MsgUndelegate extends Msg {
    delegator_address: AccAddress;
    validator_address: ValAddress;
    amount: Coin;
    /**
     * @param delegator_address
     * @param validator_address
     * @param amount
     */
    constructor(delegator_address: AccAddress, validator_address: ValAddress, amount: Coin);
    /**
     *
     * @param value
     */
    static fromJSON(value: any): MsgUndelegate;
}
