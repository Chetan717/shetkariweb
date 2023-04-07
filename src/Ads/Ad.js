
import { Adsense } from "@ctrl/react-adsense";

export default function Ads() {
  return (
    <div className="text-center my-3">
      <Adsense
      className="adsbygoogle"
        client="ca-pub-6500167973378849"
        slot="1119605353"
        data-adtest="on"
        style={{ display: "block",width:"100%" }}
        layout="in-article"
        data-full-width-responsive="true"
        format="fluid"
      />
    </div>
  );
}
