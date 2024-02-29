import React from "react";

import Nav from "../../../../component/Nav";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <Nav />
      <br /> tile: {params.id} <br />
      content : Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
      pariatur, in aut illum rerum omnis.
    </div>
  );
}
