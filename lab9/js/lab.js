/**
 * Author:    Squantio
 * Created:   10.03.2022
 *
 * (c) Copyright by scrabungus Corp.
 **/


      document.addEventListener(‘load’, () => {

        let btn1 = document.querySelector('#btn1');
            let handler = () => {
              console.log('you clicked!');
              btn1.style.backgroundColor = 'purple';
              btn1.style.color = 'white';
            };

      });
