import React, { Component } from 'react';
import { connect } from "react-redux";
import store from './store'
import {addTask, updateInput, updateTask, checked} from './actions';
import './App.css';
import NameForm from './NameForm'

const request = require("request");
const rp = require("request-promise-native")

const token = "ZKICIOFXYUECNOUOBESJGZRVBKXHAQCLRBFPWEBADTVNEYRWFNAFREOVQVUAZJVK";
const source = "google_shopping"
const topic = "product_and_offers"
const country = "us"
const key = "term"



const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

class App extends Component {

  printCheck(element){
    if(element){return " Done ! "}
    return " Checked? ";
  }

  api_jobs(stateInput, index){
    let image_source;
    let image_list = [];

    //   (element, i) => {
    return image_source = rp({
        url: `https://api.priceapi.com/v2/jobs`,
        method: "POST",
        form: {
          "token": token,
          "source": source,
          "topic": topic,
          "country": country,
          "key": key,
          "values": stateInput
        }
      }
    )
    .then(result => {
      const jobId = JSON.parse(result).job_id;
      console.log(JSON.parse(result));
      return rp(
        {
          url: `https://api.priceapi.com/v2/jobs?${jobId}&token=${token}`,
          method: "GET"
        }
      );
    })
    .then(result => {
      const json_result = JSON.parse(result)
      console.log(JSON.parse(result));

      let i = 1;
      let idJob = "";

      if(json_result[0].status !== "finished"){

      }
      while(json_result[json_result.length-i].status === "finished" && i<json_result.length){
        idJob = json_result[json_result.length-i].job_id;
        console.log("idJob is : ", idJob);
        i++
      }
      return rp({
        url: `https://api.priceapi.com/v2/jobs/${idJob}/download.json?token=${token}`
      })
    })
    .then(result => {
      return JSON.parse(result)
    })
    .then(result => {
      console.log(result);
      // image_source = <img src={result.results[0].content.image_url} />
      let resultsList = []
      resultsList.push(result.results[0].content.image_url);
      resultsList.push(result.results[0].content.price);
      resultsList.push(result.results[0].content.review_rating);
      console.log("update task called with : ", index, resultsList);
      this.props.updateTask(resultsList, index)
      return resultsList;
    });
  }

  // result.results[0].content.price;
  // result.results[0].content.review_rating;
  //
  // componentWillUpdate(){
  //   return this.props.listTask.map(
  //     (element, i) => {
  //       if(element.url === ""){
  //         this.api_jobs(element.text, i).then(result => {
  //           console.log("been here");
  //           return [...element, element.url: result]
  //         })
  //       }
  //       else {
  //         return [...element]
  //       }
  //     }
  //   )
  // }

  renderList(){
    return this.props.listTask.map(
      (element, i) => {
        if(element.url === ""){
          this.api_jobs(element.text, i)
        }
        console.log("returning : ", element);
        return (
          <li key={i}>
            {element.text} :
             Price is : {element.price},
            Rating is : {element.rating}/100 :
            <button onClick={() => this.props.checked(element.key)}>
              {this.printCheck(element.finished)}
            </button>
            <img src={element.url} height="40"/>
          </li>
        );
      }
    );
  }

  render() {
    return (
      <div>
        <h1> Todo App </h1>
        {NameForm()}
        <ul>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}
//
function mapStateToProps(state){
  return {
    listTask: store.getState().listTask,
    input: store.getState().input
  }
}

function mapDispatchToProps(dispatch){
  return {
    addTask: () => dispatch(addTask()),
    updateTask: (url, index) => dispatch(updateTask(url, index)),
    updateInput: () => dispatch(updateInput()),
    checked: (index) => dispatch(checked(index))
  }
}


"5c6549ffad19f50e695589c5"
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

//
export default ConnectedApp;
