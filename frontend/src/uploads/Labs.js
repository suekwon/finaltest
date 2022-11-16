import React from "react";

function Labs(){
    const uploadModule = async(e) => {
        e.preventDefault();
        const cust_id = e.target[0].value;

        const up_file = e.target[1].up_file[0];
        const formData = new FormData();
        formData.append("cust_id", cust_id);
        formData.append("f_data", up_file);
        formData.append("enctype", "multipart/form-data")

        const URL = "http://127.0.0.1:8000/uploads/labs"
        axios({
            method:"post",
            url: URL,
            data: formData,
            headers:{
                "Content-Type": "multipart/form-data",
            }
        }).then(function(response){
            console.log(response)
        })

    }
    return(
        <>
        <h1>tt</h1>
        <form onSubmit={uploadModule}>
            cust_id <input type={"text"} name="cust_id"/>
            f_data <input type ="file" name="f_data"/>
            <input type={"submit"} value="SUBMIT" />
        </form>
        </>
    );
}

export default Labs;