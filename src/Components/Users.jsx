import { userInfo } from "./UserInfos"
export const User = () =>{
    return(
        <>
            <h1> { userInfo.name } </h1>
            <img className="avatar"
            src={userInfo.imageUrl}
            alt={'Photo of' + userInfo.name}
            style={{
                width: userInfo.imageSize,
                height: userInfo.imageSize
            }} />
        </>
    )
}