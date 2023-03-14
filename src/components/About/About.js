import React from "react";
import "./index.css";

function About() {
    return (
        <section className="page-section container" id="about">
      <div className="sectionHeading" id="aboutHeading">
        <h2 className="">About Me</h2>
      </div>
      <div className="vertical-line" id="first-line"></div>
      <div className="sectionContent" id="aboutText">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum sapien vel maximus mollis.
        Nullam ut ornare ipsum, ut lacinia mauris. In tincidunt vehicula mi, eu ultrices risus lobortis eget.
        Etiam vestibulum venenatis justo et convallis. Cras aliquet enim nec sapien interdum elementum.
        Pellentesque auctor nulla id bibendum molestie. Pellentesque vitae tristique ligula, ut bibendum ante.
        Sed eget suscipit ligula.</p>

        <br />

        <p>Aliquam semper dignissim ligula. Mauris in leo est. Maecenas sagittis dui sed tellus tristique,
        id suscipit odio laoreet. Vivamus vel odio at dolor dignissim mollis. Vestibulum mollis velit nibh,
        vitae accumsan eros pulvinar a. Quisque sodales consequat dolor, et sodales arcu scelerisque sed.
        Proin non leo quis orci blandit aliquam. Aliquam eu nunc auctor quam accumsan pretium vitae id sapien.
        Phasellus nec dolor ac magna posuere bibendum et vel sem. Sed varius velit id ex iaculis, at maximus orci hendrerit.
        Nam eget ullamcorper nulla, eget dignissim arcu. Praesent scelerisque accumsan tristique.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

        <br />

        <p>Cras venenatis, ipsum a hendrerit condimentum, odio purus euismod dolor, id congue libero lorem et purus.
        Nulla sed mattis tellus. Nam vitae tortor id nunc dapibus facilisis. Sed vulputate vel metus ac dapibus.
        Morbi venenatis felis orci, non porttitor dui volutpat mollis. Nam tincidunt urna sed ullamcorper mollis.
        Quisque quam magna, tincidunt non vulputate vel, condimentum eget leo. Nam a varius arcu.
        Sed facilisis tellus sit amet sem luctus, eu hendrerit velit pharetra. Curabitur laoreet mauris id vulputate interdum.
        Etiam vel est pharetra, faucibus turpis non, lacinia enim. Pellentesque viverra pretium maximus.
        Aliquam accumsan eros a leo posuere, id congue mauris mollis. In at scelerisque purus.
        Aenean eu dui porttitor, facilisis nunc ac, porttitor nunc.</p>
      </div>
    </section>
    );
}

export default About;