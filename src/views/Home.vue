<template>
  <div class="container">
    <b-card>
      <!--//-->
      <h1>Customer</h1>
      <div class="row">
        <b-label class="col-3">Cus ID : </b-label>
        <b-input class="col-7 ml-md-5" type="number" v-model="ID"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">Full Name : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="FN"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">Name : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="Name"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">Last : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="Last"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">Tel : </b-label>
        <b-input class="col-7 ml-md-5" type="number" v-model="Tel"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">Address : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="AD"></b-input>
      </div>
      <br />
      <b-button variant="success" @click="addData()">Customer</b-button>
    </b-card>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { db } from "@/main.js";

export default {
  data() {
    return {
      ID: "",
      FN: "",
      Name: "",
      Last: "",
      Tel: "",
      AD: "",
    };
  },
  methods: {
    addData() {
      const data = {
        Cus_ID: this.ID,
        Full_Name: this.FN,
        Name: this.Name,
        Last: this.Last,
        Tel: this.Tel,
        Address: this.AD,
      };
      db.collection("MyForm")
        .doc("User")
        .set(data)
        .then(function() {
          console.log("Document successfully written!-> MyForm");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
      const dataText = {
        cus_ID: this.ID,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      };
      db.collection("MyText")
        .doc()
        .set(dataText)
        .then(function() {
          console.log("Document successfully written!-> MyText");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    },
  },
};
</script>
