"use client";

type Props = {
    id: string;
}

export default function Page({params}: {params: Props}) {
    const newId = params.id;
    
    return <div>{newId}</div>
}