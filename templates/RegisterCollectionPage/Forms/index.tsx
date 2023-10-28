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
        <div className="d-alert d-alert-warning bg-yellow-500 text-black mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>Warning: Collection registration will be available soon!</span>
        </div>
        {/* {connectionStatus === "connected" ? (
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
        <p>address is: {address ? address : "No wallet connected"}</p> */}
        <Fields />
      </div>
    </Section>
  );
};

export default Forms;
