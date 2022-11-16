import React, { Component, Fragment } from "react";
// import { Button } from "reactstrap";
import axios from "axios";
import { Button, FormGroup, Form } from "react-bootstrap";
import { DT_URL } from "../constants";

class PdfControl extends Component {
    handleFile = (event) => {
        event.preventDefault();
    
        const fileToUpload = event.target.files[0];
        this.setState({
          fileToUpload: fileToUpload,
        });
      };
    
    //   handleSubmitData = (event) => {
    //     event.preventDefault();
    
    //     var formData = new FormData();
    //     formData.append("file", this.state.fileToUpload);
    
    //     axios
    //       .post("data/", formData)
    //       .then((response) => {
    //         console.log(response);
    //       })
    //       .catch((error) => {
    //         console.log(error.response);
    //       });
    //   };
    handleSubmitData = async(event) =>{
      console.log("submitdata")
        event.preventDefault();
        const up_file = event.target[0].files[0];

        var formData = new FormData();
        formData.append("fdata", up_file);
        formData.append("enctype", "multipart/form-data");
          
        axios({
          method: "post",
          url: DT_URL,
          data: formData          
        }).then(function(response){
          console.log(response)
        })
        // axios
        //     .post(DT_URL, formData)
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch((error) => {
        //         console.log(error.response);
        //     });
    }

  render() {
    var button = <Button onClick={this.toggle}>Upload</Button>;
    button = (
        <Button
          color="primary"
          className="float-right"
          onClick={this.toggle}
          style={{ minWidth: "200px" }}
          value="SUBMIT"
        >
          Submit          
        </Button>
      );
    return (      
      <Fragment>        
        <form onSubmit={this.handleSubmitData} >
          <FormGroup>
            <Form.Control type="file" onChange={this.handleFile} name="fdata"></Form.Control>
            {button}
          </FormGroup>          
        </form>
      </Fragment>
    );
  }
}     

export default PdfControl;
