import { Navigate } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import VoteContainer from "../styles/styled/Carousel.styled";

const UserHome = ({ user, pageNames }) => {
    const voteClickHandler = (key) => {
        console.log(key);
    };

    console.log("Render userhome page");

    var items = [
        {
            name: "Voting Position #1",
            description:
                "Nestled in the rolling hills of Tuscany, the small village of Montepulciano boasts charming cobblestone streets, historic architecture, and breathtaking views of the surrounding vineyards and countryside.",
            image:
                "https://source.unsplash.com/800x800/?city%20" + Math.random(),
            voteId: 1,
        },
        {
            name: "A Different Voting Posision #2",
            description:
                "With crystal clear turquoise waters, powdery white sand beaches, and vibrant coral reefs, the Maldives is a tropical paradise like no other. The stunning overwater bungalows and luxurious resorts offer ultimate relaxation and an escape from the hustle and bustle of daily life.",
            image:
                "https://source.unsplash.com/800x800/?city%20" + Math.random(),
            voteId: 2,
        },
        {
            name: "Absolutely New Voting Position #3",
            description:
                "Located in the heart of Paris, the iconic Eiffel Tower stands tall and proud, offering panoramic views of the city of love. The charming streets lined with historic architecture and quaint cafes make it the perfect destination for romance and sightseeing.",
            image:
                "https://source.unsplash.com/800x800/?city%20" + Math.random(),
            voteId: 3,
        },
    ];

    const Item = (props) => {
        return (
            <>
                {!user.id && (
                    <Navigate to={`/${pageNames.login}`} replace={true} />
                )}
                <Paper className="fullHeight">
                    <VoteContainer image={props.item.image}>
                        <div className="imageContainer">
                            <img src={props.item.image} alt={props.item.name} />
                        </div>
                        <div className="voteInfo">
                            <h2>{props.item.name}</h2>
                            <p>{props.item.description}</p>
                        </div>

                        <Button
                            variant="contained"
                            size="large"
                            className="CheckButton"
                            endIcon={<TaskAltIcon />}
                            // color="success"
                            onClick={() => voteClickHandler(props.item.voteId)}
                        >
                            My vote for this candidate
                        </Button>
                    </VoteContainer>
                </Paper>
            </>
        );
    };

    // https://github.com/Learus/react-material-ui-carousel/blob/master/README.md
    return (
        <>
            {!user.id && <Navigate to={`/${pageNames.login}`} replace={true} />}
            <Carousel
                autoPlay={false}
                navButtonsAlwaysVisible={true}
                // animation="slide"
                // duration={700}
                swipe={false}
                indicators={true}
            >
                {items.map((item, i) => (
                    <Item key={i} item={item} />
                ))}
            </Carousel>
        </>
    );
};

export default UserHome;
