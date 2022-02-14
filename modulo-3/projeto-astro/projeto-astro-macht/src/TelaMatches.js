import axios from "axios";

const TelaMatches = () =>{

    const getMatches = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/matches"
        axios
        .get(url)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    } 
    return(
        <div>
            <div>
                <p>?</p>
                <h1>Seus matches estão aqui!</h1>
                
            </div>
        </div>
    )
}
export default TelaMatches



