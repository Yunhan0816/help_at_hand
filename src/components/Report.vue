<template>
<v-container>
  <transition name="slide-fade">
  <v-card outlined = false align = "center" v-if=show color = "transparent"> 
    <v-card-text class="display-4 font-weight-bold">You Are Not Alone 
    </v-card-text>
    </v-card>
  </transition> 

  <transition name="slide-fade">
  <v-card outlined = false align = "center" v-if=showsub color = "transparent"> 
    <v-card-text class="display-2 font-weight-light">Your act of speaking out has the power to heal and change on a broader scale than you may know.  
    </v-card-text>
    </v-card>
  </transition>

  <transition name="fade">
<v-layout v-if=showbutton align-center justify-center>
<v-btn  id="report_button" rounded type="danger" align="center" @click.stop="dialog = true" x-large = true
    >I want to report a sexual assault case</v-btn>
</v-layout>
  </transition>
    <v-sheet>
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
              <v-select :items="physicalBoolean" v-model="physical" label="Were you physically hurt?"></v-select>
              
              <v-date-picker v-model="picker" color=#faa69b></v-date-picker>
            <v-text-field
              v-model="currentperp"
              type="text"
              label="Name of the perpetrator (optional)"
              
            ></v-text-field>
            
            <v-select
                :items="relations"
                v-model="relation"
                label="Relation to the perpetrator"
              ></v-select>
              <br>
            <v-btn
                color="#faa69b"
                class="mr-4"
                @click="addPerp"
              >Add another</v-btn>
            
            <br>
            <br>
            <v-text-field
              v-model="details"
              type="text"
              label="Details of the incident"
              
            ></v-text-field>

            <br>

              <v-row justify="center"></v-row>
              <v-btn
                type="submit"
                color="#faa69b"
                class="mr-4"
                @click.stop="dialog = false"
              >Submit Case</v-btn>
            </v-form>
          </v-container>
        </v-card>
      </v-dialog>  
      
</v-sheet>
</v-container>
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
    relations: [
      "Stranger",
      "Acquaintance or Friend",
      "Partner",
      "Family or Guardian",
      "Colleague or Employer",
      "Teacher or other adult"
    ],
    // pill: ["Yes", "No"],
    physicalBoolean: ["Yes","No"],
    currentperp: "",
    perpnames: [],
    relation: [],
    details: '',
    show:false,
    showsub:false,
    showbutton:false,
    
    // inhaler: ["Yes", "No"],
    
   
    dialog: false
  }),
  
  mounted() {
     this.welcome();
  },
  computed: {
    
  },
  methods: {
    async welcome() {
    setTimeout(() => this.show = true, 500);
    setTimeout(() => this.showsub = true, 2000);
    setTimeout(() => this.showbutton = true, 3500);
    
    },
    async addPerp() {
      this.perpnames.push(this.currentperp);
      this.currentperp="";
      
    },
    
    async addCase() {
      console.log(this.casetype);
      if (this.casetype && this.physicalBoolean) {
        await db.collection("reports").add({
          casetype: this.casetype,
          physicalBoolean: this.physicalBoolean,
          date: this.picker,
          perpnames: this.perpnames,
          details: this.details,
          test:({"perpnames": this.perpnames, "perprelations": this.relation}),
        });
       
        (this.casetype = ""), (this.picker = ""),
          (this.physicalBoolean = ""), (this.details = "");
        alert("Succeessfully added");
        this.welcome();
       
      } else {
        alert(
          "You must select a casetype, level of physical injury"
        );
      }
    },
 
   
  }
};
</script>

<style scoped>
 .fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
} 
/* #report_button {
  text-align: center;
} */
<<<<<<< HEAD

=======
>>>>>>> 4c00babbba4c212254ae759c9fdb27f1e2bf2219
.slide-fade-enter-active {
  transition: all 3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>