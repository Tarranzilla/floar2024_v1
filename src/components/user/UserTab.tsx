import { useSession, signOut, signIn } from "next-auth/react";
import Image from "next/image";

const UserTab = () => {
    const { data: session, status } = useSession();

    if (session && session.user) {
        return (
            <div className="User_Tab">
                <Image
                    className="User_Tab_Avatar"
                    width={128}
                    height={128}
                    alt="user avatar"
                    src={session.user.image || "default_avatar.png"}
                ></Image>
                <p className="User_Tab_Name Dark_Pill">{session.user.name}</p>
                <p className="User_Tab_Email Dark_Pill">{session.user.email}</p>
                <p className="User_Tab_Status Dark_Pill">{status}</p>
                <button
                    className="Btn"
                    onClick={() => {
                        signOut({ redirect: false });
                    }}
                >
                    Fazer Logout
                </button>
            </div>
        );
    }

    return (
        <div className="User_Tab">
            <Image className="User_Tab_Avatar" width={128} height={128} alt="user avatar" src={"/default_avatar.png"}></Image>
            <p className="User_Tab_Name Dark_Pill">Perfil Anônimo</p>
            <p className="User_Tab_Email Dark_Pill">Nenhum email</p>
            <p className="User_Tab_Status Dark_Pill">Sem Autenticação</p>
            <button
                className="Btn"
                onClick={() => {
                    signIn();
                }}
            >
                Fazer Login
            </button>
        </div>
    );
};

export default UserTab;
