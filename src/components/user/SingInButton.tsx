import { useSession, signOut, signIn } from "next-auth/react";
import Image from "next/image";

const SignInButton = () => {
    const { data: session, status } = useSession();

    if (session && session.user) {
        return (
            <div>
                <Image width={128} height={128} alt="user avatar" src={session.user.image || "default_avatar.png"}></Image>
                <p>{session.user.name}</p>
                <p>{session.user.email}</p>
                <p>{status}</p>
                <button
                    onClick={() => {
                        signOut({ redirect: false });
                    }}
                >
                    Sair
                </button>
            </div>
        );
    }

    return (
        <div>
            <button
                onClick={() => {
                    signIn();
                }}
            >
                Entrar
            </button>
        </div>
    );
};

export default SignInButton;
