const lupa = require('../../Assets/ic_Search.png')

export const Input = ({placeholder}) => {

    const [ inpuSearch, setInputSearch ] = useState("");

    const onChangeSearch = (search)=> setInputSearch(seacrh.target.value);

    return (
        <form className="formContainer">
            <input type="text" class="formContainer--input" placeholder={placeholder} onChange={ onChangeSearch }/>
               
            <button type="submit" class="formContainer--button">
                <img src={lupa} alt="Search" class="formContainer--button__img"/>
            </button>
        </form>
    )
}