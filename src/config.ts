import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "ustars",
    name: "Embeddable House",
    chainId: "elgafar-1",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            auction:
                "andr163kruqcxvt7xxhnkfpanaf39uzfg67zkdkr7zuste8550d0jjknqjypv6m",
            cw721: "andr16twkc89ul5zwxhd9f7ykkcchj5g6m4m9clr0dsdljgy5z0wrsevq2tjrnk",
            name: "dontpanic",
            type: ICollectionType.AUCTION,
            id: "embeddables-auction-1",
            featured: "ANDR1"
        },
       
    ],
};

export default CONFIG;
