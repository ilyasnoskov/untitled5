import {FormControl, Image} from "react-bootstrap";
import {useState} from "react";

function App() {

   const [file,setFile] = useState(null)


    let fileFunc = e => {
        setFile(e.target.files[0])
        console.log(e.target.files)
    }


  return (
    <div >
        <FormControl
            type='file'
            onChange={fileFunc}
        />
    </div>
  );
}

export default App;