import { Javascript } from "@mui/icons-material";
import React from "react";

function Precode() {
  // prettier-ignore
  const sampletext = ["foo", 
  "hoge"];

  return (
    <div className="Precodewidth">
      <div>Precode</div>

      <pre>
        <code>
          {
            "22<pre>'code fooo hoge'</pre><pre>'code fooo hoge'</pre><pre>'code fooo hoge'</pre>"
          }
        </code>
      </pre>

      <div className="codetitle">javascript</div>
      <pre>
        <code>
          <p>
            hooooohooooohooooohooooohooooohooooohooooohooooohooooohooooohooooo
            hooooo hooooo hooooo hooooo hooooo hooooo hooooo hooooo
          </p>
          <p>hooofoooo</p>
          <div>
            {
              "<pre>'code fooo hoge'</pre><pre>'code fooo hoge'</pre><pre>'code fooo hoge'</pre><pre>'code fooo hoge'</pre><pre>'code fooo hoge'</pre><pre>'code fooo hoge'</pre>"
            }
          </div>
          <div>
            {
              "<pre>'code fooo hoge'</pre><pre>'code fooo hoge'</pre><pre>'code fooo hoge'</pre><pre>'code fooo hoge'</pre><pre>'code fooo hoge'</pre><pre>'code fooo hoge'</pre>"
            }
          </div>
        </code>
      </pre>
    </div>
  );
}

export default Precode;
