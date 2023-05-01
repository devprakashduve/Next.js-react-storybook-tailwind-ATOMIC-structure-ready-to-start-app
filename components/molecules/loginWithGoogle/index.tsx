import { useSession, signIn, signOut } from "next-auth/react";
import { loginWithGoogleProps } from "./_login.interface";

const LoginWithGoogle = (props: loginWithGoogleProps) => {
  const { data: session } = useSession();

  return (
    <>
      {!session ? (
        <span
          className="bg-lime-200 p-2 px-4 rounded-lg"
          onClick={() => signIn("google")}
        >
          {props.loginLabel}
        </span>
      ) : (
        <span onClick={() => signOut()}>{props.registertLabel}</span>
      )}
    </>
  );
};
export default LoginWithGoogle;
