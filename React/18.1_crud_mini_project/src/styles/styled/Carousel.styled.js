import styled from "styled-components";

const VoteContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    align-content: center;
    h2 {
        font-size: 1.5em;
        text-align: center;
        margin-bottom: 0.5em;
    }
    p {
        font-size: 1.2em;
    }
    .imageContainer {
        margin: auto;
        max-width: calc(100% - 7em);
        height: calc(100vh - 20em);
    }
    .imageContainer > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    .voteInfo {
        margin: 1em auto;
        max-width: 800px;
    }
    button {
        max-width: 800px;
        margin: 1em auto;
    }
`;
export default VoteContainer;
