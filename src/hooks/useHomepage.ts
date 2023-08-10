import axios, { Axios } from "axios";
import {useCallback, useEffect, useState} from "react";

interface TotalResp {
  totalAccount: number;
  totalApproveDao: number;
  totalDao: number;
  totalProposal: number;
}

export function useTotal() {
  const [total, setTotal] = useState<TotalResp>();
  useEffect(()=>{
    axios
      .get("https://apiv3.myclique.io/stpdao/v2/overview/total")
      .then((resp) => setTotal(resp.data.data))
      .catch((e) => {
        console.error("useTotal", e);
        setTotal({
          totalAccount: 0,
          totalApproveDao: 0,
          totalProposal: 0,
          totalDao: 0,
        });
      });
  },[])

  return { total };
}
