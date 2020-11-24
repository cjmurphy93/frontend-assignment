import headshot from '../../images/headshot.jpg';
import heroBackground from '../../images/hero-background.jpg';
import './main.scss';

const Main = () => {
    return (
        <div className="main">
            <img className="heroBackground" src={heroBackground} alt="heroBackground"/>
            <div className="profile">
                <img className="profile__pic" src={headshot} alt="headshot"/>
                <div className="profile__about">
                    <h3 className="profile__title">A little about me</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus libero a elit tempus faucibus. Morbi enim dui, vestibulum a dolor a, hendrerit posuere libero. Phasellus a tincidunt velit. Vivamus nec leo in arcu auctor vestibulum. Vivamus at volutpat augue. Duis ac ipsum quis leo vestibulum posuere eu at sem. Aliquam sed diam elementum lectus malesuada hendrerit. Phasellus vel risus lectus. Pellentesque porta ultrices leo ac mollis. Phasellus eu arcu est. Sed et mauris massa.</p>
                    <p>Suspendisse in odio aliquam, bibendum nunc quis, laoreet purus. Mauris iaculis laoreet ultricies. Proin volutpat eu erat eu rhoncus. Sed maximus euismod enim. Sed non dui dignissim, euismod sapien sed, commodo leo. Suspendisse a nulla sed enim rutrum vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi cursus ornare turpis, sit amet tincidunt velit porta eu.</p>
                    <p>Nam venenatis porta lectus in consectetur. Nunc vestibulum metus eu dui malesuada lacinia. Proin rutrum sodales libero, non porttitor felis fringilla at. Nulla facilisi. Integer at elit laoreet, vulputate tellus id, aliquam velit. Nullam mauris nulla, semper sed mi et, consectetur egestas nunc. Duis sed dui id quam placerat ullamcorper. Sed sit amet orci in enim auctor pulvinar quis quis ex.</p>
                    <p>Nunc ut odio sed ante ornare fringilla ut sit amet dui. Vivamus posuere purus a lacus gravida laoreet. Vivamus et vehicula ipsum. Vestibulum ut efficitur erat, lacinia mollis nisi. Nullam at libero mollis, accumsan quam et, bibendum sapien. Etiam rutrum arcu a erat mattis, at vulputate lorem elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed blandit, purus eget eleifend pulvinar, quam urna blandit urna, id tristique quam odio vitae augue. Donec ut varius turpis.</p>
                    <p>Duis sit amet convallis sem, eget dapibus nulla. Integer commodo cursus turpis id tristique. Nulla mollis commodo lorem, at ultricies mauris hendrerit sed. Vestibulum ac sem magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eu augue dignissim, molestie sem in, porta mi. Phasellus sed velit nec mauris sagittis dapibus. Curabitur fringilla lacus id urna convallis maximus. Suspendisse ornare felis id volutpat semper. Quisque dignissim scelerisque leo, sed sodales risus dictum in. Quisque vel enim ac est suscipit ullamcorper. Donec velit purus, rhoncus interdum molestie sit amet, pulvinar in metus. Integer consectetur erat mi, non lacinia turpis euismod ac. Praesent et vehicula dolor, ultricies finibus dui.</p>
                    <p>Ut et quam pellentesque, iaculis justo in, elementum libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla ac arcu sodales, imperdiet velit eu, commodo orci. Etiam volutpat iaculis augue. Nulla facilisi. Fusce fermentum magna non iaculis efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras a dolor non leo elementum viverra. In mollis pretium felis, ac mattis leo dictum vitae. Maecenas laoreet sollicitudin est nec varius. Etiam nibh nunc, commodo ut congue sit amet, ultrices eu velit. Vestibulum auctor, metus in convallis sollicitudin, lectus enim vehicula augue, quis varius turpis turpis ac orci. Donec nec tellus ullamcorper, aliquet neque sed, eleifend ante. Ut vulputate fermentum euismod. Nullam non arcu nulla. Proin consectetur faucibus metus vitae finibus.</p>
                </div>
            </div>
        </div>
    );
};

export default Main;