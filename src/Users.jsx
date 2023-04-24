const userInfo = {
    name: "Kelzem",
    imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7f7c594b-4131-4a46-a947-7f51c8aafb29/defmecg-1d2e755f-9c4c-49b1-8d42-d60940d41abe.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdmN2M1OTRiLTQxMzEtNGE0Ni1hOTQ3LTdmNTFjOGFhZmIyOVwvZGVmbWVjZy0xZDJlNzU1Zi05YzRjLTQ5YjEtOGQ0Mi1kNjA5NDBkNDFhYmUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GfS2i3VhZeahqnUyBzd61HVdrZhybSuizmJ_1640wjY',
    imageSize: 90,
}

const User = () =>{
    return(
        <>
            <h1>{userInfo.name</h1>
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