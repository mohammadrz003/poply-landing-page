import Section from "@/components/Section";
import Fields from "./Fields";
import {
  useMetamask,
  useConnectionStatus,
  useSDK,
  useAddress,
  useDisconnect,
} from "@thirdweb-dev/react";
import api from "@/constants/config/axiosConfig";

type HeroProps = {};

const Forms = ({}: HeroProps) => {
  const connectWithMetamask = useMetamask();
  const connectionStatus = useConnectionStatus();
  const address = useAddress();
  const disconnect = useDisconnect();
  const sdk = useSDK();

  const handleConnectWallet = async () => {
    await connectWithMetamask();
  };

  const handleSignin = async () => {
    const { data } = await api.post("/api/auth/nonce", {
      walletAddress: address,
    });

    const message: string = data?.nonce;

    if (sdk) {
      const signature = await sdk.wallet.sign(message);
      const { data } = await api.post("/api/auth/verify", {
        walletAddress: address,
        signature,
      });
      console.log("result is: ", data);
    }
  };

  const handleSignout = async () => {
    await disconnect();
  };

  let status;

  if (connectionStatus === "unknown") status = "Loading...";
  if (connectionStatus === "connecting") status = "Connecting...";
  if (connectionStatus === "connected") status = "You are connected";
  if (connectionStatus === "disconnected")
    status = "You are not connected to a wallet";

  return (
    <Section className="overflow-hidden md:-mb-10 xl:-mb-20">
      <div className="container relative z-2">
        <h1 className="text-2xl mb-10 lg:text-3xl font-semibold">
          Register Collection
        </h1>
        {connectionStatus === "connected" ? (
          <div className="flex flex-col gap-y-3 items-start">
            <button className=" d-btn d-btn-primary" onClick={handleSignout}>
              Disconnect Metamask
            </button>
            <button className=" d-btn d-btn-primary" onClick={handleSignin}>
              Sign-in with Metamask
            </button>
          </div>
        ) : (
          <button
            className="text-white d-btn d-btn-primary"
            onClick={handleConnectWallet}
          >
            Connect Metamask
          </button>
        )}

        <p>status is: {status}</p>
        <p>address is: {address ? address : "No wallet connected"}</p>
        <Fields />
      </div>
    </Section>
  );
};

export default Forms;
