import React from 'react'
import { useParams } from "react-router-dom"

export default function Profile() {
    const params: any = useParams();
    const profileName: string = params.id?.toLowerCase();

  return (
    <div>
        <h1> Voici votre profil {profileName} </h1>
    </div>
  )
}
