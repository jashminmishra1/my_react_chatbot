import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Educational from './Education';

 //Chatbot main with steps

class SimpleForm extends Component {
    render() {
      return (
        <ChatBot
          steps={[
            {
              id: '1',
              message: 'Hello,I am Jashmin Mishra. What is your name?',
              trigger: 'name',
            },
            {
              id: 'name',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Hi {previousValue}! What all you want to know about me?',
              trigger: 'choose',
            },
            {
              id: 'choose',
              options: [
                { label: 'Professional', value:'Professional', trigger: '4' },
                { label: 'Personal', value:'Personal', trigger: '5' },
              ],
            },
            {
              id: '4',
              options: [
                {label: 'Educational Details',value: 'Educational Details',trigger: '6' },
                {label: 'Training / Courses',value: 'Training / Courses', trigger: '7' },
                {label: 'Skills',value: 'Skills', trigger: '8' },
                {label: 'Projects',value: 'Projects', trigger: '9' },
                {label: 'Activities',value: 'Activities',trigger: '10' },
                {label: 'Workshops',value: 'Workshops', trigger: '11' },
                {label: 'Experience',value: 'Experience', trigger: '12' },
                {label: 'Achievements',value: 'Achievements', trigger: '13' },
              ],
            },
            {
              id: '6',
              component: <Educational/>,
              asMessage: true,
              trigger: '15',
            },
            {
              id: '7',
              component: <Educational/>,
              asMessage: true,
              trigger: '15',
            },
            {
              id: '8',
              component: <Educational/>,
              asMessage: true,
              trigger: '15',
            },
            {
              id: '9',
              component: <Educational/>,
              asMessage: true,
              trigger: '15',
            },
            {
              id: '10',
              component: <Educational/>,
              asMessage: true,
              trigger: '15',
            },
            {
              id: '11',
              component: <Educational/>,
              asMessage: true,
              trigger: '15',
            },
            {
              id: '12',
              component: <Educational/>,
              asMessage: true,
              trigger: '15',
            },
            {
              id: '13',
              component: <Educational/>,
              asMessage: true,
              trigger: '16',
            },

            {
              id: '5',
              component: <Educational/>,
              asMessage: true,
              trigger: '16',
            },

            {
              id: '15',
              message: 'Continue with Professional?',
              trigger:'17',

            },



            {
              id: '17',

              options:[
                {label:'Yes',trigger:'4'},
                {label:'Personal',trigger:'5'}
              ],
            },

            {
              id: '16',
              message: 'Switch to',
              options:[
                {label:'Personal',trigger:5},
                {label:'End',trigger:'end-message'}
              ],
            },


            {
              id: 'end-message',
              message: 'Thanks! Your data was submitted successfully!',
              end: true,
            },
          ]}
        />
      );
    }
  }

  export default SimpleForm;
