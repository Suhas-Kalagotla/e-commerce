import { useSession } from "next-auth/react";

export default function DashBoardHeader() {
    const { data: session } = useSession();
    return (
        <div className="w-full shadow-xl flex gap-2 p-4 justify-end">
            
        </div>
    )
}
