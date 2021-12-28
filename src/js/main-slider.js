import { tns } from "../../node_modules/tiny-slider/src/tiny-slider"


export default class Banner {
    constructor(options) {
      return this.slider = tns(
        options
      )
    }
  }

// export default class Banner {

//     init() {
//         this.getSlider().play();
//     }

//     getSlider () {
//         return tns({
//             container: '.banner__slider',
//             //items: 1,
//             loop: false,
//             controlsContainer: "#customize-controls",
//             //slideBy: 1,
//             nav: true,
//             navContainer: "#customize-paginations",
//             autoplay: true,
//             autoplayButtonOutput: false
//         })
//     }

// }


// export default class Banner {

//     init() {
        
//          this.getSlider().play();
        
//     }

//     getSlider (settings) {
//         return tns(settings)
//     }

// }

// let slider = tns({
//     container: '.my-slider',
//     items: 1,
//     slideBy: 'page',
//     autoplay: true,
//     responsive: {
//       640: {
//         items: 2
//       },
//       1000: {
//         items: 3
//       },
//       1400: {
//         items: 4
//       }
//     }
//   });





//  export default class Banner {

//     constructor (id) {
//         this.container = document.getElementById(`${id}`)
//     }

//     init() {
//                 this.getSlider();
//             }
    
//     getSlider () {
//         console.log(this.container);
//         return tns({
//             container: this.container,
//             //items: 1,
//             loop: false,
//             controlsContainer: "#customize-controls",
//             //slideBy: 1,
//             nav: true,
//             navContainer: "#customize-paginations",
//             autoplay: true,
//             autoplayButtonOutput: false
//         })
//     }
//     // constructor (settings){
//     //     this.slider = tns(settings).play();
//     // }
// }

