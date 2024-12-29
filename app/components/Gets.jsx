async function getHaikus(id){
console.log(id)
return[]
}

export default async function Dashboard(props){
    const haikus = await getHaikus(props)

    return(
        <div>
            <h2>
                Your Haikus
            </h2>

        </div>
    )
}