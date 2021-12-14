import { tns } from "../../node_modules/tiny-slider/src/tiny-slider"

export default class Banner {

    init() {
        this.getSlider().play();
    }

    getSlider () {
        return tns({
            container: '.banner__slider',
            //items: 1,
            loop: false,
            controlsContainer: "#customize-controls",
            //slideBy: 1,
            nav: true,
            navContainer: "#customize-paginations",
            autoplay: true,
            autoplayButtonOutput: false
        })
    }

}