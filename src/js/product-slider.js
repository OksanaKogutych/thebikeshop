import { tns } from "../../node_modules/tiny-slider/src/tiny-slider"

export default class Slider {

    constructor (id) {
        this.container = document.getElementById(`${id}`)
    }

    init() {
                this.getSlider();
            }
    
    getSlider () {
        console.log(this.container);
        return tns({
            container: this.container,
            items: 1,
            loop: true,
            controlsContainer: ".products #customize-controls",
            slideBy: 1,
            nav: false,
            autoplay: false,
            autoplayButtonOutput: false,
            
        })
    }
   
}