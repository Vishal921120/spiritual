import React from "react";

export const DayShlok = () => {
  return (
    <div
      style={{margin: "2%", marginTop:"6%", background:"#0d6efd", color:"white" , borderRadius:"10px"}}
    >
      <h2 style={{ display: "flex",justifyContent: "space-around"}}>Shloka of the Day</h2>
      <div style={{ display: "flex",justifyContent: "space-around" , paddingBottom:"3px"}}>
        man-manā bhava mad-bhakto mad-yājī māṁ namaskuru <br />
        mām evaiṣyasi satyaṁ te pratijāne priyo ’si me
      </div>
    </div>
  );
};
