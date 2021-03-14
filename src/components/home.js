import flowers from '../data';
import Figure from 'react-bootstrap/Figure';
import 'bootstrap/dist/css/bootstrap.css';


function Home() {

    return (
        <div>
            <h3 style={{textAlign: "center"}}>Home</h3>
            {createFlowers()}
        </div>
    );
}

function createFlowers() {
    var images = [];
    for (var flower of flowers) {
        images.push(<Figure>
            <Figure.Image width={170} height={180}
                alt={flower.name}
                src={flower.picture} />
            <Figure.Caption>{flower.name}</Figure.Caption>
        </Figure>)
    }
    return images;
}

export default Home;