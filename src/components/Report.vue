<template>
<v-sheet>
  <v-btn color="green lighten-1" dark @click.stop="dialog = true"
    >I want to report a sexual assulat case</v-btn
  >

<v-dialog v-model="dialog" max-width="500">
        <v-card>
          <v-container>
            <v-form @submit.prevent="addCase">
              <div id='example-3'>
                <input type="checkbox" id="rape" value="Rape" v-model="casetype">
                <label for="rape">Rape</label>
                <br>
                <input type="checkbox" id="unwantedtouching" value="Unwanted Touching" v-model="casetype">
                <label for="unwantedtouching">Unwanted Touching</label>
                <br>
                <input type="checkbox" id="minors" value="Sexual Contact with Minors" v-model="casetype">
                <label for="minors">Sexual Contact with Minors</label>
                <br>
                <input type="checkbox" id="sexualharrassment" value="Sexual Harrassment" v-model="casetype">
                <label for="sexualharrassment">Sexual Harrassment</label>
                <br>
                <input type="checkbox" id="fociblesodomy" value="Focible sodomy" v-model="casetype">
                <label for="fociblesodomy">Focible sodomy</label>
                <br>
               <!-- <span>Checked names: {{ casetype }}</span> -->
              </div>
              <!-- <v-select
                :items="casetype"
                v-model="casetype"
                label="Select your condition today! (Required)"
              ></v-select> -->
              <v-select :items="physical" v-model="physical" label="Were you physically hurt?"></v-select>
              
              <!-- <v-select :items="pill" v-model="taken_pill" label="Taken your pills? (Required)"></v-select> -->
              <!-- <v-select :items="inhaler" v-model="inhaler" label=""></v-select> -->
              
        <v-date-picker v-model="picker"></v-date-picker>

              <v-row justify="center"></v-row>
              <v-btn
                type="submit"
                color="green lighten-1"
                class="mr-4"
                @click.stop="dialog = false"
              >Submit Case</v-btn>
            </v-form>
          </v-container>
        </v-card>
      </v-dialog>  
</v-sheet>
</template>

<script>

import { db } from "@/main";
export default {
  
    data: () => ({
      
        picker: new Date().toISOString().substr(0, 10),
      
    
    casetype: [],
    today: new Date().toISOString().substr(0, 10),
    focus: new Date().toISOString().substr(0, 10),
   
    case: [
      "Rape",
      "Unwanted Touching",
      "Sexual Contact with Minors",
      "Incest",
      "Focible sodomy",
      "Sexual Harrassment"
    ],
    // pill: ["Yes", "No"],
    physical: ["Yes","No"],
    // inhaler: ["Yes", "No"],
    
   
    dialog: false
  }),
  
  mounted() {
    //this.getEvents();
  },
  computed: {
    
  },
  methods: {

    
   

   
    async getEvents() {
      //let snapshot = await db.collection("user").get();
      //let events = [];
     // snapshot.forEach(doc => {
       // let appData = doc.data();
       // console.log(appData);
       // appData.id = doc.id;
       // events.push(appData);
     // });
      //this.events = events;
    },
    
    async addCase() {
      console.log(this.casetype);
      if (this.casetype && this.physical) {
        await db.collection("reports").add({
          casetype: this.casetype,
          physical: this.physical,
          date: this.picker
  
        });
       
        (this.casetype = ""), (this.picker = ""),
          (this.physical = "");
        alert("Succeessfully added");
       
      } else {
        alert(
          "You must select a casetype, level of physical injury"
        );
      }
    },
    editEvent(ev) {
      this.currentlyEditing = ev.id;
    },
    async updateEvent(ev) {
      await db
        .collection("patient")
        .doc(this.currentlyEditing)
        .update({
          details: ev.details
        });
      (this.selectedOpen = false), (this.currentlyEditing = null);
    },
    async deleteEvent(ev) {
      await db
        .collection("patient")
        .doc(ev)
        .delete();
      (this.selectedOpen = false), this.getEvents();
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => (this.selectedOpen = true), 10);
      };
      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }
      nativeEvent.stopPropagation();
    },
    updateRange({ start, end }) {
      this.start = start;
      this.end = end;
    },
    nth(d) {
      return d > 3 && d < 21
        ? "th"
        : ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"][d % 10];
    }
  }
};
</script>