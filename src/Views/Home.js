import Search from "../Components/Search";

/*

let content = null
const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`

const [product, setProduct] = useState({
    loading: false,
    data: null,
    error: false
})
useEffect(() => {
    setProduct({
        loading: true,
        data:null, error:false
    }
    )
    axios.get(url)
.then(response => (
    setProduct({
        loading: false,
        data: response.data,
        error:false
    }
    )
))
.catch(()=>{
    setProduct({
        loading: false,
        data: null,
        error:true
    }
    )
})
}, [])

if(product.error){
    content = <h1 className="pt-4 ml-3 color-black font-mono">Error Occured</h1>
}

if(product.data){
    content =
    product.data.map((pdt, key) =>
         <div key={pdt.id}>
    Hello
    </div>
    ) 
}

if(product.loading){
    content = <Loader />
}
*/

function Home(){

    return(

        <div>
        <Search />
        </div>
    )
}

export default Home;
